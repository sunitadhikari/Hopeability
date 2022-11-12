import React from 'react'

const Section = () => {
  return (
  <div>
  <meta name="viewport" contnet="width=device-width, intial-scale=1.0, maximum-scale=1.0, usser-scalable=no"></meta>
  <link rel="shortcut icon" href="image/fav-icon-svg"></link>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Karma:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,800;0,900;1,100;1,300;1,800;1,900&family=Roboto:ital,wght@0,300;0,400;0,900;1,100;1,300;1,900&display=swap" rel="stylesheet"></link>
  <section id="blog">
    <div className="blog-heading">
      {/* <span>Development-life Skills</span> */}
      <h2>OUR SERVICES</h2>
    </div>
    <div className="blog-container">
      <div className="bolg-box">
          <div className="blog-img">
            <img src="disablee.jpg" alt="blog"></img>

          </div>
          <div className="blog-text">
            <span></span>
            <a href="#" className="blog-title">Development-Life Skills</a>
            <p>Development of daily living and life skills focuses on training and development activities.</p>
            <a href="#">Read More</a>
          </div>
          </div>
          <div className="bolg-box">
          <div className="blog-img">
            <img src="disablee.jpg" alt="blog"></img>
          </div>
          <div className="blog-text">
            <span></span>
            <a href="#" className="blog-title">Personal Activities</a>
            <p>Assisting with and/or supervising personal tasks of daily life to enable the participant to.</p>
            <a href="#">Read More</a>
          </div>
          </div>
          <div className="bolg-box">
          <div className="blog-img">
            <img src="disablee.jpg" alt="blog"></img>
          </div>
          <div className="blog-text">
            <span></span>
            <a href="#" className="blog-title">Assistance Life Tasks</a>
            <p>This registration group incorporates assistance with or supervising tasks of daily life.</p>
            <a href="#">Read More</a>
          </div>
          </div>
    </div>
  </section>
  </div>
  )
}

export default Section