import React from "react";
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-3 bg-dark sticky-bottom">
        <div class="container" id="footer-container">
          {/* Text */}
          <p class="m-0 text-center text-white">
            Copyright &copy; Mohammad Awwad 2021
          </p>
          <p class="m-0 text-center text-white">
            Please Note: Site is Curently under construction
          </p>

          {/*Icons*/}
          <div class="social-menu">
            <ul>
              <li><a href="https://github.com/mohammadawwad"><FaGithub className="Github"/></a></li>
              <li><a href="https://www.linkedin.com/in/mohammad-awwad-a529431a6/"><GrLinkedinOption className="LinkedIn"/></a></li>
            </ul>
          </div> 

          <div class="contact-menu">
            <ul>
              <li><a href="tel:778-751-4320"><FaPhoneAlt className="Phone"/></a></li>
              <li><a href="mailto:mohd-awwad@hotmail.com"><HiOutlineMail className="Email"/></a></li>
            </ul>
          </div> 

        </div>
      </footer>
    </div>
    
  );
}

export default Footer;