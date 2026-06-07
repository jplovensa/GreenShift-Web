import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Ecosystem', id: 'ecosystem' },
  { label: 'Studio', id: 'studio' },
  { label: 'Tiers', id: 'tiers' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Contact', id: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const check = () => {
      setScrolled(window.scrollY > 50)
      rafRef.current = requestAnimationFrame(check)
    }
    rafRef.current = requestAnimationFrame(check)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const textColor = scrolled ? '#111111' : '#ffffff'

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '64px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          zIndex: 100,
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(16px, 4vw, 60px)',
            gap: '16px',
          }}
        >
          {/* Logo — responsive, never cuts off */}
          <div style={{ flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
            <img
              src="/images/greenshift-logo.png"
              alt="GreenShift"
              onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{
                height: '28px',
                width: 'auto',
                maxWidth: '100%',
                cursor: 'pointer',
                display: 'block',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.4s ease',
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                label={item.label}
                scrolled={scrolled}
                onClick={() => handleNav(item.id)}
              />
            ))}
            <button
              className="desktop-only"
              onClick={() => handleNav('contact')}
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffffff',
                backgroundColor: '#0A2E2E',
                border: 'none',
                padding: '10px 24px',
                cursor: 'pointer',
                transition: 'background-color 0.25s ease',
                marginLeft: '12px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1A4A4A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0A2E2E')}
            >
              Initiate Project
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 110,
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{
                position: 'absolute', left: 0, width: '100%', height: '2px',
                backgroundColor: menuOpen ? '#111' : textColor,
                transition: 'all 0.3s ease',
                top: menuOpen ? '8px' : '0px',
                transform: menuOpen ? 'rotate(45deg)' : 'none',
              }} />
              <span style={{
                position: 'absolute', left: 0, width: '100%', height: '2px',
                backgroundColor: menuOpen ? '#111' : textColor,
                transition: 'all 0.3s ease',
                top: '8px',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                position: 'absolute', left: 0, width: '100%', height: '2px',
                backgroundColor: menuOpen ? '#111' : textColor,
                transition: 'all 0.3s ease',
                top: menuOpen ? '8px' : '16px',
                transform: menuOpen ? 'rotate(-45deg)' : 'none',
              }} />
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                fontSize: '28px',
                fontWeight: 400,
                color: '#111',
                background: 'none',
                border: 'none',
                padding: '16px 0',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0A2E2E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#111')}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            style={{
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              backgroundColor: '#0A2E2E',
              border: 'none',
              padding: '16px 40px',
              cursor: 'pointer',
              marginTop: '24px',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1A4A4A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0A2E2E')}
          >
            Initiate Project
          </button>
        </div>
      )}
    </>
  )
}

function NavButton({ label, scrolled, onClick }: { label: string; scrolled: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      className="desktop-only"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: hovered ? '#0A2E2E' : scrolled ? '#111111' : '#ffffff',
        backgroundColor: 'transparent',
        border: 'none',
        padding: '8px 14px',
        cursor: 'pointer',
        transition: 'color 0.25s ease',
      }}
    >
      {label}
    </button>
  )
}
