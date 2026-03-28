const steps = [
  {
    num: '01',
    label: 'STEP 01',
    title: 'Connect',
    desc: 'Link your existing tools and platforms. AgentSol integrates with everything you already use — no migration required.',
    featured: false,
  },
  {
    num: '02',
    label: 'STEP 02',
    title: 'Configure',
    desc: 'Pick your workflow template or describe what you need in plain English. Our AI sets up the agent logic instantly.',
    featured: true,
  },
  {
    num: '03',
    label: 'STEP 03',
    title: 'Check',
    desc: 'Review your configured agents before they go live. Preview runs, verify outputs, and make any final adjustments.',
    featured: false,
  },
  {
    num: '04',
    label: 'STEP 04',
    title: 'Pay',
    desc: 'Choose the plan that fits your scale. Transparent pricing, no hidden fees — activate your subscription and you\'re set.',
    featured: false,
  },
  {
    num: '05',
    label: 'STEP 05',
    title: 'Deploy',
    desc: 'Hit deploy and watch your agents go to work 24/7. Monitor, adjust, and scale from a single dashboard.',
    featured: false,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="sec-pad-lg"
      style={{
        padding: '120px 24px',
        background: '#0d1019',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="sec-hdr" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// HOW IT WORKS</div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            From Zero to <span style={{ color: '#00E5A0' }}>Automated</span>
            <br />
            in Five Steps.
          </h2>
        </div>

        {/* Steps grid — first row: 3 cards, second row: 2 cards centred */}
        <div className="steps-outer" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div
            className="steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}
          >
            {steps.slice(0, 3).map((step) => (
            <div
              key={step.num}
              className="step-card"
              style={{
                textAlign: 'center',
                padding: '40px 32px',
                background: '#111520',
                border: step.featured
                  ? '1px solid rgba(0,229,160,0.2)'
                  : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                position: 'relative',
                boxShadow: step.featured ? '0 0 60px rgba(0,229,160,0.06)' : 'none',
              }}
            >
              {/* Top label */}
              <div
                style={{
                  position: 'absolute',
                  top: -1,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#111520',
                  padding: '0 12px',
                }}
              >
                <span
                  className="step-label"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: 10,
                    color: '#00E5A0',
                    letterSpacing: '0.1em',
                  }}
                >
                  {step.label}
                </span>
              </div>

              {/* Circle */}
              <div
                className="step-circle"
                style={{
                  margin: '0 auto 24px',
                  ...(step.featured
                    ? {
                        borderColor: 'rgba(0,229,160,0.6)',
                        background: 'rgba(0,229,160,0.1)',
                      }
                    : {}),
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#F0F4FF',
                  marginBottom: 12,
                  letterSpacing: '-0.02em',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 15, color: '#8B9AB4', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
          </div>

          {/* Second row — 2 cards centred */}
          <div
            className="steps-grid-bottom"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 40,
              maxWidth: 820,
              margin: '0 auto',
              width: '100%',
            }}
          >
            {steps.slice(3).map((step) => (
              <div
                key={step.num}
                className="step-card"
                style={{
                  textAlign: 'center',
                  padding: '40px 32px',
                  background: '#111520',
                  border: step.featured
                    ? '1px solid rgba(0,229,160,0.2)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20,
                  position: 'relative',
                  boxShadow: step.featured ? '0 0 60px rgba(0,229,160,0.06)' : 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#111520',
                    padding: '0 12px',
                  }}
                >
                  <span
                    className="step-label"
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono), monospace',
                      fontSize: 10,
                      color: '#00E5A0',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                <div
                  className="step-circle"
                  style={{
                    margin: '0 auto 24px',
                    ...(step.featured
                      ? { borderColor: 'rgba(0,229,160,0.6)', background: 'rgba(0,229,160,0.1)' }
                      : {}),
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#F0F4FF',
                    marginBottom: 12,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, color: '#8B9AB4', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet: all 5 cards in a single row by collapsing the two sub-grids */
        @media (min-width: 641px) and (max-width: 1200px) {
          .steps-outer {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            gap: 12px !important;
          }
          /* Make the two sub-grid wrappers invisible to layout so cards go straight into the parent grid */
          .steps-outer .steps-grid,
          .steps-outer .steps-grid-bottom {
            display: contents !important;
          }
          /* Tighter card padding on tablet so text fits at 5 columns */
          .step-card { padding: 28px 14px !important; }
          .step-circle { width: 40px !important; height: 40px !important; font-size: 12px !important; }
        }
        @media (max-width: 640px) {
          .steps-outer { display: flex !important; flex-direction: column !important; gap: 16px !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid-bottom { grid-template-columns: 1fr !important; }
          .step-card { padding: 28px 20px !important; }
        }
        @media (max-width: 768px) {
          #how-it-works .sec-hdr { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  )
}
