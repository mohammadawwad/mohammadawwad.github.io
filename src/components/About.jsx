import React from "react";
import headshot from '../imgs/headshot.png';
import frcLogo from '../imgs/frcLogo.png';
import stylishTile from '../imgs/stylishTile.png';
import stylishTileVid from '../vids/stylishTileVid.mp4';
import vexVR from '../imgs/vexVR.png';
import vexVR1 from '../imgs/vexVR-1.png';
import mcdonalds from '../imgs/mcdonalds.png'
import enactus from '../imgs/enactus.png'

function About() {
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

          {/**Work Experience*/}
          <div class="row align-items-center my-5 pt-3">
            <div class="col ">
              <h2 class="font-weight-bold">Work Experience</h2>
            </div>
          </div>

          {/**Work Experience Stylish Tile*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">Web Developer at Stylish Tile</h4>
              <h5 class="font-weight-normal text-left">September 2020 - Jan 2021</h5>
              
              <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/XxMDdMsrwUA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            </div>
            <div class="col pt-3 mt-5">
              <p>
                Responsible for Creating interactive and visually appealing 
                website on both Computers and Phones. Working at Stylish Tile 
                I learned a lot especially becaus eI worked with a team of designers.
                Working there also taught me many all the fundamentals of web 
                programming since I created the site without any frameworks. 
                It was challenging but gained a lot of experience with HTML, CSS,
                and Javascript since I made everything from scratch.
              </p>
            </div>
          </div>

          {/**Work Experience McDonalds*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">McDonal's Crew Member</h4>
              <h5 class="font-weight-normal text-left">July 2020 - Jan 2021</h5>
              <img
              id="mcdonalds-img"
              class="img-fluid rounded mb-4 float-left"
              src={mcdonalds}
              alt=""
            />
            </div>
            <div class="col mt-5">
              <p>
                As a Crew Member at Mcdonald's I was responsible for 
                taking orders on both the front counter as well as the
                Drive-Thru. Working there taught me many soft skills especially
                how to handle mistakes and complaints made by upset customers 
                calmly as well as professionally. I learned how to manage my time, communicate
                efficiently as well as work in a team.
              </p>
            </div>
          </div>



          {/**Experiences / Volunteering*/}
          <div class="row my-5">
            <div class="col">
              <h2 class="font-weight-bold">Volunteering/Experiences</h2>
            </div>
          </div>

          {/**FRC*/}
          <div class="row my-5">
          <div class="col-sm-5">
              <h4 class="font-weight-normal text-left">Software Engineering Team Lead</h4>
              <h5 class="font-weight-normal text-left">2018 - Present</h5>
              <img
              id="frcLogo-img"
              class="img-fluid rounded mb-4 float-left"
              src={frcLogo}
              alt=""
            />
            </div>
          <div class="col mt-5">
              <p>
                FRC stands for First Robotics Competition which is an organization 
                that allows students to build robots, program them and compete across
                the world. As the Software Engineer Team Lead of FRC team 6390 Hephaestus
                I am responsible for programming the robot’s functionality and movement and
                making it be as easy as possible to be teleoperated. I also have developed complex
                auto routines using PID for precision, not only do I program in Java I also teach
                it so that the upcoming generations of the Robotics Team have strong programmer,
                capable of delivering upon the teams standard.
              </p>
          </div>
          </div>

          {/**Vex VR*/}
          <div class="row my-5">
          <div class="col">
              <h4 class="font-weight-normal text-left">VEX VR Workshop</h4>
              <h5 class="font-weight-normal text-left">Nov 2020 - Dec 2020</h5>
              <img
              id="vex-img-1"
              class="img-fluid rounded mb-4 float-left"
              src={vexVR}
              alt=""
              width="300"
              />
              <img
              id="vex-img-2"
              class="img-fluid rounded mb-4 float-left"
              src={vexVR1}
              alt=""
              width="300"
              />
            </div>
          <div class="col mt-5">
              <p>
                Held an online workshop where I taught a number
                of students how to program virtual robots. The group of kids 
                I taught where beginners and had little experience, so we began with 
                basics of block coding. Fundamentals are important so we started with 
                variable deceleration, to if/else statements, they where having so much fun
                so, we continued to teach them all sorts of loops. By the near end of the workshop
                the students all had functional robots with sensors and autonomous routines.
              </p>
          </div>
          </div>

          {/**Enactus*/}
          <div class="row my-5">
          <div class="col">
              <h4 class="font-weight-normal text-left">Enactus The Amazing Case</h4>
              <h5 class="font-weight-normal text-left">Jan 2021 - Jan 2021</h5>
              <img
              id="vex-img-1"
              class="img-fluid rounded mb-4 float-left"
              src={enactus}
              alt=""
              width="450"
              />
            </div>
          <div class="col mt-5">
              <p>
                Team lead on Enactus The Amazing Case Competition.
                I was responsible for developing a product idea 
                and laying a game plan for our presentation. The 
                team and I learned a lot of social, and presentation 
                skills from the help of our mentors. We were awarded
                the Innovative product award as were where different
                and unique from all other teams.
              </p>
          </div>
          </div>

      </div>
    
  );
}

export default About;