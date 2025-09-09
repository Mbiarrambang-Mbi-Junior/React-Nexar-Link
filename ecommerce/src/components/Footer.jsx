import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import {BsPinterest, BsFacebook, BsInstagram} from 'react-icons/bs'


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
            <Link>home</Link>
          </li>
          <li>
            <Link>about</Link>
          </li>
          <li>
            <Link>services</Link>
          </li>
          <li>
            <Link>contact</Link>
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