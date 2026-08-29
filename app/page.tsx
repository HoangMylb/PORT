"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, FileText, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const work = [
  {
    name: "MDOP",
    kind: "Porsche-inspired model discovery and conversion experience",
    image: "/images/mdop-live-home.webp",
    alt: "Silver Porsche in a dark architectural space from the MDOP homepage",
    focus: "Design → product reasoning → interaction → engineering",
    detail:
      "A live journey from model lines to vehicle finder, comparison, ownership confidence, and a clear configuring next step.",
    tags: ["Model discovery", "Vehicle finder", "Compare tray"],
    engineering:
      "state persistence, browser guards, responsive images, accessible interaction, reduced motion",
    url: "https://mdop-indol.vercel.app/"
  },
  {
    name: "THÈM GÌ CŨNG CÓ",
    kind: "Bánh tráng brand and ordering experience",
    image: "/images/them-gi-cung-co-live-home.png",
    alt: "Bánh tráng cuốn trứng lòng đào from the THÈM GÌ CŨNG CÓ homepage",
    focus: "Food-first menu discovery, store access, and ordering intent",
    detail:
      "A live food experience led by its signature bánh tráng cuốn, with a direct path to the menu, store information, and ordering.",
    tags: ["Menu discovery", "Store access", "Ordering CTA"],
    engineering:
      "mobile-first composition, food-led imagery, intentional content density",
    url: "https://themgicungco.vercel.app/"
  },
  {
    name: "FlowPilot",
    kind: "Bug-fix case study playground",
    image: "/images/flowpilot-live-home.png",
    alt: "FlowPilot AI operations interface and interactive workflow preview card",
    focus: "Debugging → focused repair → safer product behavior",
    detail:
      "A concept product implementation that demonstrates how I investigate common issues inside an existing web product, then make focused fixes without disturbing unrelated UI or flows.",
    tags: [
      "UI positioning and interaction",
      "Defensive API rendering",
      "Form validation and async states",
      "Responsive layout architecture",
      "State consistency under rapid interaction"
    ],
    engineering:
      "Positioning context, fallback UI states, validation boundaries, async feedback, responsive structure, and predictable state updates.",
    url: "https://bug-fix-gamma.vercel.app/",
    linkLabel: "Live case study",
    disclosure:
      "Concept implementation for frontend debugging and product reasoning. Not a commercial client project."
  }
];

const expertise = [
  ["Frontend engineering", "React, Next.js, TypeScript, responsive UI, component architecture"],
  ["Product interface", "UI implementation, interaction, motion, accessibility, performance"],
  ["Existing app bug fixing", "Debug and repair scoped issues in existing React and Next.js applications: broken user flows, frontend/API mismatches, responsive UI problems, authentication integration, and dashboard bugs."],
  ["Frontend / API integration", "Trace and resolve issues across React UI, REST APIs, and backend integration—including .NET and authentication boundaries."],
];

