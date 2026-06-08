export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Office columns */}
      <div
        className="r-footer"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'clamp(60px, 8vh, 100px) clamp(24px, 6vw, 100px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'rgba(0,0,0,0.4)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Location
          </span>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#111', marginBottom: '8px' }}>
            Jakarta, Indonesia
          </p>
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(0,0,0,0.5)', lineHeight: 1.6 }}>
            The industrial heart of GreenShift
          </p>
        </div>

        <div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'rgba(0,0,0,0.4)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Contact
          </span>
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(0,0,0,0.6)', marginBottom: '4px' }}>
            www.greenshift.id
          </p>
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(0,0,0,0.6)' }}>
            +62 877 8601 0290
          </p>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 100px) clamp(40px, 6vh, 80px)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(60px, 14vw, 200px)',
            fontWeight: 500,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: '#111111',
            opacity: 0.08,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          GREENSHIFT
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '24px clamp(24px, 6vw, 100px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <img src="/images/greenshift-logo.png" alt="GreenShift" style={{ height: '20px', width: 'auto' }} />
        <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.05em' }}>
          © 2026 GREENSHIFT BY FJÄLL GROUP | ALL RIGHTS RESERVED.
        </span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href="#"
            style={{
              fontSize: '12px',
              color: 'rgba(0,0,0,0.4)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0,0,0,0.4)')}
          >
            Privacy
          </a>
          <a
            href="#"
            style={{
              fontSize: '12px',
              color: 'rgba(0,0,0,0.4)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0,0,0,0.4)')}
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
