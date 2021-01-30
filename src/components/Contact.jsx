import React from "react";
import headshot from '../imgs/headshot.png';

function Contact() {
  return (
    <div className="contact">
      <div class="container pt-5">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={headshot}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              I am best reached by the following contact
              methods, feel free to contact at me at anytime.
            </p>
          </div>
          <div class="col-lg-7">
            <a
              className="My-Github"
              href="https://github.com/mohammadawwad"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Github |
            </a>
            <a
              className="My-Github"
              href="mailto:mohd-awwad@homail.com"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Email 
            </a>
            <a
              className="My-Github"
              href="https://www.linkedin.com/in/mohammad-awwad-a529431a6/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              | linkedIn
            </a>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Contact;