"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 340;

export function SystemOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canvas || reduceMotion) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);
    const system = new THREE.Group();
    scene.add(system);

    const amber = new THREE.Color("#e5b90b");
    const ivory = new THREE.Color("#f1eee6");
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.9, 3),
      new THREE.MeshBasicMaterial({ color: amber, wireframe: true, transparent: true, opacity: 0.76 })
    );
    core.scale.set(1, 1.08, 1);
    system.add(core);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.DodecahedronGeometry(1.6, 0)),
      new THREE.LineBasicMaterial({ color: ivory, transparent: true, opacity: 0.18 })
    );
    wire.rotation.set(0.42, -0.24, 0.14);
    system.add(wire);

    const orbitLines: THREE.LineLoop[] = [];
    [
      [1.72, 0.36, -0.18, -0.5],
      [2.14, -0.28, 0.56, 0.62],
      [2.58, 0.64, -0.28, -0.08]
    ].forEach(([radius, x, z, rotation], index) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * (index === 1 ? 0.42 : 0.3), 0, Math.PI * 2, false, 0);
      const orbit = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(120)),
        new THREE.LineBasicMaterial({ color: index === 1 ? amber : ivory, transparent: true, opacity: index === 1 ? 0.47 : 0.2 })
      );
      orbit.rotation.set(x, rotation, z);
      system.add(orbit);
      orbitLines.push(orbit);
    });

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const radius = 1.5 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.38;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: amber, size: 0.028, transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    system.add(particles);

    const nodes = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: amber });
    [[1.6, 0.3, 0.3], [-1.23, -0.54, -0.2], [0.38, 1.02, -0.42], [-0.62, -1.05, 0.18]].forEach(([x, y, z]) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);
      nodes.add(node);
    });
    system.add(nodes);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.75;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.45;
    };
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();

    let frame: number | undefined;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      system.rotation.y += (pointer.x - system.rotation.y) * 0.018;
      system.rotation.x += (-pointer.y - system.rotation.x) * 0.018;
      system.rotation.z = Math.sin(time * 0.3) * 0.12;
      core.rotation.set(time * 0.38, -time * 0.58, time * 0.18);
      wire.rotation.y -= 0.0014;
      particles.rotation.y += 0.0008;
      nodes.rotation.z = -time * 0.22;
      orbitLines.forEach((orbit, index) => { orbit.rotation.z += 0.00055 * (index + 1); });
      renderer.render(scene, camera);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && frame === undefined) animate();
      if (!entry.isIntersecting && frame !== undefined) {
        window.cancelAnimationFrame(frame);
        frame = undefined;
      }
    }, { threshold: 0.05 });
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      orbitLines.forEach((orbit) => { orbit.geometry.dispose(); (orbit.material as THREE.Material).dispose(); });
      particleGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="system-orbit" aria-hidden="true" />;
}
