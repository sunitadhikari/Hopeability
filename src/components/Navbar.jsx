import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            
            <a href="/" className="side-title">Hope Ability</a>   
            <img src="companylogo.png" alt=""></img>
            <ul>
                <li>
                    <a href="/">HOME</a>
                    <a href="/ourservices">OUR SERVICES</a>
                    <a href="/about">ABOUT</a>
                    <a href="/registeredndisprovider">REGISTERED NDIS PROVIDER</a>
                    <a href="/contact">CONTACT</a>
                    <a href="/workwithus">WORK WITH US</a>
                    <a href="/blog">BLOG</a>
                </li>
            </ul>
        </nav>
     {/* <img src="pic1.jpg"></img>  */}
    </>
  )
}
export default Navbar