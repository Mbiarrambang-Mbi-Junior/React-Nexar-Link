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
            <Link
              to="/">
              Home
            </Link>
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
            <Link to="https://www.pinterest.com/" target='_blank'><BsPinterest /></Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/" target='_blank'><BsFacebook /></Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/" target='_blank'><BsInstagram /></Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer