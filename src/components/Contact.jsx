import React from "react";
import headshot from '../imgs/headshot.png';
import resume from '../imgs/HootsuitePic.png';

function Contact() {
  return (
    <div id="container">
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

          {/**Contact : Phone*/}
          <div class="row  my-2 pt-3 ">
            <div class="col">
              <h4 class="font-weight-bold text-center">Phone: (778)-751-4320</h4>
            </div>
          </div>

          {/**Contact : Email*/}
          <div class="row  my-2 pt-3 ">
            <div class="col">
              <h4 class="font-weight-bold text-center">Email: <a href="mailto:mohd-awwad@homail.com">mohd-awwad@hotmail.com</a></h4>
            </div>
          </div>
          

          {/**Resume*/}
          <div class="row  my-2 pt-3 ">
            <div class="col ">
              <h2 class="font-weight-bold">Resume</h2>
            </div>
          </div>

          {/**Resume picture*/}
          <div class="row">
            <div class="col mt-1 mb-3">
               <img
                class="img-fluid rounded  float-center "
                src={resume}
                alt=""
              />
       
            </div>
          </div>


      </div>
  );
}

export default Contact;