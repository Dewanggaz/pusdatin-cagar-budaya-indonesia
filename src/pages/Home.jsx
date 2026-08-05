import { Link } from 'react-router-dom'
import { kategoriList, provinsiList } from '../data/budaya.js'
import CategoryIcon from '../assets/CategoryIcon.jsx'
import BatikDivider from '../assets/BatikDivider.jsx'
import './Home.css'

export default function Home() {
  const sorotan = provinsiList.slice(0, 6)

  return (
    <main>
      <section className="hero">
        <div className="hero__inner">
          <p className="eyebrow">Pusat Data dan Informasi &middot; Kebudayaan Indonesia</p>
          <h1 className="hero__title">
            Menghimpun Warisan Budaya <span>38 Provinsi</span> Nusantara
          </h1>
          <p className="hero__desc">
            Pusdatin Budaya Nusantara merangkum data pakaian adat, bahasa daerah,
            rumah adat, seni lukis, dan alat musik tradisional dari seluruh penjuru
            Indonesia dalam satu portal yang mudah dijelajahi.
          </p>
          <div className="hero__actions">
            <Link to="/provinsi" className="btn btn--primary">Jelajahi Provinsi</Link>
            <Link to="/kategori" className="btn btn--ghost">Lihat Kategori Budaya</Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>{provinsiList.length}+</strong>
              <span>Provinsi terdata</span>
            </div>
            <div>
              <strong>{kategoriList.length}</strong>
              <span>Kategori budaya</span>
            </div>
            <div>
              <strong>{provinsiList.length * kategoriList.length}</strong>
              <span>Entri budaya</span>
            </div>
          </div>
        </div>
        <div className="hero__motif" aria-hidden="true">
          <svg viewBox="0 0 320 320" width="100%" height="100%">
            <g fill="none" stroke="#e0b45c" strokeWidth="1.2" opacity="0.55">
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={i}
                  d={`M${-20 + i * 40} 340 Q ${20 + i * 40} 160 ${-20 + i * 40} -20`}
                />
              ))}
            </g>
            <circle cx="160" cy="160" r="70" fill="none" stroke="#a6472f" strokeWidth="1.4" opacity="0.6" />
            <circle cx="160" cy="160" r="46" fill="none" stroke="#c08a28" strokeWidth="1.4" opacity="0.8" />
          </svg>
        </div>
      </section>

      <div className="container">
        <BatikDivider />
      </div>

      <section className="container section">
        <div className="section__head">
          <p className="eyebrow">Kategori Data</p>
          <h2>Lima Ragam Kekayaan Budaya</h2>
        </div>
        <div className="kategori-grid">
          {kategoriList.map((k) => (
            <Link to={`/kategori/${k.slug}`} className="kategori-card" key={k.slug}>
              <span className="kategori-card__icon">
                <CategoryIcon name={k.ikon} />
              </span>
              <h3>{k.nama}</h3>
              <p>{k.deskripsi}</p>
              <span className="kategori-card__more">Lihat data &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="container">
        <BatikDivider color="var(--color-terracotta)" />
      </div>

      <section className="container section">
        <div className="section__head">
          <p className="eyebrow">Sorotan Wilayah</p>
          <h2>Provinsi Pilihan</h2>
          <Link to="/provinsi" className="section__head-link">Lihat semua provinsi &rarr;</Link>
        </div>
        <div className="provinsi-grid">
          {sorotan.map((p) => (
            <Link to={`/provinsi/${p.slug}`} className="provinsi-card" key={p.slug}>
              <div className="provinsi-card__band" style={{ background: p.warna }} />
              <div className="provinsi-card__body">
                <span className="chip">{p.pulau}</span>
                <h3>{p.nama}</h3>
                <p>{p.ringkasan}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
