import { useState } from 'react'
import headerProfileImage from '../../assets/images/projects/profilePic/283e1529-855e-4cb2-80da-f773d0be93dc.jpg'

function Header({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="site-brand" href="#hero" onClick={handleLinkClick}>
          {headerProfileImage ? (
            <img
              className="site-brand-avatar"
              src={headerProfileImage}
              alt="Yakir Kurs profile"
            />
          ) : (
            <span className="site-brand-avatar site-brand-avatar-fallback" aria-hidden="true">
              YK
            </span>
          )}
          <span>Yakir Kurs</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`.trim()}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`.trim()}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
