'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import IntegrationsMarquee from './IntegrationsMarquee'
import Features from './Features'
import HowItWorks from './HowItWorks'
import About from './About'
import WorkflowFeatures from './WorkflowFeatures'
import DashboardFeature from './DashboardFeature'
import PrePricingBridge from './PrePricingBridge'
import Pricing from './Pricing'
import Taglines from './Taglines'
import CTA from './CTA'
import Footer from './Footer'
import ContactModal from './ContactModal'
import LegalModal from './LegalModal'

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [tosOpen, setTosOpen] = useState(false)
  const [tosAccepted, setTosAccepted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tos_accepted') === 'true'
    }
    return false
  })

  // Gate the contact modal behind ToS acceptance
  const openModal = () => {
    if (tosAccepted) {
      setModalOpen(true)
    } else {
      setTosOpen(true)
    }
  }
  const closeModal = () => setModalOpen(false)

  const handleTosAccepted = () => {
    setTosAccepted(true)
    setModalOpen(true)
  }

  /* ── Scroll animations ── */
  useEffect(() => {

    function prep(el: Element, type: 'scroll' | 'left' | 'right', delay: number) {
      const hEl = el as HTMLElement
      hEl.classList.add('sa')
      hEl.dataset.saType  = type
      hEl.dataset.saDelay = String(delay)
      if (type === 'left')   hEl.classList.add('from-left')
      if (type === 'right')  hEl.classList.add('from-right')
      if (type === 'scroll') hEl.classList.add('from-bottom')
    }

    function show(el: Element) {
      const hEl  = el as HTMLElement
      const delay = Number(hEl.dataset.saDelay) || 0
      setTimeout(() => hEl.classList.add('sa-visible'), delay)
    }

    /* Register elements */
    document.querySelectorAll('.section-label').forEach((el) => prep(el, 'scroll', 0))

    document.querySelectorAll('section h2, section h3').forEach((el) => {
      const skip = ['.mission-flex', '.vision-flex', '.pos-flex']
      if (!skip.some((s) => el.closest(s))) prep(el, 'scroll', 60)
    })

    document.querySelectorAll('#features > div > p, #pricing > div > p').forEach((el) =>
      prep(el, 'scroll', 120),
    )

    document.querySelectorAll('.feature-card').forEach((el, i) =>
      prep(el, 'scroll', (i % 3) * 100),
    )

    document.querySelectorAll('#how-it-works .step-card').forEach((el, i) =>
      prep(el, 'scroll', i * 120),
    )

    document.querySelectorAll('.pricing-panel .step-card').forEach((el, i) =>
      prep(el, 'scroll', i * 110),
    )

    document.querySelectorAll('.mission-text-col').forEach((el) => prep(el, 'left', 0))
    document.querySelectorAll('.mission-graphic-col').forEach((el) => prep(el, 'right', 100))
    document.querySelectorAll('.vision-text-col').forEach((el) => prep(el, 'left', 0))
    document.querySelectorAll('.vision-graphic-col').forEach((el) => prep(el, 'right', 100))
    document.querySelectorAll('.pos-text-col').forEach((el) => prep(el, 'left', 0))
    document.querySelectorAll('.pos-graphic-col').forEach((el) => prep(el, 'right', 100))
    document.querySelectorAll('.agentic-left-col').forEach((el) => prep(el, 'left', 0))
    document.querySelectorAll('.agentic-right-col').forEach((el) => prep(el, 'right', 100))

    document.querySelectorAll('.tagline-row').forEach((el, i) =>
      prep(el, 'scroll', i * 80),
    )

    /* IntersectionObserver — fire once only */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    )

    document.querySelectorAll('.sa').forEach((el) => io.observe(el))

    return () => { io.disconnect() }
  }, [])

  /* ── Smooth scroll on load to top ── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Navbar onOpenContact={openModal} />
      <main>
        <Hero onOpenContact={openModal} />
        <IntegrationsMarquee />
        <HowItWorks />
        <About />
        <WorkflowFeatures />
        <DashboardFeature />
        <Features />
        <PrePricingBridge />
        <Pricing onOpenContact={openModal} />
        <Taglines />
        <CTA onOpenContact={openModal} />
      </main>
      <Footer onOpenContact={openModal} onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTos={() => setTosOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
      <LegalModal type="privacy" isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <LegalModal type="tos" isOpen={tosOpen} onClose={() => setTosOpen(false)} onAccepted={handleTosAccepted} />
    </>
  )
}
