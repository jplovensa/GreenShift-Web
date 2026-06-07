import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.from(contentRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3,
    })
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        backgroundColor: '#052525',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/videos/hero-studio.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(5,37,37,0.4) 0%, rgba(5,37,37,0.5) 50%, rgba(5,37,37,0.85) 100%)',
        }}
      />

      <div
        ref={contentRef}
        className="r-hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '24px',
          padding: '0 clamp(24px, 6vw, 100px)',
          maxWidth: '900px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(32px, 7vw, 84px)',
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#ffffff',
          }}
        >
          Build your home.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Without the wait.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '520px',
          }}
        >
          We transformed the industry's exhausting 18-month waiting period into a
          guaranteed 45-day delivery. Pre-approved financing meets precision
          indoor architecture.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.5)',
              padding: '14px 32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff'
              e.currentTarget.style.color = '#052525'
              e.currentTarget.style.borderColor = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
          >
            Enter The Protocol
          </button>
          <button
            onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '14px 16px',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
              textDecorationColor: 'rgba(255,255,255,0.3)',
              transition: 'text-decoration-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecorationColor = 'rgba(255,255,255,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecorationColor = 'rgba(255,255,255,0.3)'
            }}
          >
            Read Our Story →
          </button>
        </div>
      </div>
    </section>
  )
}
