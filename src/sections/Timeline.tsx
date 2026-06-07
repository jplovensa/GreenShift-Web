import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    num: '01',
    day: 'Day 01',
    title: 'Funding Secured',
    desc: 'Your financing is pre-approved and locked in instantly before we even touch a tool. Absolute clarity from the start.',
  },
  {
    num: '02',
    day: 'Day 02–30',
    title: 'Indoor Construction',
    desc: 'Your home is built module-by-module in our dry, perfect-climate facility. Quality is standardized and rigorously tested.',
  },
  {
    num: '03',
    day: 'Day 31–44',
    title: 'Site Assembly',
    desc: 'We deliver the finished modules to your land, locking them instantly into the foundation and connecting all utilities.',
  },
  {
    num: '04',
    day: 'Day 45',
    title: 'Welcome Home',
    desc: 'We hand you the keys. The exhausting traditional wait is officially over. Your life in your new home begins.',
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%', once: true },
        })
      }
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 14vh, 180px) clamp(24px, 6vw, 100px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div ref={headerRef} style={{ marginBottom: '80px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: '#3D6B6B',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            The Protocol
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            45 Days. Guaranteed.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="r-grid-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
        >
          {milestones.map((m) => (
            <div
              key={m.num}
              style={{
                backgroundColor: '#0a0a0a',
                padding: 'clamp(24px, 3vw, 40px)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#111111')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0a0a0a')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 400, color: '#3D6B6B' }}>{m.num}</span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    color: '#3D6B6B',
                    textTransform: 'uppercase',
                  }}
                >
                  {m.day}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#ffffff',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
