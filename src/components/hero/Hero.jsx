import React from 'react'
import './style.css'

function Hero() {
  return (
    <section className='hero'>
      <h1 className="display-1 fw-bold text-center">Hi👋,, Career Guidance <br /> for  <span className="main-text">IT Graduates</span></h1>
      <div className="text-center tag">
        <img src="https://cdn-icons-png.freepik.com/256/7123/7123235.png?ga=GA1.1.874872603.1694171926&" alt="" />
        <p className="">Navigating Opportunities in the Digital Age </p>
      </div>
      <p className=' text-center fs-5'>career paths in IT (e.g., software development, data science, cybersecurity, IT consulting) <br />-	Highlight the demand for IT professionals in various industries. . </p>
      <div className="btns d-flex justify-content-center flex-wrap mt-3 gap-3">
        <a href='https://edubepractical4623.graphy.com/sessions/What-after-degree-65f7f229c26f7353cabdcf38' className="hero-btn btn btn-light p-3 px-5 rounded-pill fs-5" target='_blank'>Get Started</a>
        <a className="hero-btn btn btn-outline-light p-3 px-5 rounded-pill fs-5" href='https://chat.whatsapp.com/IDc5SEuahlKCVpcjjx4IJm' target='_blank'>Know More</a>
      </div>
    </section>
  )
}

export default Hero
