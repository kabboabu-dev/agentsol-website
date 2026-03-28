'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface NavbarProps {
  onOpenContact: () => void
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="navbar"
        style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none' }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="AgentSol"
            >
              <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="none" stroke="#3B3F6E" strokeWidth="1.2" />
              <line x1="18" y1="7" x2="8" y2="28" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="18" y1="7" x2="28" y2="28" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="21" x2="24" y2="21" stroke="#C0C4E0" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="18" cy="7" r="3" fill="#00E5A0" />
              <circle cx="8" cy="21" r="2.5" fill="#7B5EF6" />
              <circle cx="28" cy="21" r="2.5" fill="#7B5EF6" />
              <circle cx="8" cy="28" r="2.2" fill="#1a2235" stroke="#3B3F6E" strokeWidth="1" />
              <circle cx="28" cy="28" r="2.2" fill="#1a2235" stroke="#3B3F6E" strokeWidth="1" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              <span style={{ color: '#F0F4FF' }}>Agent</span>
              <span style={{ color: '#00E5A0' }}>Sol</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: 32 }}
          >
            {['#features', '#how-it-works', '#pricing', '#about'].map((href) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                {href.replace('#', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </a>
            ))}
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onOpenContact() }}>
              Contact
            </a>
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Desktop CTA */}
            <a
              href="#"
              className="btn-primary hidden md:inline-block"
              onClick={(e) => { e.preventDefault(); onOpenContact() }}
            >
              Get Started
            </a>

            {/* Hamburger */}
            <button
              className="flex md:hidden flex-col items-center justify-center"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                gap: 5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                marginLeft: 4,
              }}
              aria-label="Open menu"
            >
              <span
                className="ham-bar"
                style={{
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="ham-bar"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="ham-bar"
                style={{
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 49,
            background: 'rgba(10,13,20,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '8px 24px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { href: '#features', label: 'Features' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#about', label: 'About' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                style={{
                  color: '#8B9AB4',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#F0F4FF')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#8B9AB4')}
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); onOpenContact() }}
              style={{
                color: '#8B9AB4',
                fontSize: 15,
                fontWeight: 500,
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none',
              }}
            >
              Contact
            </a>
          </div>
          <a
            href="#"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); onOpenContact() }}
            style={{ display: 'block', textAlign: 'center', fontSize: 15, padding: 14, marginTop: 16 }}
          >
            Get Started
          </a>
        </div>
      )}
    </>
  )
}
