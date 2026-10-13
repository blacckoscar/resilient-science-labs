import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/science', label: 'Science' },
  { to: '/platforms', label: 'Platforms' },
  { to: '/impact', label: 'Impact' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
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
        </nav>
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
    </header>
  )
}
