import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import CategoryIcon from '../assets/CategoryIcon.jsx'
import { kategoriList } from '../data/budaya.js'
import './KategoriList.css'

export default function KategoriList() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <div className="page-head">
          <p className="eyebrow">Ragam Data</p>
          <h1>Kategori Budaya</h1>
          <p className="page-head__desc">
            Lima kategori utama yang menjadi fokus pendataan Pusdatin Budaya Nusantara
            di setiap provinsi.
          </p>
        </div>

        <div className="kategori-list">
          {kategoriList.map((k, i) => (
            <Link to={`/kategori/${k.slug}`} className="kategori-list__item" key={k.slug}>
              <span className="kategori-list__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="kategori-list__icon">
                <CategoryIcon name={k.ikon} size={30} />
              </span>
              <span className="kategori-list__text">
                <h2>{k.nama}</h2>
                <p>{k.deskripsi}</p>
              </span>
              <span className="kategori-list__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
