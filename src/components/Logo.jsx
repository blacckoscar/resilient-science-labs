import { Link } from 'react-router-dom'

export function Mark({ size = 40, className = '' }) {
  return (
    <svg
      className={`mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.55" strokeLinecap="round">
        <line x1="15.5" y1="11.5" x2="22.5" y2="21.5" />
        <line x1="33" y1="10.5" x2="22.5" y2="21.5" />
        <line x1="9.5" y1="25.5" x2="22.5" y2="21.5" />
        <line x1="22.5" y1="21.5" x2="17" y2="37" />
        <line x1="22.5" y1="21.5" x2="30" y2="35" />
        <line x1="33" y1="10.5" x2="38.5" y2="27.5" />
        <line x1="30" y1="35" x2="38.5" y2="27.5" />
        <line x1="9.5" y1="25.5" x2="17" y2="37" />
      </g>
      <circle cx="15.5" cy="11.5" r="4.15" fill="#A8D85F" />
      <circle cx="33" cy="10.5" r="4.15" fill="#123D32" />
      <circle cx="9.5" cy="25.5" r="4.15" fill="#547E8D" />
      <circle cx="17" cy="37" r="4.15" fill="#A8D85F" />
      <circle cx="30" cy="35" r="4.15" fill="#123D32" />
      <circle cx="38.5" cy="27.5" r="4.15" fill="#547E8D" />
    </svg>
  )
}

export default function Logo({ inverted = false, compact = false }) {
  return (
    <Link to="/" className={`brand ${inverted ? 'brand--invert' : ''} ${compact ? 'brand--compact' : ''}`}>
      <Mark size={compact ? 34 : 40} />
      <span className="brand__text">
        <span className="brand__name">Resilient</span>
        <span className="brand__sub">Science Labs</span>
      </span>
    </Link>
  )
}
