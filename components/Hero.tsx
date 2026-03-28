'use client'

interface HeroProps {
  onOpenContact: () => void
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Background blobs */}
      <div className="blob-green" style={{ top: -100, left: -200 }} />
      <div className="blob-purple" style={{ bottom: -50, right: -100 }} />
      <div className="blob-green" style={{ top: '40%', right: '5%', width: 400, height: 400, opacity: 0.5 }} />

      <div
        id="hero-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 64,
          alignItems: 'center',
        }}
        className="max-lg:grid-cols-1 max-lg:!gap-0"
      >
        {/* Left: Copy */}
        <div>
          <div className="badge fade-in fade-in-1" style={{ marginBottom: 24 }}>
            <span className="badge-dot" />
            // AGENTIC WORKFLOW PLATFORM
          </div>

          <h1
            className="fade-in fade-in-2"
            style={{
              fontSize: 'clamp(40px, 5vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: 24,
            }}
          >
            AI Agents That
            <br />
            <span style={{ color: '#00E5A0' }}>Actually Get</span>
            <br />
            Work Done.
          </h1>

          <p
            className="fade-in fade-in-3"
            style={{ fontSize: 18, lineHeight: 1.7, color: '#8B9AB4', marginBottom: 40, maxWidth: 440 }}
          >
            AgentSol is Bangladesh&apos;s best agentic AI workflow provider — replacing repetitive human
            labor with intelligent autonomous agents. Deploy automation in minutes, no code required.
          </p>

          <div
            className="fade-in fade-in-4 hero-cta-wrap"
            style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
          >
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onOpenContact() }}
              className="btn-primary"
              style={{ fontSize: 15, padding: '14px 32px' }}
            >
              Start Automating
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); scrollTo('#how-it-works') }}
              className="btn-secondary"
              style={{ fontSize: 15, padding: '14px 28px' }}
            >
              See How It Works →
            </a>
          </div>

          <div
            className="fade-in fade-in-4 hero-stats"
            style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
          >
            {[
              { color: '#00E5A0', label: 'Zero code required' },
              { color: '#7B5EF6', label: 'Deploy in an instant' },
              { color: '#F59E0B', label: 'Real outcomes' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="dot" style={{ background: color }} />
                <span style={{ fontSize: 13, color: '#8B9AB4' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Agent Graph Visual */}
        <div
          id="hero-right"
          className="fade-in fade-in-3 hidden lg:flex"
          style={{ position: 'relative', height: 480, alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="graph-wrap" style={{ position: 'relative', width: 420, height: 420 }}>
            {/* Hex grid background */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }} viewBox="0 0 420 420">
              <defs>
                <pattern id="hex" x="0" y="0" width="40" height="46" patternUnits="userSpaceOnUse">
                  <polygon points="20,1 39,11 39,35 20,45 1,35 1,11" fill="none" stroke="#00E5A0" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="420" height="420" fill="url(#hex)" />
            </svg>

            {/* Central panel */}
            <div
              style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 160, height: 160, borderRadius: 20,
                background: '#111520', border: '1px solid rgba(0,229,160,0.2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 8, boxShadow: '0 0 60px rgba(0,229,160,0.08)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: '#00E5A0', letterSpacing: '0.1em' }}>
                AGENT CORE
              </div>
              <div style={{ width: 48, height: 48 }}>
                <svg viewBox="0 0 48 48" fill="none">
                  <polygon points="24,4 44,16 44,32 24,44 4,32 4,16" fill="none" stroke="#00E5A0" strokeWidth="1.5" />
                  <circle cx="24" cy="14" r="3" fill="#00E5A0" />
                  <circle cx="36" cy="24" r="3" fill="#7B5EF6" />
                  <circle cx="24" cy="34" r="3" fill="#00E5A0" />
                  <circle cx="12" cy="24" r="3" fill="#3B82F6" />
                  <line x1="24" y1="14" x2="36" y2="24" stroke="rgba(0,229,160,0.4)" strokeWidth="1" />
                  <line x1="36" y1="24" x2="24" y2="34" stroke="rgba(123,94,246,0.4)" strokeWidth="1" />
                  <line x1="24" y1="34" x2="12" y2="24" stroke="rgba(0,229,160,0.4)" strokeWidth="1" />
                  <line x1="12" y1="24" x2="24" y2="14" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
                  <circle cx="24" cy="24" r="5" fill="rgba(0,229,160,0.15)" stroke="#00E5A0" strokeWidth="1" />
                </svg>
              </div>
              <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 9, color: 'rgba(0,229,160,0.5)' }}>active</div>
            </div>

            {/* Orbiting nodes */}
            {[
              { top: 28, left: '50%', transform: 'translateX(-50%)', border: 'rgba(0,229,160,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="#00E5A0" strokeWidth="1.5"/><line x1="7" y1="8" x2="13" y2="8" stroke="#00E5A0" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="11" x2="11" y2="11" stroke="#00E5A0" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ), label: 'Form Agent', delay: '0s' },
              { top: 60, right: 20, border: 'rgba(245,158,11,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><polyline points="3,14 7,9 11,12 15,6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="15" cy="6" r="2" fill="#F59E0B"/></svg>
              ), label: 'Analytics', delay: '0.5s' },
              { top: '50%', right: 10, transform: 'translateY(-50%)', border: 'rgba(59,130,246,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="#3B82F6" strokeWidth="1.5"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ), label: 'Lead Gen', delay: '1s' },
              { bottom: 60, right: 20, border: 'rgba(123,94,246,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7l-4 3V5z" stroke="#7B5EF6" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              ), label: 'Chatbot', delay: '1.5s' },
              { bottom: 28, left: '50%', transform: 'translateX(-50%)', border: 'rgba(249,115,22,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10z" stroke="#F97316" strokeWidth="1.5"/><path d="M10 3c-2 3-2 11 0 14M10 3c2 3 2 11 0 14M3 10h14" stroke="#F97316" strokeWidth="1" opacity="0.6"/></svg>
              ), label: 'Scraper', delay: '0.8s' },
              { top: '50%', left: 10, transform: 'translateY(-50%)', border: 'rgba(236,72,153,0.3)', icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="#EC4899" strokeWidth="1.5"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.6 5.6l1.4 1.4M13 13l1.4 1.4M5.6 14.4l1.4-1.4M13 7l1.4-1.4" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ), label: 'Custom', delay: '2s' },
            ].map(({ label, icon, border, delay, ...pos }) => (
              <div key={label} style={{ position: 'absolute', ...pos }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: '#111520',
                    border: `1px solid ${border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: `pulse-node 3s ${delay} ease-in-out infinite`,
                  }}>
                    {icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 9, color: '#8B9AB4', whiteSpace: 'nowrap' }}>
                    {label}
                  </span>
                </div>
              </div>
            ))}

            {/* Connecting lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 420 420">
              <line x1="210" y1="210" x2="210" y2="75"  stroke="rgba(0,229,160,0.2)"   strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="210" x2="365" y2="105" stroke="rgba(245,158,11,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="210" x2="380" y2="210" stroke="rgba(59,130,246,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="210" x2="365" y2="315" stroke="rgba(123,94,246,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="210" x2="210" y2="355" stroke="rgba(249,115,22,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
              <line x1="210" y1="210" x2="55"  y2="210" stroke="rgba(236,72,153,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
              {/* Animated data packets */}
              <circle r="3" fill="#00E5A0" opacity="0.8"><animateMotion dur="3s" repeatCount="indefinite" path="M210,210 L210,75"/></circle>
              <circle r="3" fill="#F59E0B" opacity="0.8"><animateMotion dur="3.5s" begin="0.5s" repeatCount="indefinite" path="M210,210 L365,105"/></circle>
              <circle r="3" fill="#3B82F6" opacity="0.8"><animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M210,210 L380,210"/></circle>
              <circle r="3" fill="#7B5EF6" opacity="0.8"><animateMotion dur="3.2s" begin="1.5s" repeatCount="indefinite" path="M210,210 L365,315"/></circle>
              <circle r="3" fill="#F97316" opacity="0.8"><animateMotion dur="3.8s" begin="0.8s" repeatCount="indefinite" path="M210,210 L210,355"/></circle>
              <circle r="3" fill="#EC4899" opacity="0.8"><animateMotion dur="4.5s" begin="2s" repeatCount="indefinite" path="M210,210 L55,210"/></circle>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; padding: 64px 24px !important; }
          #hero-right { display: none !important; }
        }
        @media (max-width: 768px) {
          #hero-grid { padding: 48px 20px !important; }
          .hero-cta-wrap { flex-wrap: wrap; }
          #hero h1 { font-size: clamp(34px, 8vw, 52px) !important; }
        }
        @media (max-width: 480px) {
          #hero-grid { padding: 40px 16px !important; }
          .hero-cta-wrap { flex-direction: column !important; align-items: stretch !important; }
          .hero-cta-wrap a { text-align: center !important; width: 100% !important; box-sizing: border-box !important; }
          .hero-stats { flex-direction: column !important; gap: 10px !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
