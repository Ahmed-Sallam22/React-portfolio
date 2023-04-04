import React from 'react'
import imgHeader from '../../Component/Portfolio/imgs/avataaars.svg'
export default function Home() {
  return <>
      <section id='PageUp' className='text-center text-white'>
        <div className='container d-flex align-items-center flex-column'>
          <img src={imgHeader} className="logo" alt="" />
          <h1 id='maintext' className='pt-4'>Start React</h1>
          <div className="lines d-flex align-items-center justify-content-center">
          <div className="line"></div>
          <i className="fa-solid fa-star fa-2xl px-3"></i>
          <div className="line"></div>
          </div>
          <p className='text-header pt-4'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
      </section>
    </>
}
