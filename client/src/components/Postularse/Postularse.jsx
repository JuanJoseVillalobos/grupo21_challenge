import React from 'react'
import Header from '../Header/Header'
import { listarProfesiones } from '../../api/api';
import { useState, useEffect } from 'react';
import { crearAspirante } from '../../api/api';
import TransitionAlerts from '../Alert/TransitionAlerts';
export default function Postularse() {
  const [open, setOpen] = React.useState(false);
  const [profesiones, setProfesiones] = useState([])
  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    url_linkedin: "",
    fecha_de_nacimiento: "",
    sexo: '',
    imagen: "",
    profesion_id: ''
  });
  useEffect(() => {
    try {
      const fetchData = async () => {

        const responseProfesion = await listarProfesiones()
        setProfesiones(responseProfesion)

      }
      fetchData()
    } catch (error) {
      console.log("error en los datos");
    }
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imagen: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearAspirante(formData)
    setFormData({
      dni: "",
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      url_linkedin: "",
      fecha_de_nacimiento: "",
      sexo: "",
      imagen: "",
      profesion_id: ''
    });
    setOpen(true)
  };
  return (
    <div className='w-8/12  md:w-full'>

      <Header></Header>
      <div className='animate-fade-in-down'>

        <h2 className=' pl-2 text-center font-semibold text-lg text-gray-400 md:text-2xl md:text-start'>Postulate aquí</h2>

        {open && (

          <TransitionAlerts setOpen={setOpen}></TransitionAlerts>
        )}
        <form className="max-w-sm mx-auto flex flex-wrap gap-2 p-1 md:p-0" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div className="mb-5 ">
            <label htmlFor="dni" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DNI</label>
            <input onChange={handleChange} value={formData.dni} type="number" id="dni" name="dni" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input onChange={handleChange} value={formData.nombre} type="text" id="nombre" name="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
            <input onChange={handleChange} value={formData.apellido} type="text" id="apellido" name="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
            <input onChange={handleChange} value={formData.telefono} type="tel" id="telefono" name="telefono" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="linkedin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url-Linkedin</label>
            <input onChange={handleChange} value={formData.url_linkedin} type="url" id="linkedin" name="url_linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de nacimiento</label>
            <input onChange={handleChange} value={formData.fecha_de_nacimiento} type="date" id="fechaNacimiento" name="fecha_de_nacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
            <div>
              <input onChange={handleChange} type="radio" id="masculino" name="sexo" value="masculino" className="mr-2" required />
              <label htmlFor="masculino" className="mr-4">Masculino</label>
              <input onChange={handleChange} type="radio" id="femenino" name="sexo" value="femenino" className="mr-2" required />
              <label htmlFor="femenino">Femenino</label>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="imagen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
            <input onChange={handleImageChange} type="file" id="imagen" name="imagen" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="profesion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profesión</label>
            <select onChange={handleChange} id="profesion" value={formData.profesion_id} name="profesion_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              {profesiones.map((profesion) => {
                return (
                  <option key={profesion.id} value={profesion.id}>{profesion.profesion}</option>
                )
              })}
            </select>
          </div>
          <div className='flex justify-center items-center'>

          <button type="submit" className="bg-blue-600 h-12 text-white rounded-sm px-2 font-semibold">Postularse</button>
          </div>
        </form>
      </div>
    </div>
  )
}
