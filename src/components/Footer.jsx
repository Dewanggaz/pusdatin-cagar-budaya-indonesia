import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <strong>Pusdatin Budaya Nusantara</strong>
          <p>Pusat Data dan Informasi Kebudayaan &mdash; merawat ingatan, merangkai identitas.</p>
        </div>
        <div className="footer__cols">
          <div>
            <p className="eyebrow">Portal</p>
            <a href="/">Beranda</a>
            <a href="/provinsi">Provinsi</a>
            <a href="/kategori">Kategori Budaya</a>
          </div>
          <div>
            <p className="eyebrow">Kategori</p>
            <a href="/kategori/pakaian-adat">Pakaian Adat</a>
            <a href="/kategori/rumah-adat">Rumah Adat</a>
            <a href="/kategori/alat-musik">Alat Musik</a>
          </div>
          <div>
            <p className="eyebrow">Instansi</p>
            <a href="https://dapobud.kemenbud.go.id/">Tentang Pusdatin</a>
            <span className="footer__muted">dapobud@kemenbud.go.id</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Pusdatin Budaya Nusantara. Disusun untuk keperluan edukasi.</span>
      </div>
    </footer>
  )
}
