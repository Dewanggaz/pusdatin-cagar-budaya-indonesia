import { NavLink } from 'react-router-dom'
import { kategoriList, provinsiList } from '../data/budaya.js'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__block">
        <p className="eyebrow">Jelajah Kategori</p>
        <ul className="sidebar__list">
          {kategoriList.map((k) => (
            <li key={k.slug}>
              <NavLink
                to={`/kategori/${k.slug}`}
                className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
              >
                {k.nama}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__block">
        <p className="eyebrow">Provinsi Terdata</p>
        <ul className="sidebar__list sidebar__list--scroll">
          {provinsiList.map((p) => (
            <li key={p.slug}>
              <NavLink
                to={`/provinsi/${p.slug}`}
                className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
              >
                <span className="sidebar__dot" style={{ background: p.warna }} aria-hidden="true" />
                {p.nama}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__note">
        <p className="eyebrow">Tentang Data</p>
        <p className="sidebar__note-text">
          Materi disusun oleh Pusat Data dan Informasi (Pusdatin) sebagai rangkuman
          edukatif kebudayaan daerah. Data terus dilengkapi secara berkala.
        </p>
      </div>
    </aside>
  )
}
