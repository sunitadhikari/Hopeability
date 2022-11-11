import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img src="companylogo.png" alt=""></img>
          <p>Hope Ability acknowledges the traditional owners and custodians of country throughout Australia and acknowledges their continuing connection to land, sea and community. We pay our respects to the people, the cultures and the elders past, present and emerging.</p>
          <div className="socials">
            <a href="#"><span className="fab fa-facebook-f"></span></a>
            <a href="#"><span className="fab fa-twitter"></span></a>
            <a href="#"><span className="fab fa-instagram"></span></a>
            <a href="#"><span className="fab fa-youtube"></span></a>
          </div>
        </div>
        <ul className="footer-right">
          <li>
            <h2>Connect With Us</h2>
            <ul className="box">
               <li><a href="#">Phone</a></li>

            </ul>
          </li>

        </ul>
      </footer>
    </>
  )
}

export default Footer