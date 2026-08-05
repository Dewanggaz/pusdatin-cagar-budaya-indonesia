import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import { provinsiList } from '../data/budaya.js'
import './ProvinsiList.css'

const PULAU_LIST = ['Semua', ...new Set(provinsiList.map((p) => p.pulau))]

export default function ProvinsiList() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('cari') || '')
  const [pulau, setPulau] = useState('Semua')

  const hasil = useMemo(() => {
    return provinsiList.filter((p) => {
      const cocokPulau = pulau === 'Semua' || p.pulau === pulau
      const cocokCari =
        !query.trim() ||
        p.nama.toLowerCase().includes(query.trim().toLowerCase())
      return cocokPulau && cocokCari
    })
  }, [query, pulau])

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content provinsi-list">
        <div className="page-head">
          <div>
            <p className="eyebrow">Direktori Wilayah</p>
            <h1>Daftar Provinsi</h1>
            <p className="page-head__desc">
              Telusuri data budaya dari {provinsiList.length} provinsi yang telah terdata dalam sistem Pusdatin.
            </p>
          </div>
        </div>

        <div className="filter-bar">
          <input
            type="search"
            placeholder="Cari nama provinsi..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cari provinsi"
          />
          <div className="filter-bar__pills">
            {PULAU_LIST.map((p) => (
              <button
                key={p}
                type="button"
                className={`filter-pill ${pulau === p ? 'is-active' : ''}`}
                onClick={() => setPulau(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {hasil.length === 0 ? (
          <div className="empty-state">
            <p>Tidak ada provinsi yang cocok dengan pencarian "{query}".</p>
            <button className="btn btn--ghost" onClick={() => { setQuery(''); setPulau('Semua') }}>
              Reset pencarian
            </button>
          </div>
        ) : (
          <div className="provinsi-list__grid">
            {hasil.map((p) => (
              <Link to={`/provinsi/${p.slug}`} className="provinsi-row" key={p.slug}>
                <span className="provinsi-row__dot" style={{ background: p.warna }} aria-hidden="true" />
                <div className="provinsi-row__body">
                  <div className="provinsi-row__top">
                    <h3>{p.nama}</h3>
                    <span className="chip">{p.pulau}</span>
                  </div>
                  <p>{p.ringkasan}</p>
                </div>
                <span className="provinsi-row__arrow" aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
