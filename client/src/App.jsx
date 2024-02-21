import { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Main/Home'
import Empresa from './components/Empresas/Empresa'

import Profesiones from './components/Profesiones/Profesiones'
import Aspirantes from './components/Aspirantes/Aspirantes'
import Postularse from './components/Postularse/Postularse'
import Contacto from './components/Contacto/Contacto'
import { Routes, Route } from "react-router-dom"

import { listarAspirantes, listarProfesiones } from './api/api'

import './App.css'

function App() {
  // const [data, setData] = useState()
  // const [profesiones, setProfesiones] = useState()
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await listarAspirantes()
  //       const responseProfesion = await listarProfesiones()
  //       setProfesiones(responseProfesion)
  //       setData(response);
  //     }
  //     fetchData()
  //   } catch (error) {
  //     console.log("error en los datos");
  //   }
  // }, [])
  // console.log(data, "esto es data");


  return (
    <div className='flex w-full'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresas' element={<Empresa />} />
        <Route path='/aspirantes' element={<Aspirantes />} />
        <Route path='/profesiones' element={<Profesiones />} />
        <Route path='/postularse' element={<Postularse />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  )
}
{/* <div>
{profesiones && profesiones.length > 0 && profesiones.map((profesion) => {
    return (
      <p className='text-red-500' key={profesion.id} >{profesion.profesion}</p>
    )
  })}
  {data && data.length > 0 && data.map((aspirante) => {
    return (
      <p key={aspirante.dni}>{aspirante.dni}</p>
    )
  })}

</div> */}

export default App
