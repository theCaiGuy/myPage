"use strict";angular.module("myPageApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("myPageApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("myPageApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("myPageApp").run(["$templateCache",function(a){a.put("views/main.html",'<html>  <body> <section id="Welcome" class="smooth"> <div class="jumbotron"> <h1>Michael Cai</h1> <p class="lead"> <img src="images/Me.c63ff515.jpg" width="200" height="300" alt="It\'s me"><br> </p> <p>Future Focused. Learner. Dreamer.</p> </div> </section> <section id="About" class="smooth"> <div class="jumbotron"> <h2>About</h2> <p align="left">I\'m a Midwest kid at Stanford University in the heart of Silicon Valley. I have a passion for everything ground-breaking and high-tech, from AI to solar panels, and from R&D to business. As an optimist and idealist, I hope to use everything I learn to change the world for the better.</p> </div> </section> <section id="Resume" class="smooth"> <div class="jumbotron"> <h2>Resume</h2> <uib-accordion close-others="oneAtATime"> <div uib-accordion-group class="panel-default" heading="Skills" align="left"> <h4>Computer Programming</h4> <ul> <li>C, C++, Java, JavaScript/AngularJS, HTML, and Swift</li> <li>Algorithmic knowledge, including A*, search algorithms, and recursive functions</li> <li>Object oriented programming, abstract data types, memory and systems management</li> <li>Linux, MacOS, Windows, Eclipse, QT Creator, Sublime, Vim, Xcode, GitHub, Mercurial experience</li> <li>Web and mobile application development, responsible design</li> </ul> <h4>Scientific Research</h4> <ul> <li>Optimization of electrochemical sensors for medical devices</li> <li>Data collection, analysis, and presentation</li> <li>Lab work in professional Organic Chemistry and Cell Biology labs</li> </ul> <h4>Workplace Necessities</h4> <ul> <li>Excel, PowerPoint, Word, Cisco WebEx, Google Drive</li> <li>Excellent communicator, fast learner, team player, and leader</li> </ul> </div> <div uib-accordion-group class="panel-default" heading="Work Experience" align="left"> <h4>Medtronic PLC, Minneapolis, MN</h4> <h5>Non-intensive Diabetic Therapies Material Science Intern</h5> <ul> <li>Researched and selected new glucose sensor substrate for enhanced stability and longevity</li> <li>Explored chemical coatings to optimize sensor performance</li> <li>Collected and analyzed lab data using Excel and Minitab</li> <li>Presented findings in meeting of group leaders and medical device experts</li> <li>Gained expertise in electrochemical sensor construction and medical device development</li> </ul> <h4>Roeder Consulting Services, Plymouth, MN</h4> <h5>Data Entry Assistant</h5> <ul> <li>Digitized data and reorganized files for local homecare nurse recruiter</li> <li>Utilized CATS, Linkedin, Word, and Excel</li> </ul> </div> <div uib-accordion-group class="panel-default" heading="Education" align="left"> <h4>Stanford University, Stanford, CA</h4> <h5>B.S. Candidate in Computer Science</h5> <ul> <li>Course load includes Java, C++, systems, advanced calculus, economics, and chemistry</li> <li>Projects include memory allocator, queue/vector/map implementation, and “Google Maps”</li> <li>Alto Saxophonist in the Stanford Band</li> </ul> <h4>Wayzata High School, Plymouth, MN</h4> <ul> <li>4.0 GPA, Perfect ACT, 15 AP Classes, National Merit Finalist</li> <li>MN State Champion Quiz Bowl team captain, National Honor Society member</li> </ul> </div> <div uib-accordion-group class="panel-default" heading="Research" align="left"> <h4>Topczewski Lab, University of Minnesota, Minneapolis, MN</h4> <h5>Volunteer Researcher</h5> <ul> <li>Studied syntheses of small organic molecules</li> <li>Explored reactions involving furfural</li> </ul> <h4>Chen Lab, University of Minnesota, Minneapolis, MN</h4> <h5>Lab Shadow</h5> <ul> <li>Summer mentorship in cell biology lab studying adipose fat cells</li> </ul> </div></uib-accordion> </div> </section> <section id="Contact" class="smooth"> <div class="jumbotron"> <h2>Find me on the web</h2> <div> <p>Linkedin: <a class="btn btn-lg btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/thecaiguy" title="Find me on Linkedin"> <span class="fa fa-linkedin"></span> </a> Facebook: <a class="btn btn-lg btn-social-icon btn-facebook" href="https://www.facebook.com/thecaiguy" title="Find me on Facebook"> <span class="fa fa-facebook"></span> </a> Github: <a class="btn btn-lg btn-social-icon btn-github" href="https://github.com/theCaiGuy" title="Find me on Github"> <span class="fa fa-github"></span> </a></p> </div> </div> </section> </body> </html>')}]);