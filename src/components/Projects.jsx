import React from "react";
import headshot from '../imgs/headshot.png';
import shopping1 from '../imgs/shoppingApp-1.png';
import shopping3 from '../imgs/shoppingApp-3.png';
import robotics from '../imgs/robotics.png';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';

function Projects() {
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
            <h1 class="font-weight-light">Projects</h1>
            <p>
              Have experiece with a number of programming languages and frameworks.
              Have been programming for over 4 years, here are some of my projects I
               have worked on my own time
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

          {/**Projects*/}
          <div class="row  my-5 pt-3">
            <div class="col ">
              <h2 class="font-weight-bold">My Projects</h2>
            </div>
          </div>

          {/**FRC Robotics*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">Robotics Robots</h4>
              <h5 class="font-weight-normal text-left">2018 - Present</h5>
              <h5 class="font-weight-normal text-left"><a href="https://github.com/FRC-6390/Swerve2021" target="_blank">2020 - Present Robot Code</a></h5>
              <h5 class="font-weight-normal text-left"><a href="https://github.com/mohammadawwad/KevinRobotV2" target="_blank">2019 - 2020 Robot Code</a></h5>
              <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/eHRTgEbxUA0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col mt-5">
              <p>
                As Lead programmer on the robotics team I am responsible 
                for managing what other programmers work on, creating tasks
                and implementing new features. This year I implemented source
                control with Git and Github. This meant the team can effectively program 
                and share files while working from home. With Java I have been able to program a number of things on 
                the robot such as Potential Integral Derivative (PID) autos for the robot 
                which allows for precision and accuracy along side vision possessing for locking on targets
                . I also have programmed Motors, Encoders, Colour Sensors, Gyros, pneumatics, and LEDS. 
                These all would be programmed to allow our robots to do what they are fully capable of.
                Our current goals are to program a turret and the First
                Swerve Drive robot in BC which allows for multi-directional movement.
              </p>
            </div>
          </div>

          {/**Python Face Recognition*/}
          <div class="row">
            <div class="col mt-5">
              <h4 class="font-weight-normal text-left"> Python Face Recognition <a href="https://github.com/mohammadawwad/Pyhton-Vision-Processing" target="_blank">(GitHub Repo)</a></h4>
              <h5 class="font-weight-normal text-left">Feb 2021 - Present</h5>
            <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/EiKcTiYL2mw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col pt-5 mt-5">
              <p>
                Vision Processing is extremly important in todays world especialy as many big tech campanies have incorperated it in some sort of way to benifit them.
                So I decided to expand my knowledge in vision processing and develop a python project that uses the openCV to have my camera identify specific 
                indivisuals. It will also eventualy detect whether or not someone is wearing a mask and label them accordingly. I find that learning to do such a thing can be very impoetant
                now a days as we live amid the pandemic.
              </p>
            </div>
          </div>


          {/**Java Pathfinding application*/}
          <div class="row">
            <div class="col mt-5">
              <h4 class="font-weight-normal text-left"> Java Pathfinding Application <a href="https://github.com/mohammadawwad/Java-Pathfinding" target="_blank">(GitHub Repo)</a></h4>
              <h5 class="font-weight-normal text-left">Jan 2021 - Feb 2021</h5>
            <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/L006Nu65TKo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
          </div>
            <div class="col pt-5 mt-5">
              <p>
                This project is a pathfinding application that allows you to draw obstacles and create a map, as well as have one randomly generated.
                To start the visualization you will need to add the start and end location then click the the start button. You are also able to change the speed that
                the application will take to find the path. This project offers 2 diffrernt pathfinding algorithims which are Dijkstra and A*(A Star). Dijkstra 
                is an algorithim that use brute force to search through all nodes and once it locates the end location backtracks to find the route used. A* is developed diffrently, 
                it is a much smarter algorithim that searches in the gerneral direction that the finish location will be at. Once the A* algorithm locates the finish it will backtrack to find the shortest 
                possible route. This project was certainly fun and I gained tons of experience while developing it such as creating a GUI using Java Swing. I also learned a lot about 
                the fundamentals behind algorithms and how lists and all sorts of loops are important in todays world when it comes to programming.
              </p>
            </div>
          </div>

          {/**Shopping  Cart*/}
          <div class="row">
            <div class="col mt-5">
              <h4 class="font-weight-normal text-left"><a class="siteLink" href="https://mohammadawwad.github.io/Shopping-List/" target="_blank">Shopping Cart Application</a>  <a href="https://github.com/mohammadawwad/Shopping-List" target="_blank">(GitHub Repo)</a> </h4>
              <h5 class="font-weight-normal text-left">December 2020 - Jan Present</h5>
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
            <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/xl8iBhbuLDU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
          </div>
            <div class="col pt-5 mt-5">
              <p>
                Created Shopping List application using React, Puppeteer, and Node.js
                The app was created to make shopping easier and allows you to add any item
                you want and change its quantity. It also allows you to print all your data 
                in an organized table with the click of one button. The application is still 
                in progress and the next feature that will be available will give you an estimated 
                value of what it will cost you for everything in the cart. The app also has a note book feature incase you want to 
                specify and keep things in mind such as what store you want to shop from. I learned a lot while 
                creating this app such as states and async functions and how to scrape data from other
                websites.
              </p>
            </div>
          </div>

          {/**Personal Website*/}
          <div class="row pt-3 mt-5">
            <div class="col">
              <h4 class="font-weight-normal text-left">Web Portofolio   <a href="https://github.com/mohammadawwad/mohammadawwad.github.io" target="_blank">(GitHub Repo)</a></h4>
              <h5 class="font-weight-normal text-left">Jan 2021 - Jan 2021</h5>
              <img
              id="mcdonalds-img"
              class="img-fluid rounded mb-4 float-left"
              src={headshot}
              alt=""
            />
            </div>
            <div class="col mt-5">
              <p>
                This site was created to showcase my experience and projects that 
                I have created. I also learned a lot developing it, some of the main things 
                I learned was bootstrap along side JSX and how to use them with HTML, CSS, 
                and JavaScript. This project was definitely fun because I realise how much work and effort
                I put towards my projects.
              </p>
            </div>
          </div>


          {/**Hephaestus Website*/}
          <div class="row pt-3 mt-5">
            <div class="col">
              <h4 class="font-weight-normal text-left"><a class="siteLink"  href="http://www.hephaestus6390.com/" target="_blank">Hephaestus Website</a></h4>
              <h5 class="font-weight-normal text-left">Dec 2020 - Jan 2021</h5>
              <img
              class="img-fluid rounded mb-4 float-left"
              src={robotics}
              alt=""
            />
            </div>
            <div class="col mt-5">
              <p>
              In charge of remodeling website design and updating all sorts of information images and design ideas. 
              Had to work with others and point out necessary changes to be made and how 
              to go about them. Working on the Robotics teams website taught me a lot about 
              how to create and maintain websites using Weebly.
              </p>
            </div>
          </div>


          {/**Colour Switch*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">Colour Jump App <a href="https://github.com/mohammadawwad/Color-Jump-App" target="_blank">(GitHub Repo)</a></h4>
              <h5 class="font-weight-normal text-left">November 2019 - Jully 2020</h5>
              
              <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/diqS277vurk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col mt-5">
              <p>
                One of my favorite projects I have created was Colour Jump,
                this is a mobile game created with Unity and C#. The goal of the 
                game is to make it to the finish line without losing, you lose if 
                you touch a moving object that isn't the same colour as the 
                player. I had a lot of fun creating this app as it was supper complex
                . I added levels to unlock, an options bar that allows you to change volume, levels,
                buy new characters and much more using the points you have earned playing 
                the game.
              </p>
            </div>
          </div>
         

          {/**Dodge the blocks*/}
          <div class="row pt-3">
            <div class="col">
              <h4 class="font-weight-normal text-left">Dodge The Blocks App <a href="https://github.com/mohammadawwad/Dodge-The-Blocks" target="_blank">(GitHub Repo)</a></h4>
              <h5 class="font-weight-normal text-left">December 2018 - March 2019</h5>
              
              <iframe class="float-left" width="560" height="315" src="https://www.youtube.com/embed/svUxQG-mqC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            </div>
            <div class="col mt-5">
              <p>
                Dodge The Blocks was one of my first games developed using Unity and C#, 
                I am very proud of what I developed. The game is simple and has two controls
                Right and Left. The game consists of a cubed played that is constantly moving forward and 
                its speed increases over time. The goal of the game was to make it to the finish line without 
                hitting any of the obstacles in your way. Unfortunately since it was an old game I developed 
                in my early stages of programming it got corrupted and I do not have any footage of what it 
                looked like, but managed to recover the code. I have found an example of the game since it
                got really popular. I am extremely proud of this game since it taught me so much about 
                the core fundamentals of programming.
              </p>
            </div>
          </div>


      </div>
  );
}

export default Projects;