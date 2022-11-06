import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-left">
          <img src="companylogo.png" alt=""></img>
          <p>Hope Ability acknowledges the traditional owners and custodians of country throughout Australia and acknowledges their continuing connection to land, sea and community. We pay our respects to the people, the cultures and the elders past, present and emerging.</p>
          <div class="socials">
            <a href="#"><span class="fab fa-facebook-f"></span></a>
            <a href="#"><span class="fab fa-twitter"></span></a>
            <a href="#"><span class="fab fa-instagram"></span></a>
            <a href="#"><span class="fab fa-youtube"></span></a>
          </div>
        </div>
        <ul class="footer-right">
          <li>
            <h2>Connect With Us</h2>
            <ul class="box">
               <li><a href="#">Phone</a></li>

            </ul>
          </li>

        </ul>
      </footer>
    </>
  )
}

export default Footer