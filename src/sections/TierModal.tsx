import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { X } from 'lucide-react'

interface TierData {
  label: string
  title: string
  description: string
  video: string
  structural: string
  projectRange: string
  targetMarket: string
}

const tierDetails: Record<string, TierData> = {
  'Mid-Range': {
    label: 'MID-RANGE BOUTIQUE',
    title: 'Commercial',
    description:
      'The equilibrium of architectural elegance and absolute modular efficiency. The Commercial tier allows for higher aesthetic customisation while maintaining the 45-day deployment speed.',
    video: '/videos/tier-midrange.mp4',
    structural:
      'Enhanced thermal isolation via GX-100 panels, customisable facade treatments, and capabilities for multi-storey structural stacking.',
    projectRange: '50 - 500 Units',
    targetMarket: 'Boutique hotels, mid-tier developers, and eco-tourism resorts.',
  },
  Luxury: {
    label: 'LUXURY REAL ESTATE',
    title: 'Premium',
    description:
      'Uncompromising luxury built with precision. The Premium tier utilises expansive floorplans and high-end finishes, completely disrupting how luxury real estate is delivered.',
    video: '/videos/tier-luxury.mp4',
    structural:
      'Bespoke spatial engineering, premium material integration (glass, natural stone textures), and smart-home embedded grids.',
    projectRange: '10 - 100 Units',
    targetMarket: 'Luxury developers, private estates, and high-yield rental portfolios.',
  },
  'Avant-Garde': {
    label: 'AVANT-GARDE VISIONARY',
    title: 'Bespoke',
    description:
      'Pushing the boundaries of the modular format. The Bespoke tier involves complex hybrid engineering for visionary, limit-testing structural concepts.',
    video: '/videos/tier-avantgarde.mp4',
    structural:
      'Parametric hybrid design, radical material science applications, and limit-testing spans not possible with traditional methods.',
    projectRange: '1 - 10 Signature Builds',
    targetMarket: 'Visionary architects, landmark flagship developments, and ultra-high-net-worth clients.',
  },
  'Adaptive Reuse': {
    label: 'URBAN ADAPTIVE REUSE',
    title: 'Retrofit',
    description:
      'Transforming existing commercial structures into high-performance assets. Zero-wet-work modular inserts allow for rapid deployment inside operational buildings.',
    video: '/videos/tier-adaptive.mp4',
    structural:
      'Acoustic EPS isolation, lightweight cast acrylics, and floating modular floors designed for rapid, zero-damage integration.',
    projectRange: '500 - 5,000+ sqm',
    targetMarket: 'Commercial landlords, government innovation hubs, and adaptive reuse developers.',
  },
}

interface TierModalProps {
  tier: string | null
  onClose: () => void
}

export default function TierModal({ tier, onClose }: TierModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Track window size for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!tier) return
    document.body.style.overflow = 'hidden'

    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
    )

    return () => {
      document.body.style.overflow = ''
    }
  }, [tier])

  const handleClose = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.97,
      duration: 0.25,
      ease: 'power2.in',
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      delay: 0.1,
      ease: 'power2.in',
      onComplete: onClose,
    })
  }

  if (!tier || !tierDetails[tier]) return null

  const data = tierDetails[tier]

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '0' : '20px',
        opacity: 0,
      }}
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          maxWidth: isMobile ? '100%' : '960px',
          width: '100%',
          maxHeight: isMobile ? '100vh' : '90vh',
          borderRadius: isMobile ? '0' : '12px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gridTemplateRows: isMobile ? 'auto 1fr' : '1fr',
          position: 'relative',
          opacity: 0,
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <X size={18} color="#111" />
        </button>

        {/* Video Section */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '40vh' : '100%',
          minHeight: isMobile ? '250px' : '400px',
          maxHeight: isMobile ? '40vh' : 'none',
          overflow: 'hidden'
        }}>
          <video
            ref={videoRef}
            src={data.video}
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
          />
        </div>

        {/* Content Section */}
        <div
          style={{
            padding: isMobile ? '24px 20px' : 'clamp(32px, 4vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center',
            overflowY: 'auto',
            maxHeight: isMobile ? '60vh' : 'none',
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: '#0A2E2E',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            {data.label}
          </span>

          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111111',
              marginBottom: '20px',
            }}
          >
            {data.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(17,17,17,0.6)',
              marginBottom: '32px',
            }}
          >
            {data.description}
          </p>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(0,0,0,0.08)',
              marginBottom: '32px',
            }}
          />

          {/* Structural Specifics */}
          <span
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: 'rgba(17,17,17,0.4)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            STRUCTURAL SPECIFICS
          </span>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(17,17,17,0.65)',
              marginBottom: '32px',
            }}
          >
            {data.structural}
          </p>

          {/* Project Range & Target Market */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: 'rgba(17,17,17,0.4)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                PROJECT RANGE
              </span>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#111111',
                }}
              >
                {data.projectRange}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: 'rgba(17,17,17,0.4)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                TARGET MARKET
              </span>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#111111',
                  lineHeight: 1.5,
                }}
              >
                {data.targetMarket}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