const flowdeskCases = [
  {
    title: "API Data Loads, UI Renders Empty",
    evidence: "GET /api/customers returned HTTP 200 with valid records, but the UI showed an empty state.",
    rootCause: "Frontend expected a wrapped response while the API returned Customer[].",
    capability: "API contract debugging"
  },
  {
    title: "Valid Login Credentials Rejected",
    evidence: "The login request reached ASP.NET Core but returned HTTP 400 before credential verification.",
    rootCause: "Frontend sent emailAddress while the backend DTO expected email.",
    capability: "Frontend ↔ backend authentication debugging"
  },
  {
    title: "Dashboard Overflowed on Mobile",
    evidence: "Desktop was correct, but the KPI grid exceeded 375–390px mobile viewports.",
    rootCause: "Two 210px minimum grid columns exceeded available mobile width.",
    capability: "Responsive UI regression debugging"
  }
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !root.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".intro-reveal",
        { yPercent: 105 },
        { yPercent: 0, duration: 1.05, stagger: 0.12, ease: "power4.out", delay: 0.12 }
      );

      gsap.fromTo(
        ".hero-portrait",
        { clipPath: "inset(100% 0 0 0)", scale: 1.08 },
        { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.25, ease: "power4.out", delay: 0.28 }
      );

      gsap.utils.toArray<HTMLElement>(".work-image").forEach((image) => {
        gsap.fromTo(
          image,
          { clipPath: "inset(16% 0 16% 0)", y: 30 },
          {
            clipPath: "inset(0% 0 0% 0)",
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: { trigger: image, start: "top 82%", once: true }
          }
        );
      });

      gsap.fromTo(
        ".flowdesk-proof",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".flowdesk-proofs", start: "top 78%", once: true }
        }
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main ref={root}>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Hoàng Mỹ home">HM<span>·</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="header-link" href="/Hoang_My_Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
          <a className="header-link" href="https://github.com/HoangMylb" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <section className="hero wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="availability"><i /> Available for thoughtful product work</p>
          <h1 id="hero-title">
            <span className="line-mask"><span className="intro-reveal">Frontend systems</span></span>
            <span className="line-mask"><span className="intro-reveal accent-word">with intent.</span></span>
          </h1>
          <p className="hero-summary">I’m Hoàng Mỹ — a React and Next.js specialist building polished digital experiences where engineering, interface, and product thinking meet.</p>
          <div className="hero-ctas">
            <a className="text-cta" href="#work">Explore selected work <ArrowDownRight size={19} /></a>
            <a className="text-cta" href="/Hoang_My_Resume.pdf" target="_blank" rel="noreferrer">View Resume (PDF) <ArrowUpRight size={19} /></a>
          </div>
        </div>
        <aside className="hero-rail" aria-label="Professional summary">
          <div className="portrait-frame hero-portrait"><Image src="/images/hoang-my.jpg" alt="Hoàng Mỹ" fill priority sizes="(max-width: 800px) 78vw, 28vw" /></div>
          <dl>
            <div><dt>Focus</dt><dd>React / Next.js</dd></div>
            <div><dt>Experience</dt><dd>2.5+ years</dd></div>
            <div><dt>Approach</dt><dd>Build · Debug · Improve</dd></div>
          </dl>
        </aside>
      </section>

      <section className="statement wrap" aria-label="Positioning">
        <p>I care about <em>how it works</em> and <em>how it feels</em>—from reusable architecture and API flows to the hierarchy, motion, and clarity a user actually experiences.</p>
      </section>

      <section className="flowdesk wrap" aria-labelledby="flowdesk-title">
        <div className="flowdesk-intro">
          <p className="project-label">Featured debugging case study</p>
          <h2 id="flowdesk-title">Not every project needs to be rebuilt.</h2>
          <p className="flowdesk-lead">FlowDesk demonstrates how I approach an inherited application when something is already broken: reproduce the issue, inspect the evidence, trace the affected flow, identify the root cause, apply a scoped fix, and verify surrounding behavior.</p>
          <p className="flowdesk-positioning">I work best with existing React and Next.js applications where the product already exists but a user flow, API integration, authentication path, or responsive interface needs to be understood and fixed.</p>
          <a className="flowdesk-cta" href="https://flowdesk-chi-olive.vercel.app/" target="_blank" rel="noopener noreferrer">Explore FlowDesk <ArrowUpRight size={18} /></a>
        </div>
        <div className="flowdesk-evidence">
          <div className="flowdesk-heading">
            <div><p className="project-label">FlowDesk</p><h3>Existing app. Specific problem. Scoped fix.</h3></div>
            <p>React · Next.js · TypeScript · ASP.NET Core · EF Core · SQL Server · REST API · JWT</p>
          </div>
          <ol className="flowdesk-proofs">
            {flowdeskCases.map((caseStudy, index) => (
              <li className="flowdesk-proof" key={caseStudy.title}>
                <p className="case-number">Case 0{index + 1}</p>
                <h4>{caseStudy.title}</h4>
                <p><span>Evidence</span>{caseStudy.evidence}</p>
                <p><span>Root cause</span>{caseStudy.rootCause}</p>
                <p className="case-capability">{caseStudy.capability}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="work-section wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Selected work</h2><p>Live project evidence, paired with the product and engineering decisions that made each experience work. FlowDesk is the featured existing-app debugging case study above.</p></div>
        {work.map((project, index) => (
          <article className="project" key={project.name}>
            <div className="project-copy">
              <p className="project-count">0{index + 1}</p>
              <h3>{project.name}</h3>
              <p className="project-kind">{project.kind}</p>
              <p className="project-focus">{project.focus}</p>
              <p className="project-detail">{project.detail}</p>
              <ul className="project-tags" aria-label={`${project.name} technologies and focus`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <p className="engineering-note"><span>Engineering consideration</span>{project.engineering}</p>
              {project.disclosure && (
                <p className="project-disclosure">{project.disclosure}</p>
              )}
            </div>
            <div className="project-media"><a className="work-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live project`}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 63vw" /></a><p><a href={project.url} target="_blank" rel="noreferrer">{project.linkLabel ?? "Live homepage visual"} <ArrowUpRight size={13} /></a></p></div>
          </article>
        ))}
      </section>

      <section className="expertise wrap" id="expertise" aria-labelledby="expertise-title">
        <div className="section-heading"><h2 id="expertise-title">What I bring</h2><p>Technology supports the work. The goal is a better product surface and a codebase that can keep moving.</p></div>
        <div className="expertise-list">
          {expertise.map(([title, description]) => <div className="expertise-row" key={title}><h3>{title}</h3><p>{description}</p><ArrowDownRight aria-hidden="true" /></div>)}
        </div>
      </section>

      <section className="method wrap" aria-labelledby="method-title">
        <div><h2 id="method-title">Build. Debug.<br />Improve.</h2><p>I’m comfortable starting from a blank surface—and stepping into a system that is already running, tracing what changed, then making the right improvement without disturbing the rest.</p></div>
        <ol>
          <li><span>Understand</span><p>Read the architecture, intent, and data flow before proposing a fix.</p></li>
          <li><span>Diagnose</span><p>Trace interface, API, backend, and interaction boundaries to find the real cause.</p></li>
          <li><span>Build</span><p>Ship a focused feature or repair with maintainable, reusable frontend decisions.</p></li>
          <li><span>Improve</span><p>Refine responsive behaviour, accessibility, performance, and interaction quality.</p></li>
        </ol>
      </section>

      <section className="about wrap" id="about" aria-labelledby="about-title">
        <div className="about-image portrait-frame"><Image src="/images/hoang-my.jpg" alt="Hoàng Mỹ at a restaurant" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <div className="about-copy"><h2 id="about-title">A developer with an eye on the whole product.</h2><p>My foundation is frontend, but experience working with .NET systems, APIs, authentication flows, and backend debugging makes collaboration across the product boundary more practical.</p><p>I bring opinions when interface quality or user friction needs attention—while respecting the agreed design and the team’s product direction.</p><div className="about-ctas"><a href="/Hoang_My_Resume.pdf" target="_blank" rel="noreferrer" className="text-cta">Read Resume (PDF) <ArrowUpRight size={19} /></a><a href="https://www.linkedin.com/in/nguyenhoangmy-dev/" target="_blank" rel="noreferrer" className="text-cta">More on LinkedIn <ArrowUpRight size={19} /></a></div></div>
      </section>

      <section className="contact wrap" id="contact" aria-labelledby="contact-title">
        <p>Have a product to build or a frontend problem to untangle?</p>
        <h2 id="contact-title"><a href="mailto:nguyenmylb85@gmail.com">Let’s talk <ArrowUpRight aria-hidden="true" /></a></h2>
        <div className="contact-links"><a href="mailto:nguyenmylb85@gmail.com"><Mail size={17} /> nguyenmylb85@gmail.com</a><a href="/Hoang_My_Resume.pdf" target="_blank" rel="noreferrer"><FileText size={17} /> Resume <ArrowUpRight size={17} /></a><a href="https://github.com/HoangMylb" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/nguyenhoangmy-dev/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a></div>
      </section>

      <footer className="wrap"><span>© {new Date().getFullYear()} Hoàng Mỹ</span><span>Frontend Specialist · React / Next.js</span><a href="/Hoang_My_Resume.pdf" target="_blank" rel="noreferrer" className="footer-link">Resume (PDF) <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
