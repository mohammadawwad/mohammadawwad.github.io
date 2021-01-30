import React from "react";
import headshot from '../imgs/headshot.png';
import frcLogo from '../imgs/frcLogo.png';
import stylishTile from '../imgs/stylishTile.png';
import stylishTileVid from '../vids/stylishTileVid.mp4';
import vexVR from '../imgs/vexVR.png';
import mcdonalds from '../imgs/mcdonalds.png'

function About() {
  return (
    <div className="about">
      <div class="container pt-5">
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
          <div class="row align-items-center my-5">
            <div class="col ">
              <h2 class="font-weight-bold">Work Experience</h2>
            </div>
          </div>

          {/**Work Experience Stylish Tile*/}
          <div class="row">
            <div class="col">
              <h4 class="font-weight-normal text-left">Web Developer at Stylish Tile</h4>
              <h5 class="font-weight-normal text-left">September 2020 - Jan 2021</h5>
              
              <iframe width="560" height="315" src="https://www.youtube.com/embed/XxMDdMsrwUA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            </div>
            <div class="col">
              <p>
                Responsible for Creating interactive and visualy apealling 
                website on both Computers and Phones. Working at Styilish Tile 
                I learned alot especialy becaus eI worked with a team of designers.
                Working there also tought me many all the fundementals of web 
                programming since I created the site without any freameworks. 
                It was challenging but gained alot of experience with HTML, CSS,
                 and Javascript since I made everything from scratch.
              </p>
            </div>
          </div>

          {/**Work Experience McDonalds*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">McDonal's Crew Member</h4>
              <h5 class="font-weight-normal text-left">Jully 2020 - Jan 2021</h5>
              <img
              id="mcdonalds-img"
              class="img-fluid rounded mb-4 float-left"
              src={mcdonalds}
              alt=""
            />
            </div>
            <div class="col">
              <p>
                As a Crew Member at Mcdonald's I was responsible for 
                taking orders on both the front counter as well as the
                Drive-Thru. Working there tought me many soft skills especialy
                how to handle mistakes and complaints made by upset customers 
                calmy as well as professionaly.I learned how to manage, communicate
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
          <div class="col">
              <p>
                FRC stands for First Robotics Compition which is an organization 
                that allows students to build robots, program them and compete across
                the world. As the Software Engineer Team Lead of FRC team 6390 Hephaestus
                I am responsible for programming the robots functionality and movement and
                making it be as easy as possible to teloperate. I also have developed complex
                auto routines using PID for precision, not only do I program in Java I also teach
                it so that the upcomming generations of the Robotics Team have strong programmer,
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
              class="img-fluid rounded mb-4 float-left"
              src={vexVR}
              alt=""
            />
            </div>
          <div class="col">
              <p>
                Held an online workshop where I taught a number
                of students how to program virtual robots. The group of kids 
                I taught where beginers and had little experience so we began with 
                basics of block coding. Fundementals are important so we started with 
                variable decleration, to if/else statments, they where having so much fun
                so we continued to teach them all sorts of loops. By the near end of the workshop
                the students all had functional robots with sensors and autonousmes routines.
              </p>
          </div>
          </div>

      </div>
    </div>
    
  );
}

export default About;