import React from 'react'

export default function Footer() {
  return (
    <>
     <div className="footer-container">
                    <div className="footer-brand">
                        <a href="#home">Nexar|Link.</a>
                    </div>
                    <nav className="footer-nav" aria-label="Footer Navigation">
                        <ul className="footer-menu">
                            <li><a href="#home"
                                    className="footer-link">Home</a></li>
                            <li><a href="#about"
                                    className="footer-link">About</a></li>
                            <li><a href="#projects"
                                    className="footer-link">Projects</a></li>
                            <li><a href="#contact"
                                    className="footer-link">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="social-icons">
                        <a href="#" className="social-icon"
                            aria-label="Instagram"><i
                                className="uil uil-instagram"></i></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><i
                                className="uil uil-linkedin-alt"></i></a>
                        <a href="#" className="social-icon" aria-label="Dribbble"><i
                                className="uil uil-dribbble"></i></a>
                        <a href="#" className="social-icon" aria-label="GitHub"><i
                                className="uil uil-github-alt"></i></a>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright &copy; <a href="#home"
                                className="copyright-link">Mbi Junior</a> - All
                            rights
                            reserved</p>
                    </div>
                </div>
    </>
  )
}
