"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, FileText, Mail, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "OpsDesk",
    type: "Operations system",
    image: "/images/opsdesk-thumb.png",
    alt: "Operations dashboard visualization",
    url: "https://github.com/HoangMylb/OpsDesk",
    scope: "Roles · tickets · SLA tracking · audit history",
    note: "ASP.NET Core 9 · EF Core · SQL Server · Docker",
    tags: ["ROLE-BASED SUPPORT", "SLA TRACKING", "AUDIT LOGS", "REPOSITORY PATTERN"],
    badge: ".NET 9 / DOCKER",
    subtitle: "ASP.NET CORE 9 · EF CORE · SQL SERVER · 30 AUTOMATED TESTS"
  },
  {
    name: "MDOP",
    type: "Automotive digital experience",
    image: "/images/mdop-thumb.png",
    alt: "MDOP Porsche-inspired experience",
    url: "https://mdop-indol.vercel.app/",
    scope: "Vehicle discovery · compare tray · specification finder",
    note: "Responsive UI · browser state · reduced motion",
    tags: ["3-STEP FINDER", "MODEL COMPARISON", "SAVED VEHICLES", "PERSISTED STATE"],
    badge: "NEXT.JS 16",
    subtitle: "NEXT.JS 16 · REACT 19 · TYPESCRIPT · GSAP ANIMATIONS"
  },
  {
    name: "THÈM GÌ CŨNG CÓ",
    type: "Food & ordering experience",
    image: "/images/them-thumb.png",
    alt: "THÈM GÌ CŨNG CÓ food experience",
    url: "https://themgicungco.vercel.app/",
    scope: "Food-first navigation · menu system · frictionless ordering",
    note: "Mobile-first composition · high-contrast hierarchy",
    tags: ["MOBILE-FIRST ORDERING", "MENU DISCOVERY", "CART FLOW", "FILTERING & SEO"],
    badge: "NEXT.JS 15",
    subtitle: "NEXT.JS 15 · REACT 19 · TYPESCRIPT · TAILWIND CSS"
  },
  {
    name: "FlowDesk",
    type: "Debugging case-study playground",
    image: "/images/flowpilot-live-home.png",
    alt: "FlowDesk debugging interface",
    url: "https://flowdesk-chi-olive.vercel.app/",
    scope: "Reproduce · trace boundaries · repair · validate",
    note: "API contracts · authentication · responsive regressions",
    tags: ["INCIDENT REPRODUCTION", "API CONTRACTS", "AUTH/JWT TRACE", "REGRESSION FIXES"],
    badge: "FULLSTACK",
    subtitle: "REACT · REST API · JWT CLAIMS · PRODUCTION REPAIR"
  },
  {
    name: "Tamas Flower",
    type: "Boutique floral commerce & brand experience",
    image: "/images/tamas-thumb.png",
    alt: "Tamas Flower Store experience",
    url: "https://tamas-flower-store-olive.vercel.app/",
    scope: "Catalog · custom bouquet story · mobile ordering · Sanity CMS",
    note: "Next.js · TypeScript · Tailwind CSS · Sanity CMS",
    tags: ["FLORAL BOUTIQUE", "CATALOG & ORDERING", "SANITY CMS", "RESPONSIVE UX"],
    badge: "NEXT.JS / CMS",
    subtitle: "NEXT.JS · SANITY CMS · STORY-FIRST FLORAL E-COMMERCE"
  }
];

const services = [
  {
    title: "frontend engineering",
    lead: "React, Next.js, TypeScript, and responsive product interfaces.",
    desc: "Component design systems, state architecture, accessible interaction patterns, and responsive UI that never breaks under real production loads.",
    tag: "REACT / NEXT.JS / TYPESCRIPT",
    isCustom: false
  },
  {
    title: "conversion funnels",
    lead: "Pretty mockups don’t make money sitting in Figma/Canva.",
    desc: "I turn funnel strategy and design into high-converting landing pages, booking funnels, and optimized checkouts using modern React ecosystems.",
    tag: "STRATEGY / UX / VISUAL DESIGN",
    isCustom: false
  },
  {
    title: "digital builds",
    lead: "When a standard template isn’t enough, we stop forcing it.",
    desc: "Custom web applications, interactive calculators, ordering systems, vehicle discovery tray, portals, and AI-assisted digital experiences.",
    tag: "CUSTOM / AI-ASSISTED / INTERACTIVE",
    isCustom: true
  },
  {
    title: "backend & api systems",
    lead: "Because losing the lead after they click is still losing money.",
    desc: "C#/.NET backends, EF Core, REST APIs, JWT authentication, SQL Server, Docker containers, and automated GitLab CI/CD release pipelines.",
    tag: ".NET / REST APIS / DOCKER / CI-CD",
    isCustom: false
  }
];

