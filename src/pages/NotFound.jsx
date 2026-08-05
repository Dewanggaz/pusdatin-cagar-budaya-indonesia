import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton.jsx'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="container not-found">
      <BackButton fallback="/" />
      <div className="not-found__body">
        <span className="not-found__code">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p>Data yang Anda cari mungkin belum terdata atau alamatnya berubah.</p>
        <Link to="/" className="btn btn--primary">Kembali ke Beranda</Link>
      </div>
    </main>
  )
}
