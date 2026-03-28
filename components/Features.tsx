const features = [
  {
    color: '#00E5A0',
    glowClass: 'green-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#00E5A0" strokeWidth="1.5" />
        <line x1="8" y1="10" x2="16" y2="10" stroke="#00E5A0" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="13" x2="13" y2="13" stroke="#00E5A0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: 'FORM SUBMISSION',
    title: 'Form Submission',
    desc: 'AI fills & submits forms automatically. Capture leads, process applications, and trigger workflows — all without human input.',
    bullets: ['Any website form', 'CRM sync & webhooks', 'Spam detection'],
  },
  {
    color: '#7B5EF6',
    glowClass: 'purple-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6z" stroke="#7B5EF6" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    tag: 'CHATBOT WORKFLOW',
    title: 'Chatbot Workflow',
    desc: '24/7 AI chatbot deployed on any platform. Handles customer queries, qualifies leads, and escalates when needed.',
    bullets: ['Any platform deployment', 'Natural conversations', 'Auto-escalation'],
  },
  {
    color: '#3B82F6',
    glowClass: 'blue-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: 'LEAD GENERATION',
    title: 'Lead Generation',
    desc: 'Auto-find and qualify leads from any source. It researches, scores, and delivers warm leads directly to your CRM.',
    bullets: ['Multi-source scraping', 'AI qualification scoring', 'CRM delivery'],
  },
  {
    color: '#F59E0B',
    glowClass: 'amber-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="4,18 8,12 12,15 17,8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="8" r="2" fill="#F59E0B" />
      </svg>
    ),
    tag: 'ANALYTICS ANALYSIS',
    title: 'Analytics Analysis',
    desc: 'AI data analysis and business reports on demand. Ask questions in plain English, get structured insights instantly.',
    bullets: ['Natural language queries', 'Automated reporting', 'Trend detection'],
  },
  {
    color: '#F97316',
    glowClass: 'coral-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#F97316" strokeWidth="1.5" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: 'CUSTOM AUTOMATION',
    title: 'Custom Automation',
    desc: 'Bespoke workflow for any process. Describe what you need in plain English — we build it, you run it forever.',
    bullets: ['Any workflow, any tool', 'LLM-powered logic', 'Full ownership'],
  },
  {
    color: '#EC4899',
    glowClass: 'pink-glow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#EC4899" strokeWidth="1.5" />
        <path d="M12 4c-2.5 3.5-2.5 12.5 0 16M12 4c2.5 3.5 2.5 12.5 0 16M4 12h16" stroke="#EC4899" strokeWidth="1" opacity="0.7" />
      </svg>
    ),
    tag: 'CONTENT SCRAPER',
    title: 'Content Scraper',
    desc: 'Scheduled AI web scraping and data collection. Monitor competitors, aggregate content, and keep your data fresh automatically.',
    bullets: ['Scheduled scraping', 'Structured data output', 'Change detection'],
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="sec-pad-lg"
      style={{ padding: '120px 24px', background: '#0A0D14' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="sec-hdr" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// WHAT&apos;S INCLUDED</div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Six Features. <span style={{ color: '#00E5A0' }}>Every Workflow.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: '#8B9AB4',
              lineHeight: 1.7,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            Pre-built, production-ready automations that slot into your existing stack and start delivering results from day one.
          </p>
        </div>

        {/* Grid */}
        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {features.map((f) => (
            <div key={f.tag} className={`feature-card ${f.glowClass}`}>
              {/* Icon + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `rgba(${hexToRgb(f.color)}, 0.1)`,
                    border: `1px solid rgba(${hexToRgb(f.color)}, 0.25)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: f.color,
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {f.tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#F0F4FF',
                  marginBottom: 10,
                  letterSpacing: '-0.02em',
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#8B9AB4', lineHeight: 1.7, marginBottom: 20 }}>
                {f.desc}
              </p>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {f.bullets.map((b) => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div
                      className="dot"
                      style={{ background: f.color, width: 6, height: 6, marginTop: 0, opacity: 0.8 }}
                    />
                    <span style={{ fontSize: 13, color: '#8B9AB4' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #features .sec-hdr { margin-bottom: 48px !important; }
          .features-grid { gap: 16px !important; }
          .feature-card { padding: 22px 20px !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* Utility: convert hex to "r, g, b" for rgba() */
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}
