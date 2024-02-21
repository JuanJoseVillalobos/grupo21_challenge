import React from 'react'
import Header from '../Header/Header'
import Card from "./Card/Card"

import { listarAspirantes, listarProfesiones } from '../../api/api'
import { useState, useEffect } from 'react'
export default function Home() {
    const [data, setData] = useState()
    const [profesiones, setProfesiones] = useState()
    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await listarAspirantes()
                const responseProfesion = await listarProfesiones()
                setProfesiones(responseProfesion)
                setData(response);
            }
            fetchData()
        } catch (error) {
            console.log("error en los datos");
        }
    }, [])


    return (
        <div className='w-8/12 md:w-full flex flex-col justify-center items-center'>
            <Header></Header>
            <div className='bg-gray-100 md:flex md:flex-col '>

                <div className=' flex justify-center md:items-center flex-col items-center text-center  mt-2'>
                    <h1 className='font-semibold text-lg md:text-start md:w-full md:ml-20  text-gray-400 md:text-3xl md:mt-12'>Búsqueda y selección</h1>
                    <p className='text-start m-4 md:text-xl md:font-semibold text-sm md:m-2 text-gray-400 ' >Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
                    <img className='w-3/4 p-1 mt-1 md:w-full md:pl-6 md:pr-6' src="/imgUsers/banner.jpg" alt="" />
                </div>
                <div className='mt-3 p-2'>
                    <h2 className=' text-center font-semibold text-lg text-gray-400 md:text-2xl md:text-start'>Aspirantes</h2>
                </div>
                <div className='flex flex-col gap-6 md:flex-row justify-center items-center md:gap-1 flex-wrap'>

                    {data && data.length > 0 && data.map((aspirante, i) => {
                        return (
                            <Card index={i} profesion={aspirante.profesion.profesion} nombre={aspirante.nombre} apellido={aspirante.apellido} key={aspirante.dni} />
                        )
                    })}
                </div>
                <div className='mt-3 p-2'>
                    <h2 className=' text-center font-semibold text-lg mb-3 text-gray-400 md:text-2xl md:text-start'>Profesiones</h2>
                </div>
                <div className='w-full md:flex md:flex-col justify-center items-center p-2 '>

                    <ul className='flex flex-col justify-center gap-2 items-center  shadow-lg w-full border md:w-1/2'>
                        <span className='bg-blue-600 w-full rounded-sm p-1 text-white text-lg text-center' >Listado de Profesiones</span>
                        {profesiones && profesiones.length > 0 && profesiones.map((profesion) => {
                            return (
                                <li className='w-full text-center  shadow-md hover:bg-gray-200' key={profesion.id} >{profesion.profesion}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}
