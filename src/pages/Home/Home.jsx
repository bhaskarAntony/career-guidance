import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Marquee from '../../components/marquee/Marquee'
import Class from '../../components/class/Class'
import Faq from '../../components/Faq/Faq'
import Works from '../../components/works/Works'
import Time from '../../components/time/Time'

function Home() {
  return (
    <section className='home'>
      <Hero/>
      <Marquee/>
      <Class/>
      <Time/>
      {/* <Works/> */}
      <Faq/>
    </section>
  )
}

export default Home
