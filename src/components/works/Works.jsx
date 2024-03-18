import React from 'react'
import './style.css'
const data = [
    {
        titlle:"Work with the best for the best results",
        content:[
            "Welcome and introduction to the session.",
            "Brief overview of the current IT industry landscape. ",
            "Importance of career planning and guidance for IT graduates. "
        ]
    },
    {
        titlle:"Understanding Career Paths in IT (15 minutes) ",
        content:[
            "Overview of different career paths in IT (e.g., software development, data science, cybersecurity, IT consulting). ",
            "Discuss the skills and qualifications needed for each career path. ",
            "Highlight the demand for IT professionals in various industries. "
        ]
    },
    {
        titlle:"Building a Strong Foundation (15 minutes) ",
        content:[
            "The significance of continuous learning and upskilling in IT. ",
            "Introduction to relevant certifications and courses (e.g., AWS, Azure, Python, Java). ",
            "Tips for networking and building professional relationships in the IT industry. "
        ]
    },
    {
        titlle:"Key Skills for Success (20 minutes) ",
        content:[
            "Soft skills vs. technical skills: finding the right balance. ",
            "Communication skills, problem-solving abilities, and adaptability. ",
            "The role of critical thinking and creativity in IT careers. "
        ]
    },
    {
        titlle:"Navigating the Job Market (20 minutes) ",
        content:[
            "Job search strategies for IT graduates. ",
            "Resume writing tips and tricks.",
            "Interview preparation and common interview questions in the IT industry.  "
        ]
    },
    {
        titlle:"Industry Insights and Trends (15 minutes) ",
        content:[
            "Overview of current trends in IT (e.g., AI, machine learning, blockchain). ",
            "Future prospects and emerging technologies in the IT industry. ",
            "The importance of staying updated with industry trends. "
        ]
    },
    {
        titlle:"Q&A Session (15 minutes) ",
        content:[
            "Open the floor for questions from the audience. ",
            "Address common concerns and queries related to IT career paths. ",
            "Provide personalized advice and recommendations. "
        ]
    },
    {
        titlle:"Conclusion (5 minutes) ",
        content:[
            "Recap of key takeaways from the session. ",
            "Encouragement to pursue a fulfilling career in IT. ",
            "Thank you and closing remarks. "
        ]
    }

]

function Works() {
  return (
    <section className='works p-2 p-md-5'>
      <h1 className="display-3 fw-bold gradient-text">Work with the best for <br /> the best results</h1>
      <div className="work-container p-2 p-md-4 rounded-5">
      <div className="row">
        {
            data.map((item, index)=>(
                <div className="col-12 col-md-4 border">
                    <div className="work-card text-white mb-3">
                        <h1 className="display-1 fw-bold heading">{index+1}</h1>
                        <h1 className="fs-5 fw-bold gradient-text">{item.titlle}</h1>
                       <ul>
                        {
                            item.content.map((item, index)=>(
                                <li className="small">{item}</li>
                            ))
                        }
                       </ul>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </section>
  )
}

export default Works
