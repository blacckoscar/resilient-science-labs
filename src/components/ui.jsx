import { Link } from 'react-router-dom'

export function Eyebrow({ children, light = false, rule = true }) {
  return (
    <p className={`eyebrow ${light ? 'eyebrow--light' : ''} ${rule ? 'eyebrow--rule' : ''}`}>
      {children}
    </p>
  )
}

export function Button({ to, href, children, variant = 'lime', className = '', onClick, type = 'button' }) {
  const cls = `btn btn--${variant} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CellField({ className = '' }) {
  const cells = [
    [78, 62, 46], [148, 48, 40], [208, 86, 48], [52, 132, 42],
    [126, 124, 50], [196, 154, 38], [86, 192, 44], [164, 204, 46],
    [232, 136, 36], [248, 198, 40], [40, 198, 34], [188, 58, 28],
  ]
  return (
    <svg className={`cell-field ${className}`} viewBox="0 0 280 250" aria-hidden="true">
      <defs>
        <radialGradient id="cellFill" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#d8efc4" />
          <stop offset="70%" stopColor="#8fc56a" />
          <stop offset="100%" stopColor="#5a9a4a" />
        </radialGradient>
      </defs>
      {cells.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="url(#cellFill)" fillOpacity="0.55" stroke="#7eb86a" strokeWidth="1.1" />
          <circle cx={x} cy={y} r={r * 0.68} fill="none" stroke="#c6e6b0" strokeWidth="0.85" />
        </g>
      ))}
    </svg>
  )
}

export function Network({ className = '', tone = 'dark' }) {
  const nodes = [
    [28, 92, 'lime'], [86, 38, 'dark'], [154, 58, 'teal'],
    [210, 28, 'lime'], [232, 96, 'dark'], [176, 148, 'teal'],
    [96, 156, 'dark'], [48, 148, 'lime'], [132, 100, 'lime'],
  ]
  const links = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [0, 8], [1, 8], [2, 8], [4, 8], [5, 8], [6, 8],
  ]
  const fill = { lime: '#A8D85F', dark: tone === 'light' ? '#E8F0E4' : '#082219', teal: '#547E8D' }
  const stroke = tone === 'light' ? 'rgba(255,255,255,0.45)' : 'rgba(18,61,50,0.35)'
  return (
    <svg className={`network ${className}`} viewBox="0 0 260 180" aria-hidden="true">
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={stroke} strokeWidth="1.1" />
      ))}
      {nodes.map(([x, y, c], i) => (
        <circle key={i} cx={x} cy={y} r={i === 8 ? 3.2 : 4.4} fill={fill[c]} />
      ))}
    </svg>
  )
}

export function Orbitals({ className = '', light = false }) {
  const stroke = light ? 'rgba(255,255,255,0.42)' : 'rgba(18,61,50,0.28)'
  return (
    <svg className={`orbitals ${className}`} viewBox="0 0 720 560" fill="none" aria-hidden="true">
      <ellipse cx="340" cy="270" rx="250" ry="210" stroke={stroke} strokeWidth="1.1" />
      <ellipse cx="400" cy="250" rx="210" ry="190" stroke={stroke} strokeWidth="1.1" />
      <ellipse cx="360" cy="290" rx="280" ry="160" stroke={stroke} strokeWidth="1" />
      <circle cx="118" cy="210" r="4" fill="#A8D85F" />
      <circle cx="590" cy="118" r="4" fill="#A8D85F" />
      <circle cx="640" cy="300" r="4.5" fill="#547E8D" />
      <circle cx="520" cy="470" r="3.5" fill="#082219" />
      <circle cx="210" cy="460" r="4" fill="#A8D85F" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" aria-hidden="true">
      <circle cx="21" cy="21" r="21" fill="#ffffff" />
      <path d="M17.2 14.2v13.6L29 21 17.2 14.2Z" fill="#082219" />
    </svg>
  )
}

export function VideoModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Introduction">
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <Eyebrow>A short introduction</Eyebrow>
        <h2>The work, in one loop.</h2>
        <p>
          Evidence. Prediction. Experiment. Learning. Resilient Science Labs exists to keep that cycle moving — so
          biological intelligence can keep pace with a changing world.
        </p>
        <Button to="/science" variant="forest" onClick={onClose}>
          Read the science <Arrow />
        </Button>
      </div>
    </div>
  )
}
