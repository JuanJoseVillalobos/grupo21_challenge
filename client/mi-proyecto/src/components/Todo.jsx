import '../assets/css/Todo.css'
import { Routes, Route } from 'react-router-dom'

import CajaCostado from './CajaCostado'
import NavBar from './NavBar'
import Centro from './Centro'

import Empresas from './Empresas'
import PropsAspirantes from './PropsAspirantes'
import Profesiones from './Profesiones'
import Postulate from './Postulate'
import PropsContacto from './PropsContacto'

function Todo() {
  return (
    <>

      <div className="dashboard" >
        <NavBar />
        <CajaCostado />

        <Routes>
          <Route path='/' element={<Centro />} />
          <Route path='/empresas' element={<Empresas />} />
          <Route path='/aspirantes' element={<PropsAspirantes/>} />
          <Route path='/profesiones' element={<Profesiones />} />
          <Route path='/postulate' element={<Postulate />} />
          <Route path='/contacto' element={<PropsContacto />} />

        </Routes>
      </div>



    </>
  )
}

export default Todo