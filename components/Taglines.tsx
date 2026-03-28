const taglines = [
  'Work smarter. Automate everything.',
  'Your business, on autopilot.',
  'AI agents that actually get work done.',
  'The automation stack for modern teams.',
]

export default function Taglines() {
  return (
    <section
      style={{
        padding: '80px 24px',
        background: '#0d1019',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {taglines.map((tagline, i) => (
          <div
            key={tagline}
            className="tagline-row"
            style={{ borderBottom: i === taglines.length - 1 ? 'none' : undefined }}
          >
            <span
              style={{
                color: '#1a2235',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 12,
                minWidth: 24,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            {tagline}
          </div>
        ))}
      </div>
    </section>
  )
}
