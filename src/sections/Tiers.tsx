import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TierModal from './TierModal'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    title: 'Mid-Range',
    subtitle: 'Commercial',
    desc: 'The equilibrium of architectural elegance and absolute modular efficiency.',
    video: '/videos/tier-midrange.mp4',
  },
  {
    title: 'Luxury',
    subtitle: 'Premium',
    desc: 'Uncompromising luxury built with precision for high-end real estate portfolios.',
    video: '/videos/tier-luxury.mp4',
  },
  {
    title: 'Avant-Garde',
    subtitle: 'Bespoke',
    desc: 'Complex hybrid engineering for visionary, limit-testing structural concepts.',
    video: '/videos/tier-avantgarde.mp4',
  },
  {
    title: 'Adaptive Reuse',
    subtitle: 'Retrofit',
    desc: 'Transforming existing commercial structures with zero-wet-work modular inserts.',
    video: '/videos/tier-adaptive.mp4',
  },
]

export default function Tiers() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeTier, setActiveTier] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

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

  // Play videos when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        id="tiers"
        ref={sectionRef}
        style={{
          backgroundColor: '#ffffff',
          padding: 'clamp(80px, 14vh, 180px) clamp(24px, 6vw, 100px)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div ref={headerRef} style={{ marginBottom: '60px' }}>
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
              Deployment Scale
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: '#111111',
              }}
            >
              Architectural Tiers.
            </h2>
          </div>

          <div
            ref={gridRef}
            className="r-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: '16px',
            }}
          >
            {tiers.map((tier, i) => (
              <div
                key={tier.title}
                onClick={() => setActiveTier(tier.title)}
                style={{
                  border: '1px solid rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <video
                    ref={(el) => { videoRefs.current[i] = el }}
                    src={tier.video}
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        color: '#3D6B6B',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tier.subtitle}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#3D6B6B',
                        letterSpacing: '0.05em',
                      }}
                    >
                      VIEW →
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 500,
                      color: '#111111',
                      marginBottom: '8px',
                    }}
                  >
                    {tier.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: 'rgba(0,0,0,0.55)',
                    }}
                  >
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TierModal tier={activeTier} onClose={() => setActiveTier(null)} />
    </>
  )
}
