'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface LegalModalProps {
  type: 'privacy' | 'tos'
  isOpen: boolean
  onClose: () => void
  onAccepted?: () => void   // only used for 'tos'
}

/* ─── Privacy Policy Document ───────────────────────────────────────────── */
function PrivacyPolicyContent() {
  return (
    <>
      <p style={styles.intro}>
        At AgentSol, we take your privacy seriously. This policy explains what information we collect,
        why we collect it, and how we protect it. We keep things straightforward — no legalese walls,
        no hidden surprises.
      </p>

      <Section title="1. Who We Are">
        <p>
          AgentSol is an agentic workflow automation platform operated by <strong>AgentSol</strong>,
          a company based in Bangladesh. We help businesses replace repetitive manual tasks with
          intelligent autonomous agents.
        </p>
        <p>
          If you have any questions about this policy, you can reach us at{' '}
          <a href="mailto:privacy@agentsol.io" style={styles.link}>privacy@agentsol.io</a>.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We only collect information you give us directly or that is generated naturally by using our service.</p>
        <SubList items={[
          { title: 'Contact & Account Data', body: 'When you fill out our inquiry form, we collect your name, email address, phone/WhatsApp number, business name, website, and social media URLs. We use this to respond to your inquiry and set up your account.' },
          { title: 'Usage Data', body: 'We collect anonymised data about how you interact with the platform — pages visited, features used, session duration, and browser/device type. This is used solely to improve the product.' },
          { title: 'Cookies', body: 'We use essential cookies to keep you logged in and remember your preferences (such as accepting these Terms). We do not use advertising cookies or sell cookie data to any third party.' },
          { title: 'Payment Data', body: 'We do not store payment card details on our servers. Payment processing is handled by our third-party payment provider, who is bound by their own PCI-DSS compliance obligations.' },
        ]} />
      </Section>

      <Section title="3. How We Use Your Information">
        <SubList items={[
          { title: 'Service Delivery', body: 'To set up your account, provision your workflow agents, and provide customer support.' },
          { title: 'Communication', body: 'To send you onboarding emails, product updates, and important notices about your account. You can opt out of marketing emails at any time.' },
          { title: 'Product Improvement', body: 'To understand how the platform is being used so we can make it better. We only ever use aggregated, anonymised data for this purpose.' },
          { title: 'Legal Compliance', body: 'To comply with applicable laws in Bangladesh and any other jurisdiction where we operate.' },
        ]} />
      </Section>

      <Section title="4. Data Sharing">
        <p>
          <strong>We do not sell your personal information. Ever.</strong>
        </p>
        <p>
          We may share information with trusted third-party service providers who help us operate the platform
          (e.g., cloud hosting, email delivery, analytics). These providers are contractually obligated to
          handle your data securely and only for the purpose we specify. We do not share your data with
          advertisers or data brokers.
        </p>
        <p>
          We may disclose information if required by law, court order, or government authority in Bangladesh.
        </p>
      </Section>

      <Section title="5. Data Retention & Security">
        <p>
          We retain your data for as long as your account is active, or as long as needed to provide our
          services. If you close your account, we will delete your personal data within 30 days, except
          where we are legally required to keep it longer.
        </p>
        <p>
          We use industry-standard encryption (TLS) for data in transit and AES-256 encryption for data
          at rest. Access to your data is limited to authorised AgentSol personnel only.
        </p>
      </Section>

      <Section title="6. Your Rights">
        <p>You have the right to:</p>
        <ul style={styles.bulletList}>
          <li>Access the personal data we hold about you</li>
          <li>Request corrections to inaccurate data</li>
          <li>Request deletion of your data ("right to be forgotten")</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Export your workflow data in a portable format</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{' '}
          <a href="mailto:privacy@agentsol.io" style={styles.link}>privacy@agentsol.io</a>.
          We will respond within 14 business days.
        </p>
      </Section>

      <Section title="7. Cookies & Tracking">
        <p>
          We use only necessary cookies — those required for the platform to function. We do not use
          tracking pixels, fingerprinting, or third-party advertising networks. Our analytics are
          privacy-focused and anonymised.
        </p>
        <p>
          You can disable cookies in your browser settings, but doing so may affect some platform features
          such as staying logged in.
        </p>
      </Section>

      <Section title="8. Children's Privacy">
        <p>
          AgentSol is intended for use by businesses and individuals who are 13 years of age or older.
          We do not knowingly collect personal information from children under 13. If we discover that
          we have inadvertently collected such information, we will delete it immediately.
        </p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated"
          date at the top of this document and notify active users by email. Continued use of the platform
          after changes are posted constitutes your acceptance of the updated policy.
        </p>
      </Section>

      <Section title="10. Contact Us">
        <p>
          For privacy-related questions or requests:
        </p>
        <ul style={styles.bulletList}>
          <li><strong>Email:</strong> <a href="mailto:privacy@agentsol.io" style={styles.link}>privacy@agentsol.io</a></li>
          <li><strong>Company:</strong> AgentSol, Bangladesh</li>
        </ul>
      </Section>
    </>
  )
}

