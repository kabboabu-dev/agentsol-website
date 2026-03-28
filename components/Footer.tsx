interface FooterProps {
  onOpenContact: () => void
  onOpenPrivacy: () => void
  onOpenTos: () => void
}

interface FooterLink {
  label: string
  href: string
  isContact?: boolean
  isPrivacy?: boolean
  isTos?: boolean
}

const footerLinks: Record<string, FooterLink[]> = {
  PRODUCT: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing',  href: '#pricing' },
  ],
  COMPANY: [
    { label: 'About',   href: '#about' },
    { label: 'Contact', href: '#contact', isContact: true },
  ],
  LEGAL: [
    { label: 'Privacy Policy',   href: '#', isPrivacy: true },
    { label: 'Terms of Service', href: '#', isTos: true },
  ],
}

export default function Footer({ onOpenContact, onOpenPrivacy, onOpenTos }: FooterProps) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: '#0d1019',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 24px 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Brand */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="none" stroke="#3B3F6E" strokeWidth="1.2"/>
                <line x1="18" y1="7" x2="8" y2="28" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="18" y1="7" x2="28" y2="28" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="12" y1="21" x2="24" y2="21" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="18" cy="7" r="3" fill="#00E5A0"/>
                <circle cx="8" cy="21" r="2.5" fill="#7B5EF6"/>
                <circle cx="28" cy="21" r="2.5" fill="#7B5EF6"/>
                <circle cx="8" cy="28" r="2.2" fill="#1a2235" stroke="#3B3F6E" strokeWidth="1"/>
                <circle cx="28" cy="28" r="2.2" fill="#1a2235" stroke="#3B3F6E" strokeWidth="1"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>
                <span style={{ color: '#F0F4FF' }}>Agent</span>
                <span style={{ color: '#00E5A0' }}>Sol</span>
              </span>
            </div>

            <p style={{ fontSize: 14, color: '#8B9AB4', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              Agentic workflow platform that replaces repetitive human labor with intelligent autonomous agents.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                {
                  label: 'Twitter / X',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#8B9AB4', transition: 'border-color 0.2s, color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,229,160,0.4)'
                    e.currentTarget.style.color = '#00E5A0'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#8B9AB4'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#F0F4FF',
                  marginBottom: 20,
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(({ label, href, isContact, isPrivacy, isTos }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault()
                        if (isContact) {
                          onOpenContact()
                        } else if (isPrivacy) {
                          onOpenPrivacy()
                        } else if (isTos) {
                          onOpenTos()
                        } else if (href !== '#') {
                          scrollTo(href)
                        }
                      }}
                      style={{
                        color: '#8B9AB4', fontSize: 14,
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#F0F4FF')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#8B9AB4')}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 13, color: '#2e3852', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            © 2026 AgentSol // Agentic Workflow Platform
          </span>
          <span style={{ fontSize: 13, color: '#2e3852', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            agentsol.io
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          footer { padding: 40px 20px 28px !important; }
          .footer-grid { margin-bottom: 40px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  )
}
