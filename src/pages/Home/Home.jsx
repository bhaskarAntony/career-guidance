import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Marquee from '../../components/marquee/Marquee'
import Class from '../../components/class/Class'
import Faq from '../../components/Faq/Faq'
import Works from '../../components/works/Works'
import Time from '../../components/time/Time'
import Card from '../../components/card/Card'

function Home() {
  return (
    <section className='home'>
      <Hero/>
      <Marquee/>
      <div className="book-btns">
        <a href='https://edubepractical4623.graphy.com/sessions/What-after-degree-65f7f229c26f7353cabdcf38' className='btn'>Register Now</a>
        <a href='https://chat.whatsapp.com/IDc5SEuahlKCVpcjjx4IJm' className='btn'>Join To whatsapp</a>
      </div>
      <Card/>
      <Class/>
      <Time/>
      {/* <Works/> */}
      <Faq/>
    </section>
  )
}

export default Home
