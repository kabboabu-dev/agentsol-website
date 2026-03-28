'use client'
import { useEffect, useRef, useState } from 'react'

function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms))
}

export default function WorkflowFeatures() {
  const [step, setStep] = useState(0)
  const [typing, setTyping] = useState(0) // 0=none, 1=after user msg 1, 2=after user msg 2
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const cancelledRef = useRef(false)
  const msgsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const gridRef2 = useRef<HTMLDivElement>(null)

  // Scroll to bottom whenever a message or typing indicator appears
  useEffect(() => {
    const el = msgsRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [step, typing])

  useEffect(() => {
    cancelledRef.current = false

    const jitter = (base: number, range = 300) => base + Math.random() * range - range / 2

    async function run() {
      while (!cancelledRef.current) {
        setStep(0); setTyping(0); setFading(false)
        if (msgsRef.current) msgsRef.current.scrollTop = 0

        await sleep(jitter(900, 400));  if (cancelledRef.current) break
        setStep(1)

        await sleep(jitter(900, 200)); if (cancelledRef.current) break
        setTyping(1)

        await sleep(jitter(1500, 400)); if (cancelledRef.current) break
        setTyping(0); setStep(2)

        await sleep(jitter(1200, 300)); if (cancelledRef.current) break
        setStep(3)

        await sleep(jitter(700, 200));  if (cancelledRef.current) break
        setTyping(2)

        await sleep(jitter(1300, 400)); if (cancelledRef.current) break
        setTyping(0); setStep(4)

        await sleep(jitter(4000, 600)); if (cancelledRef.current) break

        // Fade out before reset
        setFading(true)
        await sleep(700); if (cancelledRef.current) break
      }
    }

    run()
    return () => { cancelledRef.current = true }
  }, [])

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = gridRef2.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible2(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sec-pad-lg" style={{ padding: '0 24px 120px', background: '#0A0D14' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section header */}
        <div className="sec-hdr" style={{ textAlign: 'center', marginBottom: 72, paddingTop: 100 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// WORKFLOW FEATURES</div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Our Workflow <span style={{ color: '#00E5A0' }}>Features.</span>
          </h2>
        </div>

        {/* Feature 1 — Chatbot */}
        <div
          ref={gridRef}
          className="wf-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.65fr',
            gap: 20,
            alignItems: 'center',
          }}
        >
          {/* LEFT — Phone mockup */}
          <div
            className="wf-phone-col"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: 480,
              overflow: 'visible',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Ambient glow behind phone */}
            <div style={{
              position: 'absolute',
              width: 280,
              height: 280,
              background: 'radial-gradient(ellipse, rgba(0,229,160,0.12) 0%, rgba(123,94,246,0.06) 50%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(28px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            {/* Phone outer frame — breaks out of container vertically */}
            <div style={{
              width: 234,
              height: 508,
              borderRadius: 44,
              background: 'linear-gradient(170deg, #28282F 0%, #141418 50%, #0C0C10 100%)',
              border: '1.5px solid rgba(255,255,255,0.18)',
              position: 'relative',
              boxShadow: '0 50px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.4), 0 0 80px rgba(0,229,160,0.08)',
              zIndex: 1,
              flexShrink: 0,
              animation: 'wfFloat 5s ease-in-out infinite',
            }}>
              {/* Volume buttons — left side */}
              <div style={{ position: 'absolute', left: -3, top: 88, width: 3, height: 26, background: 'linear-gradient(180deg, #2E2E36, #1C1C22)', borderRadius: '2px 0 0 2px', boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.06)' }} />
              <div style={{ position: 'absolute', left: -3, top: 124, width: 3, height: 26, background: 'linear-gradient(180deg, #2E2E36, #1C1C22)', borderRadius: '2px 0 0 2px', boxShadow: 'inset -1px 0 0 rgba(255,255,255,0.06)' }} />
              {/* Silent switch — left side */}
              <div style={{ position: 'absolute', left: -3, top: 60, width: 3, height: 18, background: 'linear-gradient(180deg, #2E2E36, #1C1C22)', borderRadius: '2px 0 0 2px' }} />
              {/* Power button — right side */}
              <div style={{ position: 'absolute', right: -3, top: 108, width: 3, height: 48, background: 'linear-gradient(180deg, #2E2E36, #1C1C22)', borderRadius: '0 2px 2px 0', boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.06)' }} />

              {/* Screen */}
              <div style={{
                position: 'absolute',
                inset: 6,
                borderRadius: 38,
                background: '#0A0D14',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Dynamic island */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: 12,
                  paddingBottom: 6,
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: 88,
                    height: 26,
                    background: '#000',
                    borderRadius: 13,
                  }} />
                </div>

                {/* Status bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 16px 6px',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>9:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {/* Signal bars */}
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                      <rect x="0" y="6" width="2" height="3" rx="0.5" fill="rgba(255,255,255,0.4)" />
                      <rect x="3" y="4" width="2" height="5" rx="0.5" fill="rgba(255,255,255,0.4)" />
                      <rect x="6" y="2" width="2" height="7" rx="0.5" fill="rgba(255,255,255,0.4)" />
                      <rect x="9" y="0" width="2" height="9" rx="0.5" fill="rgba(255,255,255,0.4)" />
                    </svg>
                    {/* Battery */}
                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
                      <rect x="0.5" y="0.5" width="14" height="8" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                      <rect x="15" y="3" width="2" height="3" rx="1" fill="rgba(255,255,255,0.35)" />
                      <rect x="1.5" y="1.5" width="9" height="6" rx="1.5" fill="rgba(255,255,255,0.4)" />
                    </svg>
                  </div>
                </div>

                {/* Chat header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px 12px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00E5A0, #3B82F6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 14px rgba(0,229,160,0.3)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-5 4V6z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#F0F4FF', letterSpacing: '-0.01em' }}>Chatbot Agent</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00E5A0', animation: 'wfPulse 2s ease-in-out infinite' }} />
                      <span style={{ fontSize: 9, color: '#00E5A0', letterSpacing: '0.02em' }}>online · AgentSol</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div
                  ref={msgsRef}
                  style={{
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    transition: 'opacity 0.6s ease',
                    opacity: fading ? 0 : 1,
                    padding: '10px 10px 6px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    minHeight: '100%',
                    justifyContent: 'flex-end',
                  }}>
                    {step >= 1 && (
                      <div style={{ animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 6 }}>
                          <div style={{
                            background: 'linear-gradient(135deg, rgba(0,229,160,0.18), rgba(0,229,160,0.1))',
                            border: '1px solid rgba(0,229,160,0.22)',
                            borderRadius: '14px 14px 3px 14px',
                            padding: '8px 11px',
                            maxWidth: '78%',
                          }}>
                            <p style={{ fontSize: 11, color: '#D4FAF0', margin: 0, lineHeight: 1.5 }}>
                              Can you help me qualify new leads from our site?
                            </p>
                          </div>
                          <UserAvatar />
                        </div>
                      </div>
                    )}

                    {typing === 1 && <TypingBubble />}

                    {step >= 2 && (
                      <div style={{ animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                          <AiAvatar />
                          <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '3px 14px 14px 14px',
                            padding: '9px 11px',
                            maxWidth: '80%',
                          }}>
                            <p style={{ fontSize: 11, color: '#C8D6F0', margin: 0, lineHeight: 1.6 }}>
                              On it! Analyzed{' '}
                              <span style={{ color: '#00E5A0', fontWeight: 600 }}>47 visitors</span>
                              {' '}— flagged{' '}
                              <span style={{ color: '#00E5A0', fontWeight: 600 }}>12 leads</span>
                              {' '}and synced to CRM.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {step >= 3 && (
                      <div style={{ animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 6 }}>
                          <div style={{
                            background: 'linear-gradient(135deg, rgba(0,229,160,0.18), rgba(0,229,160,0.1))',
                            border: '1px solid rgba(0,229,160,0.22)',
                            borderRadius: '14px 14px 3px 14px',
                            padding: '8px 11px',
                            maxWidth: '78%',
                          }}>
                            <p style={{ fontSize: 11, color: '#D4FAF0', margin: 0, lineHeight: 1.5 }}>
                              Book demos with the top 3 leads.
                            </p>
                          </div>
                          <UserAvatar />
                        </div>
                      </div>
                    )}

                    {typing === 2 && <TypingBubble />}

                    {step >= 4 && (
                      <div style={{ animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                          <AiAvatar />
                          <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '3px 14px 14px 14px',
                            padding: '9px 11px',
                            maxWidth: '80%',
                          }}>
                            <p style={{ fontSize: 11, color: '#C8D6F0', margin: 0, lineHeight: 1.6 }}>
                              Done!{' '}
                              <span style={{ color: '#7B5EF6', fontWeight: 600 }}>3 demos booked</span>
                              {' '}this week. Invites sent.{' '}
                              <span style={{ color: '#00E5A0' }}>✓</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Input bar */}
                <div style={{
                  padding: '8px 10px 12px',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  gap: 7,
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '7px 11px',
                  }}>
                    <span style={{ fontSize: 10, color: '#3A4A5E' }}>Ask anything...</span>
                  </div>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00E5A0, #00C48C)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 14px rgba(0,229,160,0.32)',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#0A0D14" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Home indicator */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 6, flexShrink: 0 }}>
                  <div style={{ width: 60, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
                </div>
              </div>{/* end screen */}
            </div>{/* end phone frame */}
          </div>{/* end left panel */}

          {/* RIGHT — Description */}
          <div
            className="wf-desc-card"
            style={{
              background: 'linear-gradient(160deg, #0F1A2E 0%, #0A1020 100%)',
              border: '1px solid rgba(123,94,246,0.14)',
              borderRadius: 24,
              padding: '44px 48px',
              position: 'relative',
              overflow: 'hidden',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s',
            }}
          >
            {/* Ambient glow */}
            <div
              style={{
                position: 'absolute',
                bottom: -60,
                left: -60,
                width: 260,
                height: 260,
                background: 'radial-gradient(circle, rgba(123,94,246,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ marginBottom: 22, position: 'relative' }}>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: 9,
                  letterSpacing: '0.14em',
                  color: '#7B5EF6',
                  textTransform: 'uppercase',
                  background: 'rgba(123,94,246,0.1)',
                  border: '1px solid rgba(123,94,246,0.2)',
                  borderRadius: 6,
                  padding: '4px 10px',
                }}
              >
                CHATBOT WORKFLOW
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(26px, 2.8vw, 38px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#F0F4FF',
                marginBottom: 20,
                position: 'relative',
              }}
            >
              A 24/7 Workflow<br />
              That <span style={{ color: '#00E5A0' }}>Talks Back.</span>
            </h3>

            <p
              style={{
                fontSize: 15,
                color: '#8B9AB4',
                lineHeight: 1.8,
                marginBottom: 36,
                position: 'relative',
                maxWidth: 480,
              }}
            >
              Deploy an always-on chat workflow across your site, CRM, or any platform. It qualifies
              leads in real time, answers queries instantly, books meetings, and hands off to your
              team only when it matters — so nothing falls through the cracks.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
              {[
                'Deploy on any platform or website',
                'Natural, human-like conversations',
                'Auto-qualifies and scores leads',
                'Escalates to humans when needed',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: 'rgba(0,229,160,0.1)',
                      border: '1px solid rgba(0,229,160,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#00E5A0"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#C8D6F0', letterSpacing: '-0.01em' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 2 — Forms */}
        <div
          ref={gridRef2}
          className="wf-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.65fr 1fr',
            gap: 20,
            alignItems: 'center',
            marginTop: 60,
          }}
        >
          {/* LEFT — Description */}
          <div
            className="wf-desc-card"
            style={{
              background: 'linear-gradient(160deg, #0F1A2E 0%, #0A1020 100%)',
              border: '1px solid rgba(0,229,160,0.12)',
              borderRadius: 24,
              padding: '44px 48px',
              position: 'relative',
              overflow: 'hidden',
              opacity: visible2 ? 1 : 0,
              transform: visible2 ? 'translateX(0)' : 'translateX(-72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Ambient glow */}
            <div style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 260,
              height: 260,
              background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ marginBottom: 22, position: 'relative' }}>
              <span style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 9,
                letterSpacing: '0.14em',
                color: '#00E5A0',
                textTransform: 'uppercase' as const,
                background: 'rgba(0,229,160,0.08)',
                border: '1px solid rgba(0,229,160,0.18)',
                borderRadius: 6,
                padding: '4px 10px',
              }}>
                FORM WORKFLOW
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(26px, 2.8vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: '#F0F4FF',
              marginBottom: 20,
              position: 'relative',
            }}>
              Forms That<br />
              <span style={{ color: '#00E5A0' }}>Work For You.</span>
            </h3>

            <p style={{
              fontSize: 15,
              color: '#8B9AB4',
              lineHeight: 1.8,
              marginBottom: 36,
              position: 'relative',
              maxWidth: 480,
            }}>
              Stop losing leads to boring forms. AgentSol turns every submission into an
              intelligent action — qualifying prospects in real time, routing feedback to
              the right team, and triggering automated follow-ups the moment someone hits
              Submit. No code. No delays. Just results.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
              {[
                'AI pre-fills and validates fields instantly',
                'Routes leads, feedback & support automatically',
                'Triggers follow-up sequences on submission',
                'Connects to your CRM, Slack, or any tool',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: 'rgba(0,229,160,0.1)',
                    border: '1px solid rgba(0,229,160,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#00E5A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#C8D6F0', letterSpacing: '-0.01em' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Animated form graphic */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: 480,
              overflow: 'visible',
              opacity: visible2 ? 1 : 0,
              transform: visible2 ? 'translateX(0)' : 'translateX(72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s',
            }}
          >
            <AnimatedForm />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes wfPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes wfSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wfShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes wfCursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes wfFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @media (max-width: 860px) {
          .wf-grid { grid-template-columns: 1fr !important; }
          .wf-desc-card { padding: 32px 28px !important; }
        }
        @media (max-width: 640px) {
          .wf-phone-col { height: 420px !important; }
          .wf-desc-card { padding: 28px 20px !important; }
          .wf-grid { gap: 16px !important; margin-top: 32px !important; }
        }
      `}</style>
    </section>
  )
}

function TypingBubble() {
  return (
    <div style={{ animation: 'wfSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
        <AiAvatar />
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '3px 14px 14px 14px',
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          minWidth: 100,
        }}>
          <div style={{ height: 7, borderRadius: 4, background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(0,229,160,0.18) 40%, rgba(255,255,255,0.06) 100%)', backgroundSize: '200% 100%', animation: 'wfShimmer 1.4s ease-in-out infinite', width: '100%' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ height: 7, borderRadius: 4, background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(0,229,160,0.18) 40%, rgba(255,255,255,0.06) 100%)', backgroundSize: '200% 100%', animation: 'wfShimmer 1.4s 0.2s ease-in-out infinite', width: '60%' }} />
            <div style={{ width: 2, height: 11, borderRadius: 1, background: '#00E5A0', animation: 'wfCursor 0.8s step-start infinite', flexShrink: 0 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function UserAvatar() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00C48C, #0EA5E9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 0 10px rgba(0,196,140,0.25)',
      }}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="white" opacity="0.9" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="white" opacity="0.7" />
      </svg>
    </div>
  )
}

function AiAvatar({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00E5A0, #3B82F6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 0 12px rgba(0,229,160,0.22)',
        ...style,
      }}
    >
      <span style={{ fontSize: 9, color: 'white', fontWeight: 700, letterSpacing: '0.03em' }}>AI</span>
    </div>
  )
}

function AnimatedForm() {
  const [fStep, setFStep] = useState(0)

  useEffect(() => {
    let cancelled = false
    const jitter = (base: number, range = 300) => base + Math.random() * range - range / 2

    async function run() {
      while (!cancelled) {
        setFStep(0)
        await new Promise<void>(r => setTimeout(r, jitter(800, 300))); if (cancelled) break
        setFStep(1)
        await new Promise<void>(r => setTimeout(r, jitter(900, 300))); if (cancelled) break
        setFStep(2)
        await new Promise<void>(r => setTimeout(r, jitter(900, 300))); if (cancelled) break
        setFStep(3)
        await new Promise<void>(r => setTimeout(r, jitter(1000, 400))); if (cancelled) break
        setFStep(4)
        await new Promise<void>(r => setTimeout(r, jitter(3000, 600))); if (cancelled) break
      }
    }
    run()
    return () => { cancelled = true }
  }, [])

  const submitted = fStep >= 4

  return (
    <div style={{
      width: 240,
      height: 400,
      borderRadius: 20,
      background: 'linear-gradient(160deg, #141820 0%, #0C0F18 100%)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 40px 90px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 60px rgba(0,229,160,0.05)',
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      animation: 'wfFloat 6s ease-in-out infinite',
    }}>
      {/* Form header */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #00E5A0, #00C48C)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 14px rgba(0,229,160,0.28)',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#F0F4FF' }}>Lead Intake Form</span>
        </div>
        <p style={{ fontSize: 10, color: '#4A5A70', margin: 0, letterSpacing: '0.02em' }}>Powered by AgentSol AI</p>
      </div>

      {/* Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <FormField label="Full Name" value={fStep >= 1 ? 'Sarah Johnson' : ''} active={fStep === 1} filled={fStep > 1} />
        <FormField label="Work Email" value={fStep >= 2 ? 'sarah@acme.com' : ''} active={fStep === 2} filled={fStep > 2} />

        {/* Message — AI-assisted */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            <span style={{ fontSize: 9, color: '#4A5A70', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>Message</span>
            {fStep >= 3 && (
              <span style={{
                fontSize: 8, color: '#00E5A0',
                background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.2)',
                borderRadius: 4, padding: '2px 6px', letterSpacing: '0.04em',
                animation: 'wfSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both',
              }}>AI assisted</span>
            )}
          </div>
          <div style={{
            background: fStep >= 3 ? 'rgba(0,229,160,0.06)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${fStep >= 3 ? 'rgba(0,229,160,0.2)' : 'rgba(255,255,255,0.07)'}`,
            borderRadius: 10, padding: '9px 11px', minHeight: 56,
            transition: 'border-color 0.3s ease, background 0.3s ease',
          }}>
            {fStep >= 3 ? (
              <p style={{ fontSize: 10, color: '#C8D6F0', margin: 0, lineHeight: 1.6, animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
                Looking to automate our lead capture and CRM sync. Team of 40.
              </p>
            ) : (
              <span style={{ fontSize: 10, color: '#2A3A4E' }}>Your message…</span>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div style={{ marginTop: 18 }}>
        {!submitted ? (
          <div style={{
            width: '100%', background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.2)',
            borderRadius: 10, padding: '11px 0', textAlign: 'center' as const,
          }}>
            <span style={{ fontSize: 11, color: '#00E5A0', fontWeight: 600, letterSpacing: '0.04em' }}>Submit</span>
          </div>
        ) : (
          <div style={{
            width: '100%',
            background: 'linear-gradient(135deg, rgba(0,229,160,0.22), rgba(0,196,140,0.16))',
            border: '1px solid rgba(0,229,160,0.35)', borderRadius: 10, padding: '11px 0',
            textAlign: 'center' as const,
            animation: 'wfSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
            boxShadow: '0 0 20px rgba(0,229,160,0.12)',
          }}>
            <span style={{ fontSize: 11, color: '#00E5A0', fontWeight: 700, letterSpacing: '0.04em' }}>
              ✓ Submitted — AI routing now
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function FormField({ label, value, active, filled }: { label: string; value: string; active: boolean; filled: boolean }) {
  return (
    <div>
      <span style={{ fontSize: 9, color: '#4A5A70', letterSpacing: '0.06em', textTransform: 'uppercase' as const, display: 'block', marginBottom: 5 }}>{label}</span>
      <div style={{
        background: active ? 'rgba(0,229,160,0.06)' : filled ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${active ? 'rgba(0,229,160,0.28)' : filled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'}`,
        borderRadius: 10, padding: '9px 11px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'border-color 0.3s ease, background 0.3s ease',
      }}>
        {value ? (
          <span style={{ fontSize: 11, color: filled ? '#C8D6F0' : '#00E5A0', animation: 'wfSlideIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}>
            {value}
          </span>
        ) : (
          <span style={{ fontSize: 11, color: '#2A3A4E' }}>{label}…</span>
        )}
        {active && <div style={{ width: 2, height: 12, borderRadius: 1, background: '#00E5A0', animation: 'wfCursor 0.8s step-start infinite', flexShrink: 0 }} />}
        {filled && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="#00E5A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  )
}
