import React from 'react'
import './style.css'

function Marquee() {
  return (
    <section>
        <marquee behavior="" direction="left" scrollamount="15"><p className="display-2 fw-bold">Career Guidance for <span className="text-main">IT Graduates</span> : Navigating Opportunities in the <span className="text-main2"> Digital Age</span> </p></marquee>
        <marquee behavior="" direction="right" scrollamount="15"><p className="display-2 fw-bold">Career Guidance for <span className="text-main">IT Graduates</span> : Navigating Opportunities in the <span className="text-main2"> Digital Age</span> </p></marquee>
    </section>
  )
}

export default Marquee
