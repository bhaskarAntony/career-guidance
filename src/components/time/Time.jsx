import React from 'react'
import './style.css'

const data = [
    {
        time:5,
        titlle:"Work with the best for the best results",
        content:[
            "Welcome and introduction to the session.",
            "Brief overview of the current IT industry landscape. ",
            "Importance of career planning and guidance for IT graduates. "
        ]
    },
    {
        time:15,
        titlle:"Understanding Career Paths in IT (15 minutes) ",
        content:[
            "Overview of different career paths in IT (e.g., software development, data science, cybersecurity, IT consulting). ",
            "Discuss the skills and qualifications needed for each career path. ",
            "Highlight the demand for IT professionals in various industries. "
        ]
    },
    {
        time:15,
        titlle:"Building a Strong Foundation (15 minutes) ",
        content:[
            "The significance of continuous learning and upskilling in IT. ",
            "Introduction to relevant certifications and courses (e.g., AWS, Azure, Python, Java). ",
            "Tips for networking and building professional relationships in the IT industry. "
        ]
    },
    {
        time:20,
        titlle:"Key Skills for Success (20 minutes) ",
        content:[
            "Soft skills vs. technical skills: finding the right balance. ",
            "Communication skills, problem-solving abilities, and adaptability. ",
            "The role of critical thinking and creativity in IT careers. "
        ]
    },
    {
        time:20,
        titlle:"Navigating the Job Market (20 minutes) ",
        content:[
            "Job search strategies for IT graduates. ",
            "Resume writing tips and tricks.",
            "Interview preparation and common interview questions in the IT industry.  "
        ]
    },
    {
        time:15,
        titlle:"Industry Insights and Trends (15 minutes) ",
        content:[
            "Overview of current trends in IT (e.g., AI, machine learning, blockchain). ",
            "Future prospects and emerging technologies in the IT industry. ",
            "The importance of staying updated with industry trends. "
        ]
    },
    {
        time:15,
        titlle:"Q&A Session (15 minutes) ",
        content:[
            "Open the floor for questions from the audience. ",
            "Address common concerns and queries related to IT career paths. ",
            "Provide personalized advice and recommendations. "
        ]
    },
    {
        time:5,
        titlle:"Conclusion (5 minutes) ",
        content:[
            "Recap of key takeaways from the session. ",
            "Encouragement to pursue a fulfilling career in IT. ",
            "Thank you and closing remarks. "
        ]
    }

]
function Time() {
  return (
    <div className='time container-fluid p-2 p-md-5'>
         <h1 className="display-3 fw-bold gradient-text my-5">How it Will Work<br /> Over 7:30PM- 9:00PM</h1>
      <div className="row">
        <div className="col-12 col-md-4 order-2 order-md-1">
            <div className="time-left h-100 ">
              
            </div>
        </div>

        <div className="col-12 col-md-8 order-1 order-md-2">
            <div className="time-right ">
            <div class="accordion" id="accordionExample">
      {
        data.map((item, index)=>(
            <div class="accordion-item">
            <h2 class="accordion-header pt-4">
                <h1 className="fs-6 time-tag p-1"><i class="bi bi-alarm fs-5"></i> {item.time}min</h1>
              <button class="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
               {item.titlle}
              </button>
            </h2>
            <div id={index} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <ul>
                        {
                            item.content.map((item, index)=>(
                                <li className="small">{item}</li>
                            ))
                        }
                       </ul>
              </div>
            </div>
          </div>
        ))
      }
 
</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Time
