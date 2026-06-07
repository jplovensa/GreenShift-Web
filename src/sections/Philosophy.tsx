import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            once: true,
          },
        })
      }
      if (tagsRef.current) {
        gsap.from(tagsRef.current.children, {
          x: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tagsRef.current,
            start: 'top 80%',
            once: true,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(80px, 14vh, 180px) clamp(24px, 6vw, 100px)',
      }}
    >
      <div
        className="r-philosophy"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        <div ref={textRef}>
          <p
            style={{
              fontSize: 'clamp(22px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              color: '#111111',
              maxWidth: '900px',
              marginBottom: '40px',
            }}
          >
            GreenShift is the{' '}
            <em style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>protocol</em>
            {' '}for rapid housing deployment. We built a closed-loop system where
            pre-approved financing meets precision indoor architecture — cutting
            delivery from 540 days to{' '}
            <span style={{ color: '#0A2E2E', fontWeight: 500 }}>45 days</span>.
          </p>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(17,17,17,0.6)',
              maxWidth: '720px',
            }}
          >
            Born from the belief that everyone deserves access to quality housing
            without bureaucratic delay, we operate at the intersection of capital
            engineering and modular construction. Every home is built inside our
            climate-controlled facilities, immune to weather, immune to cost
            overruns, immune to the chaos of traditional building.
          </p>
        </div>

        <div
          ref={tagsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingTop: '8px',
          }}
        >
          {['45 DAYS', 'INDOOR BUILD', 'CAPITAL FIRST'].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                color: '#111',
                border: '1px solid rgba(0,0,0,0.2)',
                padding: '10px 20px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
