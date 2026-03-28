'use client'

import { useState, useEffect, useRef } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [plan, setPlan] = useState<string>('')
  const sheetRef = useRef<HTMLDivElement>(null)

  /* Trap focus + close on Escape */
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  /* Animate sheet in */
  useEffect(() => {
    if (!isOpen || !sheetRef.current) return
    requestAnimationFrame(() => {
      if (sheetRef.current) {
        sheetRef.current.style.transform = 'translateY(0) scale(1)'
        sheetRef.current.style.opacity = '1'
      }
    })
    return () => {
      if (sheetRef.current) {
        sheetRef.current.style.transform = 'translateY(24px) scale(0.97)'
        sheetRef.current.style.opacity = '0'
      }
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setPlan('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(5,8,16,0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="modal-sheet"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0d1019',
          border: '1px solid rgba(0,229,160,0.15)',
          borderRadius: 20,
          padding: '40px 36px 36px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,160,0.08)',
          transform: 'translateY(24px) scale(0.97)',
          opacity: 0,
          transition: 'transform 0.32s cubic-bezier(0.34,1.36,0.64,1), opacity 0.22s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            width: 32,
            height: 32,
            cursor: 'pointer',
            color: '#8B9AB4',
            fontSize: 18,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s, color 0.15s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.color = '#F0F4FF'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = '#8B9AB4'
          }}
        >
          ×
        </button>

        {submitted ? (
          /* Success state */
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(0,229,160,0.12)',
                border: '1px solid rgba(0,229,160,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l6 6 10-12" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#F0F4FF', marginBottom: 12, letterSpacing: '-0.02em' }}>
              Message Sent!
            </h2>
            <p style={{ fontSize: 15, color: '#8B9AB4', lineHeight: 1.6, marginBottom: 28 }}>
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary"
              style={{ fontSize: 14, padding: '12px 32px' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ marginBottom: 32 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(0,229,160,0.1)',
                  border: '1px solid rgba(0,229,160,0.25)',
                  borderRadius: 100,
                  padding: '4px 12px',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#00E5A0',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  marginBottom: 16,
                }}
              >
                ● GET IN TOUCH
              </span>
              <h2
                id="modal-title"
                style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: '#F0F4FF', margin: '0 0 8px', lineHeight: 1.2 }}
              >
                Let's build something together.
              </h2>
              <p style={{ fontSize: 14, color: '#8B9AB4', margin: 0, lineHeight: 1.6 }}>
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Personal info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="cf-field">
                  <label className="cf-label">Your Name</label>
                  <input type="text" name="name" placeholder="John Smith" required className="cf-input" />
                </div>
                <div className="cf-field">
                  <label className="cf-label">
                    Mobile Number{' '}
                    <span style={{ color: '#8B9AB4', fontWeight: 400, fontSize: 12 }}>(WhatsApp preferred)</span>
                  </label>
                  <input type="tel" name="mobile" placeholder="+1 555 000 0000" required className="cf-input" />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Email Address</label>
                  <input type="email" name="email" placeholder="john@company.com" required className="cf-input" />
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

              {/* Business info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="cf-field">
                  <label className="cf-label">Business Name</label>
                  <input type="text" name="business" placeholder="Acme Inc." required className="cf-input" />
                </div>
                <div className="cf-field">
                  <label className="cf-label">
                    Business Website{' '}
                    <span style={{ color: '#8B9AB4', fontWeight: 400, fontSize: 12 }}>(optional)</span>
                  </label>
                  <input type="url" name="website" placeholder="https://yourwebsite.com" className="cf-input" />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Facebook or Instagram Page</label>
                  <input type="url" name="social" placeholder="facebook.com/yourpage or instagram.com/yourpage" className="cf-input" />
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

              {/* Plan selection */}
              <div className="cf-field">
                <label className="cf-label" style={{ marginBottom: 12, display: 'block' }}>Select a Plan</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {(['Starter', 'Professional', 'Enterprise'] as const).map((p) => (
                    <label
                      key={p}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 16px',
                        background: plan === p ? 'rgba(0,229,160,0.07)' : 'rgba(255,255,255,0.02)',
                        border: plan === p ? '1px solid rgba(0,229,160,0.3)' : '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 10,
                        cursor: 'pointer',
                        transition: 'background 0.18s ease, border-color 0.18s ease',
                      }}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={p}
                        checked={plan === p}
                        onChange={() => setPlan(p)}
                        style={{ display: 'none' }}
                      />
                      {/* Custom radio dot */}
                      <div style={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        border: plan === p ? '2px solid #00E5A0' : '2px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'border-color 0.18s ease',
                      }}>
                        {plan === p && (
                          <div style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: '#00E5A0',
                            boxShadow: '0 0 6px rgba(0,229,160,0.7)',
                          }} />
                        )}
                      </div>
                      <span style={{
                        fontSize: 14,
                        fontWeight: plan === p ? 600 : 400,
                        color: plan === p ? '#F0F4FF' : '#8B9AB4',
                        letterSpacing: '-0.01em',
                        transition: 'color 0.18s ease',
                      }}>
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

              {/* Message */}
              <div className="cf-field">
                <label className="cf-label">Tell us about your project</label>
                <textarea
                  name="message"
                  placeholder="Describe what you'd like to automate, your current process, or any specific requirements..."
                  className="cf-textarea"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: sending ? 'rgba(0,229,160,0.5)' : 'linear-gradient(135deg,#00E5A0,#00c48a)',
                  border: 'none',
                  borderRadius: 12,
                  color: '#0d1019',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: sending ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.2s ease, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  letterSpacing: 0,
                }}
                onMouseOver={(e) => { if (!sending) e.currentTarget.style.opacity = '0.88' }}
                onMouseOut={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                {sending ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="8" cy="8" r="6" stroke="rgba(10,13,20,0.3)" strokeWidth="2" />
                      <path d="M8 2a6 6 0 0 1 6 6" stroke="#0a0d14" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p style={{ fontSize: 12, color: '#3a4a65', textAlign: 'center', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        /* iOS Safari: prevent zoom on input focus (requires 16px min font-size) */
        @media (max-width: 768px) {
          .cf-input, .cf-textarea, .cf-select { font-size: 16px !important; }
          .modal-sheet { padding: 28px 20px 24px !important; }
        }
      `}</style>
    </div>
  )
}
