import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current.children, {
          y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
        })
      }
      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 30, opacity: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%', once: true },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#0a0a0a',
        padding: 'clamp(80px, 14vh, 180px) clamp(24px, 6vw, 100px)',
      }}
    >
      <div
        className="r-split"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div ref={leftRef}>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            What will you
            <br />
            build today?
          </h2>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            GREENSHIFT • Engage Concierge
          </p>
        </div>

        {/* Right - Form */}
        {submitted ? (
          <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#ffffff', marginBottom: '12px' }}>
              Message received.
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
              Our team will be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
              Initiate a project or send us a note.
            </p>

            <InputField label="Full name" required />
            <InputField label="Email" type="email" required />
            <InputField label="Company" />

            <div>
              <label
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Interest
              </label>
              <select
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  fontSize: '15px',
                  padding: '10px 0',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option style={{ backgroundColor: '#0a0a0a' }}>General Inquiry</option>
                <option style={{ backgroundColor: '#0a0a0a' }}>Partnership</option>
                <option style={{ backgroundColor: '#0a0a0a' }}>Investment</option>
                <option style={{ backgroundColor: '#0a0a0a' }}>Press & Media</option>
                <option style={{ backgroundColor: '#0a0a0a' }}>Careers</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell us about your project, timeline, and goals..."
                rows={4}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  fontSize: '15px',
                  padding: '10px 0',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '16px 32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff'
                e.currentTarget.style.color = '#0a0a0a'
                e.currentTarget.style.borderColor = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function InputField({ label, type = 'text', required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label
        style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.4)',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '8px',
        }}
      >
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          color: '#ffffff',
          fontSize: '15px',
          padding: '10px 0',
          outline: 'none',
          fontFamily: 'inherit',
        }}
      />
    </div>
  )
}
