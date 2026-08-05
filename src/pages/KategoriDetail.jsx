import { Link, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import BackButton from '../components/BackButton.jsx'
import CategoryIcon from '../assets/CategoryIcon.jsx'
import { getKategoriBySlug, provinsiList } from '../data/budaya.js'
import NotFound from './NotFound.jsx'
import './KategoriDetail.css'

const FIELD_MAP = {
  'pakaian-adat': 'pakaianAdat',
  'bahasa-daerah': 'bahasaDaerah',
  'rumah-adat': 'rumahAdat',
  'seni-lukis': 'senilukis',
  'alat-musik': 'alatMusik',
  'makanan-tradisional': 'makananTradicional'
}

export default function KategoriDetail() {
  const { slug } = useParams()
  const kategori = getKategoriBySlug(slug)
  const field = FIELD_MAP[slug]

  if (!kategori || !field) return <NotFound />

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <div className="provinsi-detail__top">
          <BackButton fallback="/kategori" />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/kategori">Kategori</Link>
            <span>/</span>
            <span>{kategori.nama}</span>
          </nav>
        </div>

        <header className="kategori-hero">
          <span className="kategori-hero__icon">
            <CategoryIcon name={kategori.ikon} size={34} />
          </span>
          <div>
            <p className="eyebrow">Kategori Budaya</p>
            <h1>{kategori.nama}</h1>
            <p>{kategori.deskripsi}</p>
          </div>
        </header>

        <div className="kategori-entries">
          {provinsiList.map((p) => {
            const data = p[field]
            return (
              <article className="kategori-entry" key={p.slug} style={{ '--accent': p.warna }}>
                <div className="kategori-entry__head">
                  <span className="kategori-entry__dot" />
                  <div>
                    <Link to={`/provinsi/${p.slug}`} className="kategori-entry__provinsi">
                      {p.nama}
                    </Link>
                    <h3>{data.nama}</h3>
                  </div>
                </div>
                <p>{data.deskripsi}</p>
              </article>
            )
          })}
        </div>
      </main>
    </div>
  )
}
