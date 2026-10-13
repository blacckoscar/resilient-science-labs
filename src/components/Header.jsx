import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/science', label: 'Science' },
  { to: '/platforms', label: 'Platforms' },
  { to: '/impact', label: 'Impact' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Logo />
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--touch">
            Get in touch
          </Link>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="btn btn--touch header-cta">
            Get in touch
          </Link>
          <button
            className={`menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
