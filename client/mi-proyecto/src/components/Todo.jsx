import '../assets/css/Todo.css'

import Centro from './Centro'
import CajaCostado from './CajaCostado'
import NavBar from './NavBar'

import Empresas from './Empresas'
import Tarjeta from './Tarjeta'
import Profesiones from './Profesiones'
import Postulate from './Postulate'
import Contacto from './Contacto'

import { Routes, Route } from 'react-router-dom'

function Todo() {
  return (
    <>

      <div className="dashboard" >
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

export default Todo