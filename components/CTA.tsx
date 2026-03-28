interface CTAProps {
  onOpenContact: () => void
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section
      id="contact"
      style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="badge" style={{ marginBottom: 32, justifyContent: 'center' }}>
          <span className="badge-dot" />
          READY TO AUTOMATE?
        </div>

        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Put Your Business
          <br />
          <span style={{ color: '#00E5A0' }}>On Autopilot.</span>
        </h2>

        <p
          style={{
            fontSize: 18,
            color: '#8B9AB4',
            lineHeight: 1.7,
            marginBottom: 48,
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Join the teams that have replaced hours of manual work with intelligent agents. Start free —
          no credit card required.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onOpenContact() }}
            className="btn-primary"
            style={{ fontSize: 16, padding: '16px 40px' }}
          >
            Contact Us
          </a>
        </div>

        <p
          style={{
            marginTop: 24,
            fontSize: 13,
            color: '#2e3852',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
          }}
        >
          Deploy your first agent now.
        </p>
      </div>
    </section>
  )
}