/* ─── Terms of Service Document ─────────────────────────────────────────── */
function TermsOfServiceContent() {
  return (
    <>
      <p style={styles.intro}>
        These Terms of Service govern your use of AgentSol. By using our platform, you agree to these
        terms. We've written them to be clear and fair — protecting both you and us so we can build
        a trustworthy working relationship.
      </p>

      <Section title="1. Agreement to Terms">
        <p>
          By accessing or using AgentSol (the "Platform"), you confirm that you have read, understood,
          and agree to be bound by these Terms of Service ("Terms"). If you are using the Platform on
          behalf of a business or organisation, you represent that you have authority to bind that entity
          to these Terms.
        </p>
        <p>
          If you do not agree to these Terms, please do not use the Platform.
        </p>
      </Section>

      <Section title="2. Description of Services">
        <p>
          AgentSol provides an agentic workflow automation platform that allows businesses to design,
          deploy, and manage AI-powered autonomous agents that handle repetitive tasks. Services are
          delivered via subscription plans (Starter, Professional, and Enterprise).
        </p>
        <p>
          We are based in Bangladesh and primarily serve businesses across South Asia and globally.
          The specific features included in each plan are described on our pricing page and are subject
          to change with reasonable notice.
        </p>
        <p>
          Onboarding follows a structured five-step process: <strong style={{ color: '#00E5A0' }}>Connect</strong> your
          existing tools, <strong style={{ color: '#00E5A0' }}>Configure</strong> your agent workflows,{' '}
          <strong style={{ color: '#00E5A0' }}>Check</strong> and preview agent behaviour before going live,{' '}
          <strong style={{ color: '#00E5A0' }}>Pay</strong> for the subscription plan that fits your scale, and{' '}
          <strong style={{ color: '#00E5A0' }}>Deploy</strong> your agents to run autonomously 24/7. By completing
          the Check step, you confirm that the configured workflow meets your requirements. Payment confirms your
          acceptance of the applicable subscription plan. AgentSol is not liable for agent behaviour arising from
          incorrect configurations that were approved during the Check step.
        </p>
      </Section>

      <Section title="3. Account & Eligibility">
        <p>
          To use AgentSol, you must be at least 13 years old and legally capable of entering into a
          binding contract. Business accounts must be registered by an authorised representative of
          that business.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for
          all activity that occurs under your account. Notify us immediately at{' '}
          <a href="mailto:support@agentsol.io" style={styles.link}>support@agentsol.io</a> if you
          suspect any unauthorised access.
        </p>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You agree to use AgentSol only for lawful purposes. You must not:</p>
        <ul style={styles.bulletList}>
          <li>Use the Platform to violate any applicable law or regulation</li>
          <li>Reverse engineer, decompile, or attempt to extract the source code of our software</li>
          <li>Use agents to send spam, phishing messages, or any unsolicited communications</li>
          <li>Overload, disrupt, or attempt to gain unauthorised access to our systems</li>
          <li>Use the Platform to process or store unlawfully obtained data</li>
          <li>Resell or sublicense access to the Platform without our written consent</li>
          <li>Impersonate AgentSol or any of its employees or agents</li>
        </ul>
        <p>
          Violation of these rules may result in immediate suspension or termination of your account
          without refund.
        </p>
      </Section>

      <Section title="5. Payment & Subscriptions">
        <p>
          AgentSol operates on a subscription basis. By subscribing to a paid plan, you authorise us
          to charge your chosen payment method on a recurring basis (monthly or annually, as selected).
        </p>
        <ul style={styles.bulletList}>
          <li><strong>Billing:</strong> Charges are billed at the start of each billing cycle.</li>
          <li><strong>Upgrades/Downgrades:</strong> Plan changes take effect at the start of the next billing cycle.</li>
          <li><strong>Cancellation:</strong> You may cancel at any time. Your access continues until the end of your current billing period. We do not offer prorated refunds for partial periods.</li>
          <li><strong>Taxes:</strong> Prices exclude applicable taxes. You are responsible for any taxes, levies, or duties imposed by your local jurisdiction.</li>
          <li><strong>Failed Payments:</strong> If payment fails, we will attempt to notify you and retry. Access may be suspended if payment cannot be collected after 7 days.</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          <strong>AgentSol owns the Platform.</strong> All software, algorithms, designs, trademarks,
          and content that make up the AgentSol platform are owned by or licensed to AgentSol and are
          protected under applicable intellectual property laws.
        </p>
        <p>
          <strong>You own your data and workflows.</strong> Any data you input, workflows you create,
          and outputs you generate using the Platform remain your property. We do not claim ownership
          over your content. We only use your data to operate and improve the service as described in
          our Privacy Policy.
        </p>
        <p>
          You grant AgentSol a limited, non-exclusive licence to process your data solely for the
          purpose of delivering the services you have subscribed to.
        </p>
      </Section>

      <Section title="7. Disclaimers & Limitation of Liability">
        <p>
          AgentSol is provided "as is." While we work hard to keep the Platform reliable, we do not
          guarantee that it will be uninterrupted, error-free, or perfectly secure. We are not liable
          for any losses arising from service downtime, data loss, or security incidents beyond our
          reasonable control.
        </p>
        <p>
          To the maximum extent permitted by law, AgentSol's total liability to you for any claim
          arising out of these Terms or your use of the Platform shall not exceed the total amount
          you paid to us in the 3 months preceding the event giving rise to the claim.
        </p>
        <p>
          We are not liable for any indirect, incidental, special, consequential, or punitive damages,
          including loss of profits, data, or business opportunities.
        </p>
      </Section>

      <Section title="8. Indemnification">
        <p>
          You agree to indemnify and hold harmless AgentSol, its directors, employees, and agents
          from any claims, losses, damages, or expenses (including legal fees) arising from your use
          of the Platform in violation of these Terms, your violation of any law, or your infringement
          of any third party's rights.
        </p>
      </Section>

      <Section title="9. Termination">
        <p>
          Either party may terminate this agreement at any time. You may cancel your account from
          within the Platform. AgentSol may suspend or terminate your account if you breach these
          Terms, with or without prior notice depending on the severity of the breach.
        </p>
        <p>
          Upon termination, your access to the Platform will cease. We will retain your data for 30
          days following termination to allow you to export it, after which it will be deleted.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of the People's
          Republic of Bangladesh. Any disputes arising under these Terms shall be subject to the
          exclusive jurisdiction of the courts of Bangladesh.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions
          will continue in full force and effect.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>For questions about these Terms:</p>
        <ul style={styles.bulletList}>
          <li><strong>Email:</strong> <a href="mailto:legal@agentsol.io" style={styles.link}>legal@agentsol.io</a></li>
          <li><strong>Company:</strong> AgentSol, Bangladesh</li>
        </ul>
      </Section>
    </>
  )
}

