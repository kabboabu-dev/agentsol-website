'use client'

interface PricingCardProps {
  tier: string
  price: string
  period?: string
  desc: string
  features: { label: string; included: boolean }[]
  cta: string
  featured?: boolean
  badge?: string
  onContact: () => void
}

function PricingCard({ tier, price, period, desc, features, cta, featured, badge, onContact }: PricingCardProps) {
  return (
    <div
      className="step-card"
      style={{
        background: '#111520',
        border: featured ? '1px solid rgba(0,229,160,0.35)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 20,
        padding: '36px 32px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: featured ? '0 0 60px rgba(0,229,160,0.07), 0 0 0 1px rgba(0,229,160,0.08)' : 'none',
      }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
            background: 'linear-gradient(90deg, #00E5A0, #00bfff)',
            borderRadius: 20, padding: '4px 16px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 9, letterSpacing: '0.1em', color: '#0d1019', fontWeight: 700 }}>
            {badge}
          </span>
        </div>
      )}

      <div
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 10,
          color: featured ? '#00E5A0' : '#8B9AB4',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        {tier}
      </div>

      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 42, fontWeight: 700, color: '#F0F4FF', letterSpacing: '-0.03em' }}>{price}</span>
        {period && <span style={{ fontSize: 14, color: '#8B9AB4' }}>{period}</span>}
      </div>

      <p style={{ fontSize: 14, color: '#8B9AB4', lineHeight: 1.6, marginBottom: 28 }}>{desc}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
        {features.map(({ label, included }) => (
          <div
            key={label}
            style={{
              display: 'flex', gap: 10, alignItems: 'center',
              fontSize: 14,
              color: included ? '#8B9AB4' : 'rgba(139,154,180,0.4)',
            }}
          >
            <span style={{ color: included ? '#00E5A0' : undefined, fontSize: 12 }}>
              {included ? '✓' : '✗'}
            </span>
            {label}
          </div>
        ))}
      </div>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onContact() }}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: 13,
          background: featured ? 'linear-gradient(135deg,#00E5A0,#00c48a)' : 'transparent',
          border: featured ? 'none' : '1px solid rgba(0,229,160,0.3)',
          borderRadius: 10,
          color: featured ? '#0d1019' : '#00E5A0',
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          letterSpacing: '0.08em',
          textDecoration: 'none',
          fontWeight: featured ? 700 : 400,
          transition: 'opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease',
        }}
        onMouseOver={(e) => {
          if (featured) {
            e.currentTarget.style.opacity = '0.88'
          } else {
            e.currentTarget.style.background = 'rgba(0,229,160,0.08)'
            e.currentTarget.style.borderColor = 'rgba(0,229,160,0.6)'
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '1'
          if (!featured) {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(0,229,160,0.3)'
          }
        }}
      >
        {cta}
      </a>
    </div>
  )
}

const agenticCards = [
  {
    tier: 'Starter', price: '৳7,000', period: '/month',
    desc: 'Perfect for small teams looking to automate their first repetitive workflow.',
    features: [
      { label: '1 Agentic workflow (any features added)', included: true },
      { label: 'Up to 500 runs/month', included: true },
      { label: 'Email + Slack output', included: true },
      { label: 'Basic analytics', included: true },
      { label: 'Multi-step reasoning', included: false },
      { label: 'Custom LLM model', included: false },
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Professional', price: '৳33,500', period: '/month',
    desc: 'For growing teams running multiple critical automations with full LLM power.',
    features: [
      { label: '5 Agentic workflows (any features added)', included: true },
      { label: '5,000 runs/month', included: true },
      { label: 'All output channels', included: true },
      { label: 'Multi-step reasoning', included: true },
      { label: 'Custom LLM model', included: true },
      { label: 'Dedicated infrastructure', included: false },
      { label: '24/7 dedicated support', included: false },
    ],
    cta: 'Get Started', featured: true, badge: 'MOST POPULAR',
  },
  {
    tier: 'Enterprise', price: 'Custom',
    desc: 'Unlimited scale, white-label branding, and dedicated infrastructure for your brand.',
    features: [
      { label: 'Unlimited workflows', included: true },
      { label: 'Unlimited runs', included: true },
      { label: 'White-label branding', included: true },
      { label: 'Custom LLM fine-tuning', included: true },
      { label: 'Dedicated infrastructure', included: true },
      { label: '24/7 dedicated support', included: true },
    ],
    cta: 'Contact Sales',
  },
]

interface PricingProps {
  onOpenContact: () => void
}

export default function Pricing({ onOpenContact }: PricingProps) {
  const cards = agenticCards.map((card) => ({ ...card, onContact: onOpenContact }))

  return (
    <section
      id="pricing"
      className="sec-pad-lg"
      style={{ padding: '120px 24px', background: '#0A0D14', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="sec-hdr" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// PRICING</div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Simple, <span style={{ color: '#00E5A0' }}>Transparent</span> Pricing.
          </h2>
          <p style={{ fontSize: 17, color: '#8B9AB4', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Pick the agent type you need. No hidden fees, no lock-in. Scale up or down any time.
          </p>
        </div>

        {/* Cards */}
        <div
          className="pricing-panel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            maxWidth: 1100,
            margin: '0 auto',
          }}
        >
          {cards.map((card) => (
            <PricingCard key={card.tier} {...card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-panel { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #pricing .sec-hdr { margin-bottom: 36px !important; }
          .pricing-panel { gap: 16px !important; }
        }
        @media (max-width: 640px) {
          .pricing-panel { grid-template-columns: 1fr !important; max-width: 480px !important; margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>
    </section>
  )
}
