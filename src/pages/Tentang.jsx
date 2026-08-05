import BackButton from '../components/BackButton.jsx'
import BatikDivider from '../assets/BatikDivider.jsx'
import { kategoriList, provinsiList } from '../data/budaya.js'
import './Tentang.css'

export default function Tentang() {
  return (
    <main className="container tentang">
      <BackButton fallback="/" />

      <header className="tentang__hero">
        <p className="eyebrow">Profil Instansi</p>
        <h1>Tentang Pusdatin Budaya Nusantara</h1>
        <p>
          Pusat Data dan Informasi (Pusdatin) Budaya Nusantara bertugas menghimpun,
          mengelola, dan menyebarluaskan data kebudayaan daerah agar dapat diakses
          secara terbuka oleh masyarakat, peneliti, pendidik, dan pelaku industri kreatif.
        </p>
      </header>

      <BatikDivider />

      <section className="tentang__grid">
        <div className="tentang__card">
          <h2>Visi</h2>
          <p>
            Menjadi rujukan data budaya Indonesia yang akurat, mudah diakses, dan
            terus diperbarui sebagai upaya pelestarian identitas bangsa.
          </p>
        </div>
        <div className="tentang__card">
          <h2>Misi</h2>
          <p>
            Mendokumentasikan pakaian adat, bahasa daerah, rumah adat, seni lukis,
            dan alat musik tradisional dari seluruh provinsi, serta menyajikannya
            dalam format yang ramah untuk pembelajaran publik.
          </p>
        </div>
        <div className="tentang__card">
          <h2>Cakupan Data</h2>
          <p>
            Saat ini portal memuat {provinsiList.length} provinsi dengan {kategoriList.length}{' '}
            kategori budaya, dan akan terus dilengkapi secara berkala bersama mitra
            dinas kebudayaan daerah.
          </p>
        </div>
      </section>

      <section className="tentang__contact">
        <h2>Kontak</h2>
        <p>Pusat Data dan Informasi Budaya Nusantara</p>
        <p>Email: dapobud@kemenbud.go.id &middot; Telepon: (021) 555-0182</p>
        <a href="https://www.google.com/maps/place/Pusat+Data+dan+Teknologi+Informasi+Kementerian+Kebudayaan/@-6.3270716,106.7487723,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69ef005f4e8ab1:0x5152c81758623216!8m2!3d-6.3270716!4d106.7487723!16s%2Fg%2F11ym2szx7c!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D">Alamat: Grha Kebudayaan, Jl. RE Martadinata KM. 15.5, Cipayung, Kec. Ciputat, Kota Tangerang Selatan, Banten 15411</a>
      </section>
    </main>
  )
}
