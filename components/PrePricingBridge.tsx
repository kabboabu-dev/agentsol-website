export default function PrePricingBridge() {
  const stats = [
    { value: '94', accent: '%', label: 'Reduction in\nmanual work', border: true },
    { value: '3',  accent: '×', label: 'Faster lead\nresponse time', border: true },
    { value: '24', accent: '/7', label: 'Agents running\naround the clock', border: true },
    { value: '<48', accent: 'h', label: 'Time to\ngo live', border: false },
  ]

  return (
    <section
      style={{
        padding: 0,
        background: '#0d1019',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top edge line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg,transparent,rgba(0,229,160,0.15) 30%,rgba(0,229,160,0.3) 50%,rgba(0,229,160,0.15) 70%,transparent)',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 56,
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(0,229,160,0.4)' }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.18em',
              color: '#00E5A0',
              textTransform: 'uppercase',
            }}
          >
            // Why Teams Choose AgentSol
          </span>
          <div style={{ width: 32, height: 1, background: 'rgba(0,229,160,0.4)' }} />
        </div>

        {/* Stat row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
          {stats.map((s) => (
            <div
              key={s.value + s.accent}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '32px 48px',
                borderRight: s.border ? '1px solid rgba(255,255,255,0.06)' : 'none',
                gap: 8,
                minWidth: 180,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(36px,5vw,56px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#F0F4FF',
                  lineHeight: 1,
                }}
              >
                {s.value}
                <span style={{ color: '#00E5A0' }}>{s.accent}</span>
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: '#4A5568',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bridge copy */}
        <div
          style={{
            maxWidth: 640,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(18px,2.4vw,24px)',
              fontWeight: 500,
              color: '#C9D4E8',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Every agent runs on your stack, on your terms.{' '}
            <span style={{ color: '#F0F4FF', fontWeight: 600 }}>
              No per-seat fees. No usage caps.
            </span>{' '}
            Pick the plan that fits today — and grow without friction.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: '#4A5568',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.08em',
            }}
          >
            <StarIcon />
            <span>TRANSPARENT PRICING BELOW</span>
            <StarIcon />
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg,transparent,rgba(255,255,255,0.05) 30%,rgba(255,255,255,0.08) 50%,rgba(255,255,255,0.05) 70%,transparent)',
        }}
      />
    </section>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1L8.5 5.5H13L9.25 8.25L10.75 13L7 10.25L3.25 13L4.75 8.25L1 5.5H5.5L7 1Z"
        fill="#00E5A0"
        opacity="0.8"
      />
    </svg>
  )
}
