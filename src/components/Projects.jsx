import React from "react";
import headshot from '../imgs/headshot.png';
import shopping1 from '../imgs/shoppingApp-1.png';
import shopping2 from '../imgs/shoppingApp-2.png';
import shopping3 from '../imgs/shoppingApp-3.png';
import colourJump from '../vids/Colour Jump.mp4';

function Projects() {
  return (
    <div className="projects">
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
            <h1 class="font-weight-light">Projects</h1>
            <p>
              Have experiece with a number of programming languages and frameworks.
              Have been programming for over 4 years, here are some of my projects I
               have worked on my own time
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

          {/**Projects*/}
          <div class="row  my-5">
            <div class="col ">
              <h2 class="font-weight-bold">My Projects</h2>
            </div>
          </div>

          {/**Shopping  Cart*/}
          <div class="row">
            <div class="col">
              <h4 class="font-weight-normal text-left"><a href="https://mohammadawwad.github.io/Shopping-List/" target="_blank">Shopping Cart Application</a></h4>
              <h5 class="font-weight-normal text-left">Decmber 2020 - Jan Present</h5>
            <img
              id="regular-img"
              class="img-fluid rounded  float-left "
              src={shopping3}
              alt=""
              />
            <img
              id="regular-img"
              class="img-fluid rounded  float-left "
              src={shopping1}
              alt=""
            />
            
            <img
              id="shopping-lg-img"
              class="img-fluid rounded  float-left"
              src={shopping2}
              alt=""
            />
          </div>
            <div class="col">
              <p>
                Created Shopping List application using React, Puppeteer, and Node.js
                The app was created to make shopping easier and allows you to add any item
                you want and change its quantity. It also allows you to print all your data 
                in an organised table with the click of one button. The application is still 
                in progress and the next feature that will be available with give you an estimated 
                value of what it will cost you. The app also has a note feature incase you want to 
                keep things in mind such as what store you want to shop from. I learned a lot while 
                creating this app such as state and async functons and how to scrape data from 
                websites.
              </p>
            </div>
          </div>

          {/**Personal Website*/}
          <div class="row pt-3 mt-5">
            <div class="col">
              <h4 class="font-weight-normal text-left">Personal Website (This Site)</h4>
              <h5 class="font-weight-normal text-left">Jan 2021 - Jan 2021</h5>
              <img
              id="mcdonalds-img"
              class="img-fluid rounded mb-4 float-left"
              src={headshot}
              alt=""
            />
            </div>
            <div class="col">
              <p>
                This site was created to showcase my experience and projects that 
                I have created. I also learned a lot developing it, some of the main things 
                I learned was bootstrap along with JSX and how to use them along with HTML, CSS, 
                and JavaScript. This project was definetly fun because I relised how much work and effort
                I put towards my projects.
              </p>
            </div>
          </div>

          {/**FRC Robotics*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">Robotic Robot</h4>
              <h5 class="font-weight-normal text-left">2018 - Present</h5>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eHRTgEbxUA0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col">
              <p>
                As Lead programmer on the robotics team I am responsible 
                for managing what other programmers work on creating tasks
                and implementing new fetures. This year i implemented the scource
                countrol with Git and Github. This meant the team can effectivly program 
                and share files. With Java I have been able to program a number of things on 
                the robot such as Potential Integral Dirivitive (PID) autos for the robot 
                which allows for proscision and accuracy along side vission prossecing for locking on targets
                . I also have prorammed Motors, Encoders, Colour Sensors, Gyros, nuematics, and LEDS. 
                These all would be programmer to allow our robots toramming a turret and the First
                Swearve Drive robot which allows for multi-directional movement.
              </p>
            </div>
          </div>

          {/**Colour Switch*/}
          <div class="row pt-3 mt-5">
            <div class="col">
              <h4 class="font-weight-normal text-left">Colour Jump App</h4>
              <h5 class="font-weight-normal text-left">November 2019 - Jully 2020</h5>
              
              <video
                width="550"
                controls
              >
                <source src={colourJump}/>
              </video>
            </div>
            <div class="col">
              <p>
                One of my favorite projects I have created was Colour Jump,
                this is a mobile game created with Unity and C#. The goal of the 
                game is to make it to the finish line without loosing, you loose if 
                the colour of you hits a moving object that isnt the same colour as the 
                player. I had a lot of phone creating this app it was supper complex
                as I added levels to unlock, a options bar that allows you to change volume, change levels,
                buy new charachters and much more using the points you have earned playing 
                the game.
              </p>
            </div>
          </div>
         

          {/**Dodge the blocks*/}
          <div class="row pt-3 mt-5">
            <div class="col">
              <h4 class="font-weight-normal text-left">Dodge The Blocks App</h4>
              <h5 class="font-weight-normal text-left">December 2018 - March 2019</h5>
              
              <iframe width="560" height="315" src="https://www.youtube.com/embed/svUxQG-mqC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            </div>
            <div class="col">
              <p>
                Dodge The Blocks was one of my first games developed using Unity and C# 
                I am very proud of what I developed. The game is simple and has two controls
                Right and Left. The game consistes of a cubed played that constantly is movingforward and 
                its speed increases over time. The goal of the game was to make it to the finish line without 
                hitting any of the obstacles in your way. Unfortunatly since it was an old game I developed 
                in my early stages of programming it got corupted and I do not have any examples of what it 
                looked like. But I have found an example of the game since the idea of the game
                got really popular. I am extremly proud of this game since it tought me so much about 
                the core fundementals of programming.
              </p>
            </div>
          </div>


      </div>
    </div>
  );
}

export default Projects;