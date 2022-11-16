import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container flex">
          <div className='box'>
          <div className="left-container">
            <div className="img">

          <img src="companylogo.png" alt=""></img>
            </div>
          <p>Hope Ability acknowledges the traditional owners and custodians of country throughout Australia and acknowledges their continuing connection to land, sea and community. We pay our respects to the people, the cultures and the elders past, present and emerging.</p>
         
          </div>
          <div className="middle-container">
          <div className="socials">
           <a href="#"><i className='fab fa-facebook-f'></i></a>
           <a href="#"><i className='fab fa-twitter'></i></a>
           <a href="#"><i className='fab fa-instagram'></i></a>
           <a href="#"><i className='fab fa-linkedin'></i></a>
          </div>
          </div>
          <div className="right-container">
            <div className="heading">
              <h3>Get In touch</h3>
            </div>
            <div className="touchidea">
            <ul >
               <li><i className="fab-light fa-phone" style={{color:"white", fontSize:"30px" }}></i></li>
               <li><i class="fa-regular fa-location-dot"></i></li>
               <li><i class="fa-solid fa-envelopes"></i></li>
            </ul>
            </div>
          </div>
          </div>

        {/* <div className="footer-left">
          <img src="companylogo.png" alt=""></img>
          <p>Hope Ability acknowledges the traditional owners and custodians of country throughout Australia and acknowledges their continuing connection to land, sea and community. We pay our respects to the people, the cultures and the elders past, present and emerging.</p>
          <div className="socials">
           <a href="#"><i className='fab fa-facebook-f'></i></a>
           <a href="#"><i className='fab fa-twitter'></i></a>
           <a href="#"><i className='fab fa-instagram'></i></a>
           <a href="#"><i className='fab fa-linkedin'></i></a>
          </div>
        </div>
        <ul className="footer-right">
          <li>
            <h2>Connect With Us</h2>
            <ul className="box">
               <li><a href="#">Phone</a></li>
               <li><a href="#">Phone</a></li>
               <li><a href="#">Phone</a></li>
               <li><a href="#">Phone</a></li>
            </ul>
          </li>

        </ul> */}
        </div>
      </footer>
    </>
  )
}

export default Footer