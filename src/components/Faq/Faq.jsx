import React from 'react'
import './style.css'

const faq = [
    {
      question: "What are the most in-demand programming languages for IT professionals today?",
      answer: "Currently, some of the most in-demand programming languages include Python, JavaScript, Java, and C#. However, the specific languages may vary depending on the industry and job role."
    },
    {
      question: "How important is it for IT graduates to pursue certifications, and which ones are highly recommended?",
      answer: "Certifications can significantly enhance your credentials and marketability in the IT industry. Some highly recommended certifications include AWS Certified Solutions Architect, CompTIA Security+, Cisco Certified Network Associate (CCNA), and Google Certified Professional Cloud Architect, depending on your career goals and interests."
    },
    {
      question: "What steps can I take to build a professional network within the IT industry?",
      answer: "Networking is crucial in the IT industry. You can start by attending industry events, joining professional organizations, participating in online forums and communities, and reaching out to professionals on platforms like LinkedIn. Building genuine relationships and offering value to others in your network is key to long-term success."
    },
    {
      question: "How can I demonstrate my problem-solving skills during a job interview?",
      answer: "You can showcase your problem-solving abilities by providing specific examples from your past experiences or academic projects where you successfully identified and resolved technical challenges. Employers appreciate candidates who can articulate their problem-solving process, including how they approached the problem, the steps they took to solve it, and the results they achieved."
    },
    {
      question: "What are some emerging technologies that IT graduates should keep an eye on?",
      answer: "Emerging technologies such as artificial intelligence (AI), machine learning, blockchain, Internet of Things (IoT), and augmented reality (AR) are shaping the future of the IT industry. Staying updated on these trends can provide valuable insights and opportunities for IT professionals."
    }
  ];
function Faq() {
  return (
    <section className='faq p-2 p-md-5'>
      <h1 className='display-3 fw-bold gradient-text my-5'>Frequently Asked Question</h1>
    <div className=" faq-container p-2 p-md-5">
   <div className="row">
    <div className="col-12 col-md-3 text-white mb-3">
        <h1 className="display-5 fw-bold gradient-text">Questions?</h1>
        <p className="fs-4">Check out the frequently asked questions. Can’t find what are you looking for?</p>
    </div>
    <div className="col-12 col-md-9">
    <div class="accordion" id="accordionExample">
      {
        faq.map((item, index)=>(
            <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="true" aria-controls="collapseOne">
               {item.question}
              </button>
            </h2>
            <div id={index} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))
      }
 
</div>
    </div>
   </div>
    </div>
      
    
    </section>
  )
}

export default Faq
