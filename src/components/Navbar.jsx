import { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { kategoriList } from '../data/budaya.js'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Beranda', to: '/' },
  { label: 'Provinsi', to: '/provinsi' },
  { label: 'Kategori', to: '/kategori', hasMenu: true },
  { label: 'Tentang', to: '/tentang' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const listRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const [openMenu, setOpenMenu] = useState(false)
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleEnter(e) {
    const el = e.currentTarget
    const listEl = listRef.current
    if (!el || !listEl) return
    const elRect = el.getBoundingClientRect()
    const listRect = listEl.getBoundingClientRect()
    setIndicator({
      left: elRect.left - listRect.left,
      width: elRect.width,
      opacity: 1,
    })
  }

  function handleLeaveList() {
    setIndicator((prev) => ({ ...prev, opacity: 0 }))
    setOpenMenu(false)
  }

  function handleSearch(e) {
    e.preventDefault()
    const term = query.trim()
    if (!term) return
    navigate(`/provinsi?cari=${encodeURIComponent(term)}`)
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setMobileOpen(false)}>
          <span className="navbar__brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M20 6 L26 16 L20 26 L14 16 Z M12 22 Q20 30 28 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
          <span className="navbar__brand-text">
            <strong>Pusdatin</strong>
            <em>Budaya Nusantara</em>
          </span>
        </NavLink>

        <button
          className="navbar__burger"
          aria-label="Buka menu navigasi"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__nav ${mobileOpen ? 'is-open' : ''}`}
          aria-label="Navigasi utama"
        >
          <ul className="navbar__list" ref={listRef} onMouseLeave={handleLeaveList}>
            <li
              className="navbar__indicator"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
              }}
              aria-hidden="true"
            />
            {NAV_ITEMS.map((item) => (
              <li
                key={item.to}
                className="navbar__item"
                onMouseEnter={(e) => {
                  handleEnter(e)
                  if (item.hasMenu) setOpenMenu(true)
                  else setOpenMenu(false)
                }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'is-active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>

                {item.hasMenu && (
                  <div className={`navbar__dropdown ${openMenu ? 'is-visible' : ''}`}>
                    <div className="navbar__dropdown-grid">
                      {kategoriList.map((k) => (
                        <NavLink
                          key={k.slug}
                          to={`/kategori/${k.slug}`}
                          className="navbar__dropdown-item"
                          onClick={() => {
                            setOpenMenu(false)
                            setMobileOpen(false)
                          }}
                        >
                          <span className="navbar__dropdown-name">{k.nama}</span>
                          <span className="navbar__dropdown-desc">{k.deskripsi}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <form className="navbar__search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              placeholder="Cari provinsi..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Cari provinsi"
            />
            <button type="submit" aria-label="Cari">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.6" />
                <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </nav>
      </div>
    </header>
  )
}