const processSteps = [
  {
    num: "01",
    name: "diagnose",
    headline: "Figure out what we're actually trying to sell.",
    desc: "Offer, audience, traffic, goals, friction, and what’s currently getting in the way.",
    image: "/images/process-diagnose.png"
  },
  {
    num: "02",
    name: "map",
    headline: "Build the path before building the page.",
    desc: "Pages, sections, messaging hierarchy, CTAs, and how someone moves from interested to ready to buy.",
    image: "/images/process-map.png"
  },
  {
    num: "03",
    name: "design",
    headline: "Make the strategy impossible to ignore.",
    desc: "Clear hierarchy, strong visuals, intentional UX, and design decisions made around conversion.",
    image: "/images/process-design.png"
  },
  {
    num: "04",
    name: "build",
    headline: "Turn the pretty file into something that actually works.",
    desc: "Systeme.io, GoHighLevel, or a custom digital build depending on what the project needs.",
    image: "/images/process-build.png"
  },
  {
    num: "05",
    name: "connect",
    headline: "Make sure nothing falls apart after the click.",
    desc: "Forms, email flows, checkout, CRM, tagging, automation, integrations.",
    image: "/images/process-connect.png"
  },
  {
    num: "06",
    name: "launch",
    headline: "Test it. Break it. Fix it. Then send traffic.",
    desc: "Desktop, mobile, links, forms, automations, and the full customer journey checked before launch.",
    image: "/images/process-launch.png"
  }
];

const testimonials = [
  {
    name: "Maureen Oliver",
    role: "Digital Brand Founder",
    text: "Hoàng Mỹ listened to our product goals, tailored every technical detail to align with the user experience, and delivered a production web build that exceeded our speed and conversion expectations."
  },
  {
    name: "Lara Sophia Martinez",
    role: "Agency Director",
    text: "He doesn't just write frontend code, he designs around the whole buying journey. The interface is stunning and the conversion numbers spoke for themselves on launch day."
  }
];

