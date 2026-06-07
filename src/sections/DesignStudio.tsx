import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DesignStudio() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            once: true,
          },
        })
      }
      if (overlayRef.current) {
        gsap.from(overlayRef.current, {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            once: true,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="studio"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
      }}
    >
      {/* VR Studio Video Background */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
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
            opacity: 0.6,
          }}
        >
          <source src="/videos/design-studio.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.3) 40%, rgba(5,5,5,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.1) 50%, rgba(5,5,5,0.5) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'clamp(80px, 14vh, 180px) clamp(24px, 6vw, 100px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          minHeight: '100vh',
        }}
        className="r-studio"
      >
        {/* Left - Text */}
        <div ref={contentRef}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: '#3D6B6B',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            Design Studio
          </span>

          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '24px',
            }}
          >
            Where vision
            <br />
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>becomes structure.</span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            GreenShift operates as the development and capital arm of Fjäll Group.
            Our immersive design studio merges VR-driven spatial planning with
            algorithmic capital allocation — transforming how homes are conceived,
            financed, and delivered.
          </p>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { num: '01', title: 'VR Spatial Planning', desc: 'Walk through your home before it exists. Holographic blueprints in immersive 3D.' },
              { num: '02', title: 'Capital Architecture', desc: 'Algorithmic financing models aligned to every design decision in real-time.' },
              { num: '03', title: 'Digital Twins', desc: 'Full-scale virtual replicas for testing, refinement, and precision manufacturing.' },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#3D6B6B',
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h4
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Brand relationship */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Fjäll Group */}
          <div
            style={{
              textAlign: 'center',
              padding: '48px',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(10px)',
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                color: '#3D6B6B',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              A Division Of
            </span>
            <h3
              style={{
                fontSize: '28px',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}
            >
              FJÄLL GROUP
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
              }}
            >
              Strategic Capital • Material Science
              <br />
              Modular Technology • Global Execution
            </p>
          </div>

          {/* Arrow connection */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(61,107,107,0.5)' }} />
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRight: '1px solid rgba(61,107,107,0.5)',
                borderBottom: '1px solid rgba(61,107,107,0.5)',
                transform: 'rotate(45deg)',
              }}
            />
          </div>

          {/* GreenShift */}
          <div
            style={{
              textAlign: 'center',
              padding: '48px',
              border: '1px solid rgba(10,46,46,0.5)',
              backgroundColor: 'rgba(10,46,46,0.15)',
              backdropFilter: 'blur(10px)',
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <img
              src="/images/greenshift-logo.png"
              alt="GreenShift"
              style={{
                height: '32px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                marginBottom: '16px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
              }}
            >
              Development & Capital Arm
              <br />
              VR Design Studio • Indoor Architecture
              <br />
              45-Day Delivery Protocol
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
