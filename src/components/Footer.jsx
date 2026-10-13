import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/science', label: 'Science' },
  { to: '/platforms', label: 'Platforms' },
  { to: '/impact', label: 'Impact' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <Logo inverted compact />
        <nav className="footer-nav" aria-label="Footer">
          {links.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-meta">
          <a className="social" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M3.6 2.3C2.7 2.3 2 3 2 3.9s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.7-1.6-1.6-1.6ZM2.3 6.2h2.6V14H2.3V6.2Zm4.2 0h2.5v1.1h.04c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.74 3.14 4V14h-2.6V10.3c0-.88-.02-2-1.23-2s-1.42.96-1.42 1.94V14H6.5V6.2Z" />
            </svg>
          </a>
          <a className="social" href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M15.2 4.6a2 2 0 0 0-1.4-1.4C12.6 3 8 3 8 3s-4.6 0-5.8.2A2 2 0 0 0 .8 4.6 21 21 0 0 0 .6 8a21 21 0 0 0 .2 3.4 2 2 0 0 0 1.4 1.4C3.4 13 8 13 8 13s4.6 0 5.8-.2a2 2 0 0 0 1.4-1.4A21 21 0 0 0 15.4 8a21 21 0 0 0-.2-3.4ZM6.6 10.4V5.6L10.6 8l-4 2.4Z" />
            </svg>
          </a>
          <span className="footer-note">Design concept · Illustrative content</span>
        </div>
      </div>
    </footer>
  )
}
