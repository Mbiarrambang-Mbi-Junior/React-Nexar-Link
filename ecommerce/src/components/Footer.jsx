import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { BsPinterest, BsFacebook, BsInstagram } from 'react-icons/bs'


function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-logo">
        <h1 className="footer-text">
          E-shop
        </h1>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <ScrollLink
              to="header-section"
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <ScrollLink
            to="explore-section"
            smooth={true}
            duration={500}
          >
            Explore
          </ScrollLink>
          <ScrollLink
            to="discover-section"
            smooth={true}
            duration={500}
          >
            Discover
          </ScrollLink>
          <li>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
        </ul>
      </div>

      <div className="footer-social">
        <ul className="footer-nav">
          <li>
            <Link><BsPinterest /></Link>
          </li>
          <li>
            <Link><BsFacebook /></Link>
          </li>
          <li>
            <Link><BsInstagram /></Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer