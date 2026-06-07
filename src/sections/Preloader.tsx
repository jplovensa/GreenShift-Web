import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const daysLabelRef = useRef<HTMLSpanElement>(null)
  const questionRef = useRef<HTMLParagraphElement>(null)
  const byTextRef = useRef<HTMLDivElement>(null)
  const fjallRef = useRef<HTMLImageElement>(null)
  const greenshiftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out entire preloader
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => setDone(true),
        })
      },
    })

    // Phase 1: "540" appears
    tl.set(numRef.current, { innerText: '540' })
    tl.fromTo(
      numRef.current,
      { opacity: 0, scale: 0.5, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )

    // Phase 2: Numbers scramble down 540 → 45
    tl.to(numRef.current, {
      duration: 1.8,
      ease: 'power2.inOut',
      onStart: () => {
        const obj = { val: 540 }
        gsap.to(obj, {
          val: 45,
          duration: 1.8,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (numRef.current) numRef.current.innerText = String(Math.round(obj.val))
          },
        })
      },
    })

    // Phase 3: "DAYS" label appears
    tl.fromTo(
      daysLabelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )

    // Hold for a beat
    tl.to({}, { duration: 0.6 })

    // Phase 4: Fade out numbers, fade in question
    tl.to([numRef.current, daysLabelRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
    })

    tl.fromTo(
      questionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    // Hold the question
    tl.to({}, { duration: 1.5 })

    // Phase 5: Fade out question
    tl.to(questionRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: 'power2.in',
    })

    // Phase 6: GREENSHIFT logo fades in
    tl.fromTo(
      greenshiftRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    )

    // Phase 7: "BY" text
    tl.fromTo(
      byTextRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    )

    // Phase 8: Fjäll Group logo
    tl.fromTo(
      fjallRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    )

    // Hold on brand lockup
    tl.to({}, { duration: 1.2 })

    return () => { tl.kill() }
  }, [])

  if (done) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      {/* 540 → 45 countdown */}
      <span
        ref={numRef}
        style={{
          fontSize: 'clamp(80px, 18vw, 200px)',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        540
      </span>

      {/* DAYS label */}
      <span
        ref={daysLabelRef}
        style={{
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.3em',
          color: '#3D6B6B',
          textTransform: 'uppercase',
          opacity: 0,
        }}
      >
        DAYS
      </span>

      {/* Thought-provoking question */}
      <p
        ref={questionRef}
        style={{
          position: 'absolute',
          fontSize: 'clamp(22px, 3.5vw, 44px)',
          fontWeight: 400,
          lineHeight: 1.3,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '700px',
          padding: '0 24px',
          opacity: 0,
        }}
      >
        What if your home
        <br />
        was ready in{' '}
        <span style={{ color: '#3D6B6B' }}>45 days</span>?
      </p>

      {/* Brand lockup: GREENSHIFT BY FJÄLL GROUP */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* GreenShift */}
        <div ref={greenshiftRef} style={{ opacity: 0 }}>
          <img
            src="/images/greenshift-logo.png"
            alt="GreenShift"
            style={{
              height: 'clamp(28px, 4vw, 44px)',
              width: 'auto',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>

        {/* BY */}
        <div
          ref={byTextRef}
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            opacity: 0,
          }}
        >
          BY
        </div>

        {/* Fjäll Group logo */}
        <img
          ref={fjallRef}
          src="/images/fjall-group-logo.png"
          alt="Fjäll Group"
          style={{
            height: 'clamp(40px, 6vw, 72px)',
            width: 'auto',
            opacity: 0,
          }}
        />
      </div>
    </div>
  )
}
