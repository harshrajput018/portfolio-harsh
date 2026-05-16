import React, { useState, useEffect, useRef } from 'react';

/* ─── DATA ─────────────────────────────── */
const ME = {
  email: "harshrajput18@gmail.com",
  linkedin: "https://linkedin.com/in/harshrajput018",
  github: "https://github.com/harshrajput018",
  phone: "+91 7827960243",
  stats: [
    { n: "3+",  label: "AI Projects Shipped" },
    { n: "1yr", label: "At Infosys" },
    { n: "5+",  label: "Tech Stacks" },
  ],
};

const PROJECTS = [
  {
    id: "01", name: "EchoMind", tagline: "Chat with your documents using AI",
    category: "AI · Full Stack", year: "2026",
    stack: ["React", "Node.js", "MongoDB", "Groq", "RAG", "BM25"],
    liveUrl: "https://echomind.onrender.com",
    githubUrl: "https://github.com/harshrajput018/echomind",
    live: true, accent: "#2A5C45", accentBg: "#EBF4EF",
    desc: "A full-stack 'Second Brain' — users upload PDFs and documents, then chat with their knowledge base through a custom-built RAG pipeline. Every AI response cites the exact source chunk.",
    highlights: [
      "Custom RAG + BM25 hybrid search — no paid vector DB needed",
      "Groq Llama 3.3 70B with enforced source attribution on every response",
      "JWT auth, multi-workspace support, real-time chunk indexing",
      "Deployed on Render + Vercel with MongoDB Atlas at zero infra cost",
    ],
  },
  {
    id: "02", name: "Visionary", tagline: "AI marketing campaigns from one prompt",
    category: "AI · Generative", year: "2026",
    stack: ["React", "Node.js", "Groq", "DALL-E 3", "Cloudinary", "MongoDB"],
    liveUrl: "https://visionary-eight-theta.vercel.app",
    githubUrl: "https://github.com/harshrajput018/visionary",
    live: true, accent: "#3B5EA6", accentBg: "#EBF0FA",
    desc: "A dashboard for social media managers that generates complete AI marketing campaigns — SEO captions via Llama 3.3 and studio-quality images via DALL-E 3 — from a single product description.",
    highlights: [
      "Brand Persona engine persists writing voice as a reusable prompt template",
      "Cloudinary CDN pipeline for image storage + MongoDB for campaign history",
      "One-click retrieval and re-publishing of past campaigns",
      "Full content consistency across all AI-generated assets",
    ],
  },
  {
    id: "03", name: "Sentinel", tagline: "AI-powered code security auditor",
    category: "AI · DevTools", year: "2025",
    stack: ["React", "Node.js", "LLMs", "Monaco Editor", "Docker", "MongoDB"],
    liveUrl: "https://sentinel-lac-two.vercel.app",
    githubUrl: "https://github.com/harshrajput018/sentinel",
    live: true, accent: "#8B4513", accentBg: "#FBF0E8",
    desc: "Teams paste code or connect a GitHub repo for instant AI-driven security audits and refactoring. Built on Monaco Editor (VS Code engine) for professional in-browser code review with a diff viewer.",
    highlights: [
      "Security-focused LLM system prompt engineered for vulnerability reasoning",
      "One-Click Refactor diff viewer — preview changes before accepting",
      "Code Health Scores tracked over time in MongoDB to expose recurring issues",
      "Full stack containerized with Docker for environment parity",
    ],
  },
];
const SKILLS = [
  { label: "Frontend",   icon: "◈", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
  { label: "Backend",    icon: "◉", items: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
  { label: "AI & ML",   icon: "◎", items: ["RAG Pipelines", "LLMs", "Groq API", "OpenAI API", "BM25 Search", "Prompt Engineering"] },
  { label: "Databases",  icon: "◑", items: ["MongoDB", "Pinecone", "Redis"] },
  { label: "Languages",  icon: "◐", items: ["JavaScript ES6+", "Python", "C++", "SQL"] },
  { label: "DevOps",     icon: "◒", items: ["Docker", "Git", "Vercel", "Render", "Postman"] },
];

const EXPERIENCE = [
  {
    co: "Infosys Ltd.", role: "Specialist Programmer",
    period: "Nov 2024 – Nov 2025", loc: "Bengaluru / Remote", type: "Full-time",
    points: [
      "Engineered an enterprise RAG search engine using Python & OpenAI CLIP — high-performance vector embedding pipelines that significantly improved semantic search across unstructured internal datasets.",
      "Integrated LLMs with indexed enterprise data to deliver context-aware responses and slash search latency.",
      "Optimized system architecture for scalable, robust AI-powered service deployment across internal platforms.",
    ],
  },
  {
    co: "Primus Softech LLP", role: "Frontend Developer Intern",
    period: "Jan 2024 – May 2024", loc: "New Delhi", type: "Internship",
    points: [
      "Built responsive React.js UI components optimized across mobile and desktop.",
      "Integrated RESTful APIs in collaboration with backend teams, improving system reliability.",
    ],
  },
];

/* ─── HOOK ─────────────────────────── */
function useFade(delay = 0) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.08 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(22px)', transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease` } };
}

/* ─── NAV ─────────────────────────── */
function Nav() {
  const [sc, setSc] = useState(false);
  useEffect(() => { const h = () => setSc(window.scrollY > 30); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      padding: '0 2.5rem',
      backgroundColor: sc ? 'rgba(244,241,236,0.92)' : 'transparent',
      backdropFilter: sc ? 'blur(18px)' : 'none',
      borderBottom: sc ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.35s',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)' }}>
          HR<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <nav style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
          {['projects','skills','experience'].map(id => (
            <button key={id} onClick={() => go(id)} style={{ background: 'none', border: 'none', fontFamily: 'var(--ff-mono)', fontSize: '0.67rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink3)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
            >{id}</button>
          ))}
          <a href="mailto:harshrajput18@gmail.com" style={{
            fontFamily: 'var(--ff-body)', fontSize: '0.8rem', fontWeight: 500,
            padding: '0.48rem 1.2rem', borderRadius: 4,
            background: 'var(--accent)', color: '#fff', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >Hire me</a>
        </nav>
      </div>
    </header>
  );
}

/* ─── HERO ─────────────────────────── */
function Hero() {
  const f1 = useFade(0.05); const f2 = useFade(0.18);
  const f3 = useFade(0.32); const f4 = useFade(0.46);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 2.5rem 4rem', maxWidth: 1140, margin: '0 auto', width: '100%' }}>

      {/* Status */}
      <div {...f1} style={{ ...f1.style, marginBottom: '2.5rem' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.32rem 0.9rem', borderRadius: 99, background: 'var(--accentbg)', border: '1px solid #C4DDD0', fontFamily: 'var(--ff-mono)', fontSize: '0.67rem', letterSpacing: '0.1em', color: 'var(--accent)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Open to work · New Delhi, India
        </span>
      </div>

      {/* Name */}
      <div {...f2} style={f2.style}>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: 'clamp(3.8rem, 10vw, 8.5rem)', lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '0.06em' }}>Harsh</h1>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: 'clamp(3.8rem, 10vw, 8.5rem)', lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--accent)' }}>Rajput</h1>
      </div>

      {/* Divider */}
      <div {...f3} style={{ ...f3.style, display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2.8rem 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--line2)' }} />
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)' }}>Full Stack · AI Engineering</span>
        <div style={{ flex: 1, height: 1, background: 'var(--line2)' }} />
      </div>

      {/* Bottom grid */}
      <div {...f4} style={{ ...f4.style, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'end' }}>
        <div>
          <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink2)', maxWidth: 430, marginBottom: '2rem' }}>
            I design and ship intelligent, full-stack products. Focused on applied LLM engineering — RAG systems, AI tooling, and scalable MERN applications.
          </p>
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Get in touch ↗', href: 'mailto:harshrajput18@gmail.com', primary: true },
              { label: 'GitHub', href: 'https://github.com/harshrajput018' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/harshrajput018' },
            ].map(({ label, href, primary }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.58rem 1.3rem', borderRadius: 4,
                fontFamily: 'var(--ff-body)', fontSize: '0.84rem', fontWeight: primary ? 500 : 400,
                background: primary ? 'var(--accent)' : 'transparent',
                color: primary ? '#fff' : 'var(--ink2)',
                border: primary ? 'none' : '1px solid var(--line2)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { if (primary) { e.currentTarget.style.background = 'var(--accent2)'; } else { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; } }}
                onMouseLeave={e => { if (primary) { e.currentTarget.style.background = 'var(--accent)'; } else { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; } }}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--line)', border: '1px solid var(--line2)', borderRadius: 10, overflow: 'hidden' }}>
          {ME.stats.map(s => (
            <div key={s.label} style={{ padding: '1.6rem 1rem', background: 'var(--bg2)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: '1.9rem', color: 'var(--accent)', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--ink3)', textTransform: 'uppercase', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECT CARD ──────────────────── */
function ProjectCard({ p, i }) {
  const f = useFade(i * 0.1);
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div {...f} style={{
      ...f.style,
      background: hov ? p.accentBg : 'var(--bg2)',
      border: `1px solid ${hov ? p.accent + '33' : 'var(--line)'}`,
      borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s',
      boxShadow: hov ? `0 8px 32px ${p.accent}18` : '0 1px 4px rgba(0,0,0,0.04)',
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: p.accent }} />

      <div style={{ padding: '1.8rem 2rem 1.6rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: 'var(--ink4)', letterSpacing: '0.08em' }}>{p.id}</span>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', letterSpacing: '0.06em', padding: '0.15rem 0.55rem', borderRadius: 99, background: 'var(--bg3)', color: 'var(--ink3)', border: '1px solid var(--line)' }}>{p.category}</span>
              {p.live && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />Live
                </span>
              )}
            </div>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.55rem', color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '0.2rem' }}>{p.name}</h3>
            <p style={{ fontFamily: 'var(--ff-body)', fontSize: '0.8rem', color: 'var(--ink3)' }}>{p.tagline}</p>
          </div>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink4)', flexShrink: 0, marginLeft: '1rem' }}>{p.year}</span>
        </div>

        {/* Desc */}
        <p style={{ fontSize: '0.86rem', fontWeight: 300, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: '1.3rem' }}>{p.desc}</p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem', marginBottom: '1.4rem' }}>
          {p.stack.map(t => (
            <span key={t} style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.04em', padding: '0.2rem 0.58rem', borderRadius: 4, background: 'var(--bg3)', color: 'var(--ink2)', border: '1px solid var(--line)' }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.48rem 1.1rem', borderRadius: 4, background: p.accent, color: '#fff', fontFamily: 'var(--ff-body)', fontWeight: 500, fontSize: '0.78rem', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Live Demo ↗</a>
          )}
          <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.48rem 1.1rem', borderRadius: 4, background: 'transparent', color: 'var(--ink2)', border: '1px solid var(--line2)', fontFamily: 'var(--ff-body)', fontSize: '0.78rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }}
          >GitHub</a>
          <button onClick={() => setOpen(o => !o)} style={{ marginLeft: 'auto', background: 'none', border: `1px solid ${open ? p.accent : 'var(--line2)'}`, borderRadius: 4, width: 32, height: 32, color: open ? p.accent : 'var(--ink3)', fontFamily: 'var(--ff-mono)', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.color = p.accent; }}
            onMouseLeave={e => { if (!open) { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink3)'; } }}
          >{open ? '−' : '+'}</button>
        </div>

        {/* Expanded highlights */}
        {open && (
          <div style={{ marginTop: '1.4rem', paddingTop: '1.4rem', borderTop: `1px solid ${p.accent}22` }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: p.accent, marginBottom: '0.9rem' }}>Key highlights</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {p.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.83rem', color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>
                  <span style={{ color: p.accent, flexShrink: 0, marginTop: '0.05rem' }}>→</span>{h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── PROJECTS ──────────────────────── */
function SectionHead({ eyebrow, title }) {
  const f = useFade(0);
  return (
    <div {...f} style={{ ...f.style, marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.9rem' }}>
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>{eyebrow}</span>
        <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
      <h2 style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>{title}</h2>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 2.5rem', maxWidth: 1140, margin: '0 auto' }}>
      <SectionHead eyebrow="Selected Work" title="Projects" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.2rem' }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  );
}

/* ─── SKILLS ────────────────────────── */
function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 2.5rem', background: 'var(--bg3)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <SectionHead eyebrow="Capabilities" title="Technical Skills" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1px', background: 'var(--line2)', border: '1px solid var(--line2)', borderRadius: 12, overflow: 'hidden' }}>
          {SKILLS.map((s, i) => {
            const f = useFade(i * 0.07);
            return (
              <div key={s.label} {...f} style={{ ...f.style, background: 'var(--bg2)', padding: '1.8rem', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accentbg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.1rem', paddingBottom: '0.9rem', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontFamily: 'var(--ff-mono)' }}>{s.icon}</span>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500 }}>{s.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.48rem' }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.83rem', fontWeight: 300, color: 'var(--ink2)' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ink4)', display: 'inline-block', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem 2.5rem', maxWidth: 1140, margin: '0 auto' }}>
      <SectionHead eyebrow="Work History" title="Experience" />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {EXPERIENCE.map((e, i) => {
          const f = useFade(i * 0.15);
          return (
            <div key={e.co} {...f} style={{ ...f.style, display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', padding: '2.8rem 0', borderTop: '1px solid var(--line)' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>{e.co}</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.7rem' }}>{e.role}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink3)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{e.period}<br />{e.loc}</div>
                <span style={{ display: 'inline-block', marginTop: '0.7rem', fontFamily: 'var(--ff-mono)', fontSize: '0.57rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.18rem 0.6rem', borderRadius: 99, background: 'var(--bg3)', color: 'var(--ink3)', border: '1px solid var(--line2)' }}>{e.type}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '0.1rem' }}>
                {e.points.map((pt, pi) => (
                  <div key={pi} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.86rem', fontWeight: 300, color: 'var(--ink2)', lineHeight: 1.75 }}>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--ff-mono)', fontSize: '0.63rem', paddingTop: '0.28rem', flexShrink: 0 }}>→</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Education */}
        {(() => {
          const f = useFade(0.1);
          return (
            <div {...f} style={{ ...f.style, display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3rem', padding: '2.8rem 0', borderTop: '1px solid var(--line)' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem' }}>Education</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.35rem' }}>GGSIPU</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink3)', lineHeight: 1.9, letterSpacing: '0.04em' }}>2020 – 2024<br />New Delhi, India</div>
              </div>
              <div style={{ paddingTop: '2.4rem' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '0.3rem' }}>B.Tech — Computer Science Engineering</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: '0.83rem', color: 'var(--ink3)' }}>Guru Gobind Singh Indraprastha University</div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

/* ─── FOOTER / CTA ──────────────────── */
function Footer() {
  const f = useFade(0);
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '5rem 2.5rem', textAlign: 'center' }}>
        <div {...f} style={f.style}>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>Let's build something</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '1.2rem', lineHeight: 1 }}>
            Open to <span style={{ color: 'var(--accent)' }}>opportunities</span>
          </h2>
          <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink3)', maxWidth: 360, margin: '0 auto 2.2rem' }}>
            Full-time roles, freelance projects, or interesting collaborations — let's connect.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:harshrajput18@gmail.com" style={{ padding: '0.65rem 1.7rem', background: 'var(--accent)', color: '#fff', borderRadius: 4, fontFamily: 'var(--ff-body)', fontWeight: 500, fontSize: '0.85rem', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >harshrajput18@gmail.com</a>
            <a href="https://linkedin.com/in/harshrajput018" target="_blank" rel="noreferrer" style={{ padding: '0.65rem 1.7rem', background: 'transparent', color: 'var(--ink2)', border: '1px solid var(--line2)', borderRadius: 4, fontFamily: 'var(--ff-body)', fontSize: '0.85rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', padding: '1.2rem 2.5rem' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink4)', letterSpacing: '0.06em' }}>© {new Date().getFullYear()} Harsh Rajput · New Delhi</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['GitHub', 'https://github.com/harshrajput018'], ['LinkedIn', 'https://linkedin.com/in/harshrajput018'], ['Email', 'mailto:harshrajput18@gmail.com']].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink4)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink4)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ───────────────────────────── */
export default function App() {
  useEffect(() => {
    const s = document.createElement('style');
    s.textContent = `@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}`;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
