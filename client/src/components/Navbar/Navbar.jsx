import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { CgUserList } from "react-icons/cg";
import { MdContactMail } from "react-icons/md";
export default function Navbar() {
    return (
        <div className='w-4/12  md:w-1/5 md:flex md:flex-col md:items-center md:justify-start border-r border-gray-300 shadow-xl'>

            <div className='md:w-full flex mt-2  flex-col gap-2 mb-16 justify-around md:flex-row items-center md:justify-center md:items-center md:gap-3 md:mt-0 md:mb-0 md:py-8'>
                <img className='w-5/12 md:w-1/4' src="/logo-dh.png" alt="" />
                <h2 className='font-bold text-xs md:text-sm'>Digital House</h2>
            </div>
            <div className='md:w-full gap-6 flex flex-col md:justify-center md:items-center md:px-2 md:mt-10 md:flex-col md:gap-8'>
                <div >
                    <h2 className='text-blue-500 p-2 text-xs md:text-base font-bold'>OPCIONES</h2>
                    <ul className='gap-4 p-1  flex flex-col md:gap-4'>
                        <li className='flex items-center gap-1 md:items-center'>
                            <FaRegBuilding className='text-xs text-blue-500 md:text-base' />
                            <h3 className='text-xs text-gray-500 font-semibold md:text-base hover:text-gray-800 cursor-pointer' >-Empresas</h3>
                        </li>
                        <li className='flex items-center gap-1 md:items-center'>
                            <FaRegUser className='text-xs text-blue-500 md:text-base' />
                            <h3 className='text-xs text-gray-500 font-semibold md:text-base hover:text-gray-800 cursor-pointer' >-Aspirantes</h3>
                        </li>
                        <li className='flex gap-1 md:items-center'>
                            <FaListCheck className=' text-xs text-blue-500 md:text-base' />
                            <h3 className='text-xs text-gray-500 font-semibold md:text-base hover:text-gray-800 cursor-pointer' >-Profesiones</h3>
                        </li>
                        <li className='flex gap-1 w-full  md:items-center'>
                            <CgUserList className='text-xs text-blue-500 md:text-base' />
                            <h3 className='text-xs text-gray-500 font-semibold md:text-base hover:text-gray-800 cursor-pointer' >-Postulate aqui</h3>
                        </li>
                        <li className='flex gap-1 md:items-center'>
                            <MdContactMail className='text-xs text-blue-500 md:text-base' />
                            <h3 className='text-xs text-gray-500 font-semibold md:text-base hover:text-gray-800 cursor-pointer' >-Contacto</h3>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
