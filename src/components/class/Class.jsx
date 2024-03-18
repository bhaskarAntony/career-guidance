import React from 'react'
import './style.css'

function Class() {
  return (
    <section className='class p-2 p-md-5'>
        <h1 className="display-3 fw-bold my-5 gradient-text">Everything in one place</h1>
      <div className="row">
        <div className="col-12 col-md-8">
            <div className="class-card class-card1">
                <h1 className="fs-4 fw-bold">Explore IT Career Paths</h1>
                <p>Learn about various career options in IT, <br /> such as software development, <br /> data science, cybersecurity, and IT consulting. <br /> Discover the skills and qualifications required for each path </p>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="class-card class-card2">
                <h1 className="fs-4 fw-bold">Build Your Foundation</h1>
                <p>Understand the importance of continuous <br /> learning and upskilling in IT.  <br />Explore relevant certifications and courses <br /> (e.g., AWS, Azure, Python, Java) to strengthen your skills.</p>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="class-card class-card3">
                <h1 className="fs-4 fw-bold">Master Key Skills</h1>
                <p>Strike the right balance between <br /> soft skills and technical skills crucial <br /> for success in IT. Enhance your communication, <br /> problem-solving, and adaptability skills. </p>
            </div>
        </div>
        <div className="col-12 col-md-8">
            <div className="class-card class-card4">
                <h1 className="fs-4 fw-bold">Navigate the Job Market</h1>
                <p>Discover effective job search strategies <br /> tailored for IT graduates. Learn valuable resume <br />writing tips and tricks, along with interview preparation <br /> techniques and common interview questions in the IT industry.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Class
