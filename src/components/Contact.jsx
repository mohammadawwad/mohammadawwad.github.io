import React from "react";
import headshot from '../imgs/headshot.png';
import resume from '../imgs/Resume.png';
import coverLetter from '../imgs/Cover Letter.png';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div id="container">
    <div class="row align-items-center my-5">

      {/**Picture */}
      <div class="col-lg-7">
        <img
          class="img-fluid rounded mb-4 mt-2 mb-lg-0"
          src={headshot}
          alt=""
        />
      </div>

      {/**About Introduction */}
      <div class="col-lg-5">
        <h1 class="font-weight-normal">About</h1>
        <p>
          My Name is Mohammad Awwad, I am simply a programming 
          enthusiaste. I love programming and am always wanting 
          to learn new things.
        </p>
      </div>

        <div class="col-lg-7">
          <div class="buttons-menu">
            <ul>
              <li><a href="tel:778-751-4320" target="_blank" ><FaPhoneAlt className="Phone"/></a></li>
              <li><a href="mailto:mohd-awwad@hotmail.com" target="_blank" ><HiOutlineMail className="Email"/></a></li>
              <li><a href="https://www.linkedin.com/in/mohammad-awwad-a529431a6/" target="_blank" ><GrLinkedinOption className="LinkedIn"/></a></li>
              <li><a href="https://github.com/mohammadawwad" target="_blank" ><FaGithub className="Github"/></a></li>
            </ul>
          </div> 
        </div>
      </div>

      {/**Text*/}
      <div class="row align-items-center my-5 pt-5">
        <div class="col ">
          <h2 class="font-weight-bold text-center">Resume & Cover Letter</h2>
        </div>
      </div>

      {/**Resume and Cover Letter Images*/}
      <div class="row pt-1 pb-3">
        <div class="col-lg-6 pt-2">
          <img
              class="img-fluid rounded  float-right"
              src={resume}
              alt=""
          />
        </div>
        <div class="col-lg-6 pt-2">
          <img
              class="img-fluid rounded  float-left "
              src={coverLetter}
              alt=""
          />
        </div>
      </div>

      

    </div>

  );
}

export default Contact;