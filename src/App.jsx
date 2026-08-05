import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './components/Common.css'

import Home from './pages/Home.jsx'
import ProvinsiList from './pages/ProvinsiList.jsx'
import ProvinsiDetail from './pages/ProvinsiDetail.jsx'
import KategoriList from './pages/KategoriList.jsx'
import KategoriDetail from './pages/KategoriDetail.jsx'
import Tentang from './pages/Tentang.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provinsi" element={<ProvinsiList />} />
        <Route path="/provinsi/:slug" element={<ProvinsiDetail />} />
        <Route path="/kategori" element={<KategoriList />} />
        <Route path="/kategori/:slug" element={<KategoriDetail />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