/* ─── Helper sub-components ─────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  )
}

function SubList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul style={{ ...styles.bulletList, listStyle: 'none', padding: 0 }}>
      {items.map(({ title, body }) => (
        <li key={title} style={{ marginBottom: 8 }}>
          <span style={{ color: '#00E5A0', fontWeight: 600 }}>{title}: </span>
          <span style={{ color: '#A8B4C8' }}>{body}</span>
        </li>
      ))}
    </ul>
  )
}

/* ─── Shared styles ──────────────────────────────────────────────────────── */
const styles = {
  intro: {
    fontSize: 15,
    color: '#A8B4C8',
    lineHeight: 1.75,
    marginBottom: 28,
    padding: '16px 20px',
    background: 'rgba(0,229,160,0.06)',
    borderLeft: '3px solid #00E5A0',
    borderRadius: '0 8px 8px 0',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: '#F0F4FF',
    marginBottom: 10,
    letterSpacing: '-0.01em',
  } as React.CSSProperties,
  bulletList: {
    paddingLeft: 20,
    margin: '8px 0',
    color: '#A8B4C8',
    lineHeight: 1.8,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
  } as React.CSSProperties,
  link: {
    color: '#00E5A0',
    textDecoration: 'none',
  } as React.CSSProperties,
}

