import React from 'react'
import { RiEmotionSadLine } from "react-icons/ri";

import "./NotFound.css"
import Header from '../Header/Header'
export default function NotFound() {
  return (
    <div className='md:w-full flex flex-col justify-start items-center bg-gray-200  '>
      <Header></Header>
      <div className='animate-slide-in-top md:w-full md:flex justify-center items-center flex-col divGrande '>

        <h1 className='mt-6 ' >404 Error</h1>
        <p class="zoom-area"><b>Not Found</b></p>
        <div className='flex justify-center items-center gap-12'>

          <RiEmotionSadLine className='triste' />
          <section className="error-container animate-hang">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
          </section>
        </div>
      </div>

    </div>
  )
}
