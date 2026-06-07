import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { num: '01', title: 'Pre-Approved Financing', desc: 'Capital secured upfront before a single brick is laid. No more waiting on bank approvals.' },
  { num: '02', title: 'Precision Indoor Build', desc: 'Homes crafted in climate-controlled facilities. Zero weather delays, factory-grade quality.' },
  { num: '03', title: 'Algorithmic Design', desc: 'Every module optimized for structural efficiency, thermal performance, and rapid assembly.' },
  { num: '04', title: 'Rapid Deployment', desc: 'Structural erection in a fraction of traditional timelines. 45 days from order to keys.' },
  { num: '05', title: 'Seismic Resilience', desc: 'Engineered for earthquake-prone and coastal environments with proprietary panel systems.' },
  { num: '06', title: 'Thermal Comfort', desc: 'Passive temperature regulation, reducing artificial cooling needs by up to 60%.' },
  { num: '07', title: 'The GreenShift Finish', desc: 'Monolithic luxury coating concealing rapid-build technology beneath premium aesthetics.' },
  { num: '08', title: '100-Year Horizon', desc: 'Structures immune to coastal rot, mold, and seismic degradation. Built to outlast generations.' },
]

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%', once: true },
        })
      }
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="ecosystem"
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
            The Ecosystem
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
            Two Pillars. One Ecosystem.
          </h2>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '600px',
              marginTop: '20px',
            }}
          >
            GreenShift controls the financial architecture and algorithmic design.
            Together, they erase the friction of traditional development. Code meets
            steel, instantly.
          </p>
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
          {items.map((item) => (
            <div
              key={item.num}
              style={{
                backgroundColor: '#0a0a0a',
                padding: 'clamp(24px, 3vw, 40px)',
                cursor: 'default',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#111111')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0a0a0a')}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#3D6B6B',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {item.num}
              </span>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#ffffff',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
