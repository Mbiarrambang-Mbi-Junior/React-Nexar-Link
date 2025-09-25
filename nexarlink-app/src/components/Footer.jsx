import React from 'react'
import { FaInstagram, FaLinkedin, FaDribbble, FaGithub} from 'react-icons/fa'

export default function Footer({ isDarkMode }) {
  return (
    <>
     <div className={`footer-container shadow-[2px_2px_5px_#ccc] relative bottom-0 w-full flex flex-row items-center justify-between p-4 ${isDarkMode ? 'bg-white text-black' : 'bg-[#191854]'}`}>
                    <div className="footer-brand text-2xl font-bold text-teal-500">
                        <a href="#home">Nexar|Link.</a>
                    </div>
                    <nav className={`footer-nav ${isDarkMode ? 'text-black' : 'bg-[#191854]'}`} aria-label="Footer Navigation">
                        <ul className="footer-menu flex gap-[.5rem] style-none flex-wrap justify-center">
                            <li><a href="#home"
                                    className="footer-link hover:text-orange-400">Home</a></li>
                            <li><a href="#about"
                                    className="footer-link hover:text-orange-400">About</a></li>
                            <li><a href="#projects"
                                    className="footer-link hover:text-orange-400">Projects</a></li>
                            <li><a href="#contact"
                                    className="footer-link hover:text-orange-400">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="social-icons flex gap-[.5rem]">
                        <a href="#" className="hover:bg-orange-400 text-orange-400 hover:text-white social-icon flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-transparent  border-[1px_white]"aria-label="Instagram">
                                <FaInstagram className='text-[1.5rem]'/></a>
                        <a href="#" className="hover:bg-orange-400 text-orange-400 hover:text-white social-icon flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-transparent  border-[1px_white]" aria-label="LinkedIn">
                                <FaLinkedin className='text-[1.5rem]'/></a>
                        <a href="#" className="hover:bg-orange-400 text-orange-400 hover:text-white social-icon flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-transparent  border-[1px_white]" aria-label="Dribbble">
                                <FaDribbble className='text-[1.5rem]'/></a>
                        <a href="#" className="hover:bg-orange-400 text-orange-400 hover:text-white social-icon flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-transparent  border-[1px_white]" aria-label="GitHub">
                                <FaGithub className='text-[1.5rem]'/></a>
                    </div>
                    <div className="footer-bottom text-[0.8rem] text-[#888] mt-[1rem]">
                        <p>Copyright &copy; <a href="#home"
                                className="copyright-link style-none text-white font-bold hover:text-orange-400">Mbi Junior</a> - All
                            rights
                            reserved</p>
                    </div>
                </div>
    </>
  )
}
