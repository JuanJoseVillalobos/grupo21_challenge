import './assets/css/App.css'

import Centro from './components/Centro'
import CajaCostado from './components/CajaCostado'
import NavBar from './components/NavBar'

import Empresas from './components/Empresas'
import Tarjeta from './components/Tarjeta'
import Profesiones from './components/Profesiones'
import Postulate from './components/Postulate'
import Contacto from './components/Contacto'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <div className="dashboard">
        <NavBar />
        <CajaCostado />

        <Routes>
          <Route path='/' element={<Centro />} />
          <Route path='/empresas' element={<Empresas />} />
          <Route path='/aspirantes' element={<Tarjeta />} />
          <Route path='/profesiones' element={<Profesiones />} />
          <Route path='/postulate' element={<Postulate />} />
          <Route path='/contacto' element={<Contacto />} />

        </Routes>

      </div>

    </>
  )
}

export default App