const bigStats = [
  {
    stat: "2.5+",
    title: "years shipping production web",
    desc: "Building React interfaces and dependable .NET product systems at INCOM Saigon and client projects.",
    image: "/images/them-thumb.png",
    name: "thèm gì cũng có food ordering"
  },
  {
    stat: "30+",
    title: "automated tests & verifications",
    desc: "Unit and integration tests verifying authentication, SLA workflows, repository patterns, and APIs.",
    image: "/images/mdop-thumb.png",
    name: "opsdesk & mdop system validation"
  },
  {
    stat: "100%",
    title: "clean execution & type safety",
    desc: "From responsive TypeScript UI through REST API validation, Swagger/OpenAPI, and Docker deployment.",
    image: "/images/opsdesk-thumb.png",
    name: "opsdesk operations system"
  }
];

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    platform: "Telegram",
    handle: "",
    business: ""
  });

  const playClick = () => {
    if (!soundOn || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(750, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.045);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  };

  useEffect(() => {
    if (!entered || !root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(".hero-watermark", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" });
      gsap.fromTo(".hero-portrait-wrap", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.1, delay: 0.15, ease: "power3.out" });
      gsap.fromTo(".hero-left-block", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 0.25, ease: "power3.out" });
      gsap.fromTo(".hero-role-badge", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, delay: 0.35, ease: "power3.out" });

      // GSAP Pin and Vertical Step Swiper on Scroll
      const processTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#process",
          start: "center center",
          end: "+=2600",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          scrub: 0.3
        }
      });

      // Animate transitions between slides 0 -> 1 -> 2 -> 3 -> 4 -> 5
      for (let i = 0; i < processSteps.length - 1; i++) {
        processTl
          .to(`.step-slide-${i}`, {
            y: -50,
            opacity: 0,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.inOut"
          })
          .fromTo(
            `.step-slide-${i + 1}`,
            { y: 50, opacity: 0, autoAlpha: 0 },
            { y: 0, opacity: 1, autoAlpha: 1, duration: 0.8, ease: "power2.inOut" },
            "<0.3"
          );
      }

      // Rest on step 06, then Section 05 slides smoothly over it
      processTl.to({}, { duration: 1.2 });
      processTl.fromTo(
        "#results",
        { yPercent: 100 },
        { yPercent: 0, duration: 1.5, ease: "power2.out" }
      );
    }, root);
    return () => context.revert();
  }, [entered]);

  const handleEnter = () => {
    playClick();
    setLeaving(true);
    setTimeout(() => {
      setEntered(true);
    }, 550);
  };

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <main ref={root} className={entered ? "portfolio entered" : "portfolio"}>
      {!entered && (
        <section className={`glass-entry-overlay ${leaving ? "is-leaving" : ""}`} aria-label="Enter portfolio">
          <div className="glass-entry-card">
            <p className="glass-entry-kicker">HOÀNG MỸ NGUYỄN · FRONTEND-FOCUSED FULL-STACK DEVELOPER</p>
            <h1 className="glass-entry-title">
              ENTER THE
              <span>PORTFOLIO</span>
            </h1>
            <p className="glass-entry-sub">Best experienced with sound on.</p>
            <button type="button" className="glass-entry-btn" onClick={handleEnter}>
              ENTER THE PORTFOLIO <ArrowUpRight size={14} />
            </button>
            <button
              type="button"
              className="glass-entry-sound-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
            >
              <span className="red-dot">●</span> SOUND {soundOn ? "ON" : "OFF"}
            </button>
          </div>
        </section>
      )}

      {/* TOP HEADER */}
      <header className="hero-nav page-width">
        <a className="brand-logo" href="#top" aria-label="Hoàng Mỹ home" onClick={playClick}>
          hm<span>.</span>
        </a>
        <div className="hero-status-pill">
          <span className="live-dot" />
          <span>AVAILABLE FOR PROJECTS</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-watermark" aria-hidden="true">
          PORTFOLIO
        </div>
        <div className="hero-aura" aria-hidden="true" />

        <div className="hero-portrait-wrap">
          <Image
            src="/images/mymi.png"
            alt="Hoàng Mỹ"
            fill
            priority
            sizes="(max-width: 760px) 95vw, 60vw"
            className="hero-portrait-img"
          />
        </div>

        <div className="hero-left-block">
          <p className="hero-script">Hey. I&apos;m</p>
          <h1 id="hero-title" className="hero-name">Hoàng Mỹ</h1>
          <p className="hero-lead">
            Designing funnels that cut the bullsh*t and get people buying.
          </p>
        </div>

        <div className="hero-location-block">
          <span>GO VAP, HO CHI MINH CITY, VIETNAM</span>
          <span>WORKING REMOTELY WORLDWIDE</span>
        </div>

        <div className="hero-role-badge">
          <span>Frontend Developer</span>
          <span>Creative Digital Builder</span>
        </div>

        <button
          type="button"
          className="hero-soundtrack-dock"
          onClick={toggleSound}
          aria-label="Toggle portfolio soundtrack"
        >
          <div className={`vinyl-disc ${soundOn ? "is-spinning" : ""}`}>
            <span className="vinyl-center" />
          </div>
          <div className="soundtrack-text">
            <span className="soundtrack-kicker">PORTFOLIO SOUNDTRACK</span>
            <span className="soundtrack-state">{soundOn ? "PLAYING" : "PAUSED"}</span>
          </div>
        </button>
      </section>

      {/* 01 / BEHIND THE WORK */}
      <section className="behind-section" id="about">
        <div className="page-width">
          <p className="section-super-kicker"><span>01</span> / BEHIND THE WORK</p>
          <h2 className="behind-headline">
            i don&apos;t just make it look good.<br />
            <span>i make it make sense.</span>
          </h2>

          <div className="behind-grid">
            <div className="behind-copy">
              <p>
                I’m <strong>Hoàng Mỹ Nguyễn</strong>, a frontend-focused full-stack developer with 2.5+ years of experience shipping and maintaining production web applications across React interfaces, REST APIs, and C#/.NET backends.
              </p>
              <p>I work where strategy, design, and build meet.</p>
              <p>
                That means I’m not here to throw pretty sections on a page and call it conversion design.
              </p>
              <div className="behind-checklist">
                <p>I think about the offer.</p>
                <p>The customer.</p>
                <p>The buying journey.</p>
                <p>The friction.</p>
                <p>The money.</p>
              </div>
              <p>Then I design around what actually needs to happen.</p>
              <p>And whether the project lives inside a funnel builder or needs something completely custom, the rule stays the same:</p>
              <p className="behind-punchline">
                If it doesn’t help the business move forward, it doesn’t belong.
              </p>

              <div className="behind-badges">
                <div className="behind-badge-card">
                  <div className="badge-icon-red">📊</div>
                  <div>
                    <h4>2.5+ YEARS</h4>
                    <p>Production Web Applications</p>
                  </div>
                </div>
                <div className="behind-badge-card">
                  <div className="badge-icon-red">⚡</div>
                  <div>
                    <h4>REACT / NEXT.JS</h4>
                    <p>C# / ASP.NET CORE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="behind-visual">
              <div className="behind-watermark" aria-hidden="true">INTENT.</div>
              <div className="behind-portrait-wrap">
                <Image
                  src="/images/mymi.png"
                  alt="Hoàng Mỹ profile"
                  fill
                  sizes="(max-width: 760px) 90vw, 42vw"
                  className="behind-portrait-img"
                />
                <div className="annotated-pointer pointer-left">
                  <span>FUNNEL STRATEGY</span>
                  <div className="pointer-line" />
                </div>
                <div className="annotated-pointer pointer-right">
                  <div className="pointer-line" />
                  <span>CONVERSION DESIGN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / PREVIOUS PROJECTS (ARCHIVE FOLDER) */}
      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="page-width">
          <div className="work-header-top">
            <div className="work-kicker">
              <span>02</span> / MY PREVIOUS PROJECTS
            </div>
            <div className="work-category">
              Funnels &amp; Digital Builds
            </div>
          </div>

          <h2 id="work-title" className="work-headline">
            work that does<br />
            <span>it&apos;s d*mn job</span>
          </h2>

          <div className="archive-folder">
            <div className="folder-tab">
              <span className="folder-tab-dot">●</span>
              <span className="folder-tab-title">PROJECT ARCHIVE</span>
              <span className="folder-tab-count">05 BUILDS</span>
            </div>

            <div className="folder-body">
              <div className="folder-grid">
                {projects.map((project, index) => {
                  const patternIndex = index % 5;
                  const isLarge = patternIndex < 2;
                  return (
                    <article
                      className={`archive-card ${isLarge ? "card-row-2" : "card-row-3"}`}
                      key={project.name}
                      onClick={() => {
                        playClick();
                        setActiveProject(index);
                      }}
                    >
                      <div className="card-watermark" aria-hidden="true">
                        0{index + 1}
                      </div>

                      <div className="card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                        {project.badge && (
                          <div className="card-tech-badge">
                            <span>{project.badge}</span>
                          </div>
                        )}
                      </div>

                      <div className="laptop-mockup">
                        <div className="laptop-screen">
                          <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            sizes="(max-width: 760px) 92vw, 45vw"
                            className="laptop-img"
                          />
                        </div>
                        <div className="laptop-base" />
                      </div>

                      <div className="card-footer">
                        <h3 className="card-title">{project.name.toLowerCase()}</h3>
                        <p className="card-subtitle">{project.subtitle}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / WHAT I DO */}
      <section className="services-section" id="services">
        <div className="page-width">
          <div className="services-header-top">
            <div className="services-kicker">
              <span>03</span> / WHAT I DO
            </div>
            <div className="services-category">
              Funnels &amp; Digital Builds
            </div>
          </div>

          <h2 className="services-headline">
            not just pages.<br />
            the <span>whole</span> journey.
          </h2>

          <p className="services-lead">
            From strategy to design to build, I create digital experiences that make it easier for the right people to understand your offer, trust it, and buy.
          </p>

          <div className="services-grid">
            {services.map((srv) => (
              <div className="service-card" key={srv.title}>
                <div className="service-title-wrap">
                  {srv.isCustom && <span className="service-script-badge">Custom</span>}
                  <h3 className="service-title">{srv.title}</h3>
                </div>
                <p className="service-card-lead"><strong>{srv.lead}</strong></p>
                <p className="service-card-desc">{srv.desc}</p>
                <div className="service-pill-btn">
                  <span>{srv.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / HOW I WORK - GSAP VERTICAL SWIPER PINNED SECTION */}
      <section className="process-flow-section" id="process">
        <div className="page-width">
          <p className="section-super-kicker"><span>04</span> / HOW I WORK</p>
          <h2 className="process-headline">
            no random design.<br />
            <span>every step has a job.</span>
          </h2>
          <p className="process-lead-p">
            I don’t jump straight into Canva and hope something converts. We start with the offer, map the buying journey, design around the decisions people need to make, then build the d*mn thing properly.
          </p>

          <div className="process-stage-container">
            <div className="process-timeline-line" />
            <div className="process-pinned-card">
              <div className="process-slides-stack">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.num}
                    className={`process-slide-card step-slide-${idx} ${idx === 0 ? "is-visible" : ""}`}
                  >
                    <div className="process-card-content">
                      <div className="step-badge-node">
                        <span className="step-dot" />
                      </div>
                      <div className="step-number-tag">{step.num}</div>
                      <div className="step-body-content">
                        <h3 className="step-title">{step.name}</h3>
                        <h4 className="step-headline">{step.headline}</h4>
                        <p className="step-desc">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / RESULTS & CLIENT WORDS */}
      <section className="results-section" id="results">
        <div className="page-width">
          <div className="results-watermark" aria-hidden="true">PROOF.</div>

          <div className="results-header-top">
            <div className="results-kicker">
              <span>05</span> / RESULTS &amp; CLIENT WORDS
            </div>
            <div className="results-category">
              Funnels &amp; Digital Builds
            </div>
          </div>

          <h2 className="results-headline">
            the pretty part is easy here’s<br />
            the part <span>that matters.</span>
          </h2>

          <p className="results-lead">
            Design means nothing if it doesn’t move the needle.<br />
            Here are real results and words from the people I’ve worked with.
          </p>

          <div className="testimonial-card-wrap">
            <div className="testimonial-box">
              <div className="testi-header">
                <div className="testi-avatar">M</div>
                <div>
                  <h4>{testimonials[testimonialIdx].name} <span>★ recommends Hoàng Mỹ</span></h4>
                  <p>{testimonials[testimonialIdx].role}</p>
                </div>
              </div>
              <p className="testi-quote">
                &ldquo;{testimonials[testimonialIdx].text}&rdquo;
              </p>
            </div>
            <div className="testi-nav">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <span>0{testimonialIdx + 1} / 0{testimonials.length}</span>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="stats-rows">
            {bigStats.map((item) => (
              <div className="stat-showcase-row" key={item.title}>
                <div className="stat-text-col">
                  <div className="stat-big-number">{item.stat}</div>
                  <h3 className="stat-big-title">{item.title}</h3>
                  <p className="stat-big-desc">{item.desc}</p>
                </div>
                <div className="stat-preview-col">
                  <div className="preview-screen-frame">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 760px) 90vw, 680px"
                      className="preview-screen-img"
                    />
                  </div>
                  <p className="preview-caption">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / FINAL CTA SECTION */}
      <section className="final-cta-section" id="contact">
        <div className="page-width">
          <div className="final-watermark" aria-hidden="true">LET&apos;S WORK.</div>

          <div className="final-cta-grid">
            <div className="final-cta-left">
              <h2 className="final-headline">
                got an offer worth selling?<br />
                let&apos;s build that <span>funnel!</span>
              </h2>

              <p className="final-lead">
                You’ve already done the hard part: building an offer people want.
                Now let’s give it a funnel that makes the value clear, moves people toward the sale,
                and actually supports the business behind it.
              </p>

              <button
                type="button"
                className="final-action-btn"
                onClick={() => {
                  playClick();
                  setInquiryOpen(true);
                }}
              >
                <span className="btn-main">work with me →</span>
                <span className="btn-sub">Click here to answer a few quick questions before we book a call.</span>
              </button>

              <div className="final-metadata">
                <p className="final-caps-tag">FRONTEND / DIGITAL BUILDS / FULL-STACK SYSTEMS</p>
                <p className="final-availability">Available for select projects worldwide.</p>
              </div>
            </div>

            <div className="final-cta-right">
              <div className="final-portrait-wrap">
                <Image
                  src="/images/mymi.png"
                  alt="Hoàng Mỹ"
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                  className="final-portrait-img"
                />
              </div>
            </div>
          </div>

          <div className="final-footer">
            <p>All Rights Reserved {new Date().getFullYear()} - Hoàng Mỹ</p>
            <p><strong>Designed and Built by Hoàng Mỹ</strong></p>
          </div>
        </div>
      </section>

      {/* INQUIRY POPUP MODAL (Matching yanzcruz.fillout.com/apply) */}
      {inquiryOpen && (
        <div className="inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
          <button
            className="dialog-backdrop"
            onClick={() => setInquiryOpen(false)}
            aria-label="Close inquiry form"
          />
          <div className="inquiry-panel">
            <div className="inquiry-topbar">
              <button
                type="button"
                className="inquiry-back-btn"
                onClick={() => setInquiryOpen(false)}
                aria-label="Go back"
              >
                ✕
              </button>
              <div className="inquiry-brand">hm<span>.</span></div>
            </div>

            {inquirySubmitted ? (
              <div className="inquiry-success">
                <div className="success-icon">✓</div>
                <h3>Thank you, {inquiryForm.name || "there"}!</h3>
                <p>I&apos;ve received your inquiry. I will review your project details and reach out on {inquiryForm.platform} within 24 hours.</p>
                <button
                  type="button"
                  className="inquiry-submit-btn"
                  onClick={() => {
                    setInquirySubmitted(false);
                    setInquiryOpen(false);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                className="inquiry-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  playClick();
                  setInquirySubmitted(true);
                }}
              >
                <div className="inquiry-field">
                  <label htmlFor="inq-name" id="inquiry-title">
                    What should I call you? <span className="req">*</span>
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    placeholder="Enter Full Name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  />
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inq-email">
                    What&apos;s your email? <span className="req">*</span>
                  </label>
                  <span className="field-sub">This is where I&apos;ll send the next steps.</span>
                  <div className="input-with-icon">
                    <Mail size={16} className="input-icon" />
                    <input
                      id="inq-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="inquiry-field">
                  <label>
                    What&apos;s the best way to reach you? <span className="req">*</span>
                  </label>
                  <span className="field-sub">Choose your ultimate platform.</span>
                  <div className="platform-options-grid">
                    {["Instagram", "Messenger", "WhatsApp", "Viber", "Telegram", "Other"].map((plat) => (
                      <button
                        type="button"
                        key={plat}
                        className={`platform-pill ${inquiryForm.platform === plat ? "selected" : ""}`}
                        onClick={() => {
                          playClick();
                          setInquiryForm({ ...inquiryForm, platform: plat });
                        }}
                      >
                        <span className="radio-circle">
                          {inquiryForm.platform === plat && <span className="radio-dot" />}
                        </span>
                        <span>{plat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inq-handle">
                    Drop your contact details here. <span className="req">*</span>
                  </label>
                  <span className="field-sub">Profile link, username, or mobile number, depending on what you selected above.</span>
                  <input
                    id="inq-handle"
                    type="text"
                    required
                    placeholder="@username or +84..."
                    value={inquiryForm.handle}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, handle: e.target.value })}
                  />
                </div>

                <div className="inquiry-field">
                  <label htmlFor="inq-biz">
                    Where can I check out your business? <span className="req">*</span>
                  </label>
                  <span className="field-sub">Website, Instagram, LinkedIn, or any link that gives me context. One is enough.</span>
                  <input
                    id="inq-biz"
                    type="text"
                    required
                    placeholder="https://..."
                    value={inquiryForm.business}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, business: e.target.value })}
                  />
                </div>

                <button type="submit" className="inquiry-submit-btn">
                  Next →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* PROJECT DIALOG MODAL */}
      {activeProject !== null && (
        <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
          <button className="dialog-backdrop" onClick={() => setActiveProject(null)} aria-label="Close project details" />
          <div className="dialog-panel">
            <button
              className="dialog-close"
              onClick={() => {
                playClick();
                setActiveProject(null);
              }}
              aria-label="Close project details"
            >
              <X />
            </button>
            <p>PROJECT 0{activeProject + 1}</p>
            <h2 id="project-dialog-title">{projects[activeProject].name}</h2>
            <span>{projects[activeProject].type}</span>
            <p className="dialog-scope">{projects[activeProject].scope}</p>
            <p className="dialog-note">{projects[activeProject].note}</p>
            <a href={projects[activeProject].url} target="_blank" rel="noreferrer" onClick={playClick}>
              OPEN PROJECT <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
