import { Link, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import BackButton from '../components/BackButton.jsx'
import CategoryIcon from '../assets/CategoryIcon.jsx'
import BatikDivider from '../assets/BatikDivider.jsx'
import { getProvinsiBySlug, provinsiList } from '../data/budaya.js'
import NotFound from './NotFound.jsx'
import './ProvinsiDetail.css'

const KATEGORI_MAP = [
  { key: 'pakaianAdat', ikon: 'pakaian', label: 'Pakaian Adat', slug: 'pakaian-adat' },
  { key: 'bahasaDaerah', ikon: 'bahasa', label: 'Bahasa Daerah', slug: 'bahasa-daerah' },
  { key: 'rumahAdat', ikon: 'rumah', label: 'Rumah Adat', slug: 'rumah-adat' },
  { key: 'senilukis', ikon: 'lukisan', label: 'Seni Lukis & Motif', slug: 'seni-lukis' },
  { key: 'alatMusik', ikon: 'musik', label: 'Alat Musik Tradisional', slug: 'alat-musik' },
  { key: 'makananTradicional', ikon: 'makanan', label: 'Makanan Tradisional', slug: 'makanan-tradisional' }
]

export default function ProvinsiDetail() {
  const { slug } = useParams()
  const provinsi = getProvinsiBySlug(slug)

  if (!provinsi) return <NotFound />

  const idx = provinsiList.findIndex((p) => p.slug === slug)
  const sebelumnya = provinsiList[(idx - 1 + provinsiList.length) % provinsiList.length]
  const berikutnya = provinsiList[(idx + 1) % provinsiList.length]

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content provinsi-detail">
        <div className="provinsi-detail__top">
          <BackButton fallback="/provinsi" />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/provinsi">Provinsi</Link>
            <span>/</span>
            <span>{provinsi.nama}</span>
          </nav>
        </div>

        <header
          className="provinsi-hero"
          style={{ '--accent': provinsi.warna }}
        >
          <span className="chip">{provinsi.pulau}</span>
          <h1>{provinsi.nama}</h1>
          <p>{provinsi.ringkasan}</p>
        </header>

        <BatikDivider color={provinsi.warna} />

        <div className="budaya-grid">
          {KATEGORI_MAP.map((k) => {
            const data = provinsi[k.key]
            return (
              <article className="budaya-card" key={k.key}>
                <div className="budaya-card__head">
                  <span className="budaya-card__icon" style={{ color: provinsi.warna }}>
                    <CategoryIcon name={k.ikon} />
                  </span>
                  <div>
                    <p className="eyebrow">{k.label}</p>
                    <h2>{data.nama}</h2>
                  </div>
                </div>
                <p className="budaya-card__desc">{data.deskripsi}</p>
                <Link to={`/kategori/${k.slug}`} className="budaya-card__link">
                  Lihat {k.label} provinsi lain &rarr;
                </Link>
              </article>
            )
          })}
        </div>

        <nav className="provinsi-nav">
          <Link to={`/provinsi/${sebelumnya.slug}`} className="provinsi-nav__item">
            <span className="eyebrow">&larr; Sebelumnya</span>
            <strong>{sebelumnya.nama}</strong>
          </Link>
          <Link to={`/provinsi/${berikutnya.slug}`} className="provinsi-nav__item provinsi-nav__item--right">
            <span className="eyebrow">Berikutnya &rarr;</span>
            <strong>{berikutnya.nama}</strong>
          </Link>
        </nav>
      </main>
    </div>
  )
}