/* ─── Main Modal Component ───────────────────────────────────────────────── */
export default function LegalModal({ type, isOpen, onClose, onAccepted }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const [checked, setChecked] = useState(false)
  const [visible, setVisible] = useState(false)
  const [rendered, setRendered] = useState(false)

  /* Mount/unmount with animation */
  useEffect(() => {
    if (isOpen) {
      setRendered(true)
      setHasScrolledToBottom(false)
      setChecked(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    } else {
      setVisible(false)
      const t = setTimeout(() => setRendered(false), 280)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  /* Escape key */
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Scroll detection */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 32
    if (atBottom) setHasScrolledToBottom(true)
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tos_accepted', 'true')
    }
    onClose()
    onAccepted?.()
  }

  if (!rendered) return null

  const isTos = type === 'tos'
  const title = isTos ? 'Terms of Service' : 'Privacy Policy'
  const lastUpdated = 'March 2026'

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        background: 'rgba(6, 9, 18, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.28s ease',
      }}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 700,
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1119',
          border: '1px solid rgba(0,229,160,0.18)',
          borderRadius: 16,
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,160,0.08)',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
          transition: 'transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#00E5A0',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  background: 'rgba(0,229,160,0.1)',
                  padding: '3px 8px',
                  borderRadius: 4,
                }}
              >
                LEGAL
              </span>
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#F0F4FF',
                letterSpacing: '-0.02em',
                margin: 0,
                fontFamily: 'var(--font-space-grotesk), sans-serif',
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: 12, color: '#4B5A72', marginTop: 4, fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              Last updated: {lastUpdated} · AgentSol, Bangladesh
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent', color: '#8B9AB4', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, flexShrink: 0, marginLeft: 16,
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,229,160,0.4)'
              e.currentTarget.style.color = '#00E5A0'
              e.currentTarget.style.background = 'rgba(0,229,160,0.06)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#8B9AB4'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            ×
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '28px 28px 24px',
            fontSize: 14,
            lineHeight: 1.75,
            color: '#A8B4C8',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0,229,160,0.25) transparent',
          }}
        >
          {isTos ? <TermsOfServiceContent /> : <PrivacyPolicyContent />}

          {/* ToS scroll nudge */}
          {isTos && !hasScrolledToBottom && (
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 8px',
                color: '#4B5A72',
                fontSize: 12,
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                letterSpacing: '0.05em',
              }}
            >
              ↓ scroll to the bottom to enable acceptance
            </div>
          )}
        </div>

        {/* Footer action area */}
        <div
          style={{
            padding: '20px 28px 24px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            flexShrink: 0,
            background: '#0a0d14',
          }}
        >
          {isTos ? (
            <>
              {/* Checkbox */}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  marginBottom: 16,
                  cursor: hasScrolledToBottom ? 'pointer' : 'not-allowed',
                  opacity: hasScrolledToBottom ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                  userSelect: 'none',
                }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={!hasScrolledToBottom}
                  onChange={(e) => setChecked(e.target.checked)}
                  style={{ marginTop: 2, accentColor: '#00E5A0', width: 16, height: 16, cursor: hasScrolledToBottom ? 'pointer' : 'not-allowed', flexShrink: 0 }}
                />
                <span style={{ fontSize: 13, color: '#8B9AB4', lineHeight: 1.5 }}>
                  I have read and agree to the{' '}
                  <strong style={{ color: '#F0F4FF' }}>Terms of Service</strong>. I understand that
                  this agreement governs my use of the AgentSol platform.
                </span>
              </label>

              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={onClose}
                  style={{
                    flex: 1,
                    padding: '11px 20px',
                    borderRadius: 9,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'transparent',
                    color: '#8B9AB4',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                    e.currentTarget.style.color = '#F0F4FF'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#8B9AB4'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAccept}
                  disabled={!checked}
                  style={{
                    flex: 2,
                    padding: '11px 20px',
                    borderRadius: 9,
                    border: 'none',
                    background: checked
                      ? 'linear-gradient(135deg, #00E5A0, #00c48a)'
                      : 'rgba(255,255,255,0.06)',
                    color: checked ? '#0a0d14' : '#4B5A72',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: checked ? 'pointer' : 'not-allowed',
                    transition: 'background 0.3s ease, color 0.3s ease, transform 0.15s ease, box-shadow 0.3s ease',
                    boxShadow: checked ? '0 4px 20px rgba(0,229,160,0.3)' : 'none',
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseOver={(e) => {
                    if (checked) {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,229,160,0.45)'
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = checked ? '0 4px 20px rgba(0,229,160,0.3)' : 'none'
                  }}
                >
                  Accept & Continue →
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '12px 20px',
                borderRadius: 9,
                border: '1px solid rgba(0,229,160,0.25)',
                background: 'rgba(0,229,160,0.06)',
                color: '#00E5A0',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(0,229,160,0.12)'
                e.currentTarget.style.borderColor = 'rgba(0,229,160,0.4)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0,229,160,0.06)'
                e.currentTarget.style.borderColor = 'rgba(0,229,160,0.25)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
