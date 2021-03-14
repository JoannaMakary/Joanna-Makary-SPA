import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../core/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/grid.css";
import "../scripts/boxmodel";
import "../scripts/contact";
import HorizontalScroll from "../scripts/horizontal-scroll";

AOS.init({
  duration: 1200,
  easing: "ease-in-out-back",
});

const Homepage = styled.div`
  @media (min-width: 1px) {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  @media (min-width: 1080px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const AboutMe = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: auto;
    background-color: rgb(22, 24, 32);
    padding-bottom: 5vh;
  }
`;

const AboutBlurb = styled.div`
  @media (min-width: 1px) {
    font-size: 1.2rem;
    color: white;
    width: 66%;
    margin: auto;
    text-align: left;
    padding-top: 15vh;
  }
  @media (min-width: 455px) {
    padding-top: 20vh;
  }
  @media (min-width: 600px) {
    padding-top: 40vh;
  }
  @media (min-width: 650px) {
    padding-top: 50vh;
  }
  @media (min-width: 700px) {
    padding-top: 60vh;
  }
  @media (min-width: 750px) {
    padding-top: 70vh;
  }
  @media (min-width: 768px) {
    padding-top: 5vh;
  }
`;

const AboutSideBar = styled.div`
  @media (min-width: 1px) {
    font-size: 5rem;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 5px;
    color: #b0bfff;
    position: absolute;
    transform: rotate(-90deg);
    margin-top: 160px;
    margin-left: -195px;
  }
  @media (min-width: 768px) {
    margin-left: -175px;
  }
`;

const ProjectSideBar = styled.div`
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 5px;
  color: #b0bfff;
  position: absolute;
  transform: rotate(90deg);
  margin-top: 150px;
  right: -185px;
`;

const JoannaText = styled.h1`
  @media (min-width: 1px) {
    font-size: 4rem;
    width: 100%;
    letter-spacing: 2px !important;
    color: #b0bfff;
    font-weight: 600;
  }
  @media (min-width: 480px) {
    font-size: 6rem;
  }
`;

const JobTitle = styled.h2`
  @media (min-width: 1px) {
    text-shadow: 3px 3px 20px #000000;
    font-size: 1.5em;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 5px !important;
  }
  @media (min-width: 1080px) {
  }
`;

const ErrorMessage = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: rgb(207, 102, 121);
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: 500;
  border: 2px solid #81424d;
`;

const Buttons = styled.div`
  @media (min-width: 1px) {
    text-shadow: 3px 3px 20px #000000;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin-top: 20px;
    color: white;
    letter-spacing: 2px;
    font-size: 1rem;
    align-items: flex-start;
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    border: 2px solid #b0bfff;
    text-align: center;
    font-weight: 500;
    vertical-align: middle;
    line-height: 1.5;
    border-radius: 0.5rem;
    transition: 0.3s;
    width: 100%;
    &:hover {
      background-color: rgba(176, 191, 255, 0.8);
      border: 2px solid white;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 20px;
    width: auto;
  }
  @media (min-width: 1080px) {
    font-size: 1.25rem;
  }
`;

const Projects = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: auto;
    background-color: #1e2338;
    background: linear-gradient(rgb(22, 24, 32), #1e2338);
    color: white;
    font-size: 1.2rem;
  }
`;

const ProjectHeader = styled.div`
  font-size: 1em;
  color: white;
  letter-spacing: 3px;
  margin-top: 50px;
`;

const ProjectTitle = styled.div`
  font-size: 2em;
  color: #b0bfff;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ProjectInfo = styled.div`
  padding-bottom: 20px;
`;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  @media (min-width: 1px) {
    padding-top: 80px;
  }
  @media (min-width: 768px) {
    padding-top: 0px;
    position: relative;
    height: 100%;
    padding: 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  @media (min-width: 1px) {
    background: linear-gradient(rgb(22, 24, 32), #1e2338);
    position: relative;
    height: auto;
    width: 100vw;
    flex-shrink: 0;
    padding: 2vw 2vw 8vw 8vw;
  }
  @media (min-width: 768px) {
    background: none;
    position: relative;
    height: auto;
    width: 100vw;
    flex-shrink: 0;
    padding: 2vw 2vw 0vw 8vw;
    border-right: 2px rgba(176, 191, 255, 0.1) dashed;
  }
`;

const ContactMe = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: auto;
    background-color: #1e2338;
    background: linear-gradient(#1e2338, #b0bfff);
    padding: 20vh 5vw 5vh 5vw;
    color: white;
    font-size: 1.2rem;
  }
`;

const Footer = styled.div`
  @media (min-width: 1px) {
    width: 100%;
    position: relative;
    z-index: 99;
    height: 33vh;
    background: linear-gradient(#1e2338, black);
    color: white;
    text-align: center;
    padding-top: 75px;
    font-size: 1.2em;
  }
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
    };
  }

  render() {
    let vw = window.innerWidth;
    return (
      <Homepage className="fade-in">
        <a id="backToTopButton"></a>
        {this.state.errorMessage && (
          <ErrorMessage>
            <i className="fas fa-exclamation-circle ml-3 mr-2"></i> {this.state.errorMessage}{" "}
          </ErrorMessage>
        )}
        <Menu />
        <div id="main" className="content">
          <div className="content__title">
            <JoannaText>Joanna Makary</JoannaText>
            <JobTitle>Junior Full-Stack Developer</JobTitle>
            <Link to="/#contact">
              <Buttons id="contact-btn">CONTACT ME </Buttons>
            </Link>
          </div>
        </div>
        <AboutMe id="about">
          <AboutSideBar id="about-side">About Me</AboutSideBar>
          <img id="click-here" src="https://i.imgur.com/hdIAq01.png" />
          <img id="fox-head1" src="https://i.imgur.com/1xk2aKW.png" />
          <img id="bokeh1" src="https://pngimg.com/uploads/bokeh/bokeh_PNG12.png" />
          <div className="row">
            <div className="col-md">
              <div className="stack text-center" data-aos="fade-up">
                <label data-aos="fade-left" data-aos-duration="2000" id="front-label">
                  Front-end
                </label>
                <div className="front-box">
                  <div className="inner-text">
                    <strong id="user-view">
                      User's View<div className="close-button">&#160;</div>
                      <div className="min-button">&#160;</div>
                    </strong>
                  </div>
                  <div className="inner-text">Responsive</div>
                  <div className="inner-text">Mobile-first</div>
                  <div className="inner-text">Easy-to-use</div>
                  <div className="inner-text">Intuitive UI/UX</div>
                </div>

                <label data-aos="fade-left" data-aos-duration="2000" id="back-label">
                  Back-end
                </label>
                <div className="back-box">
                  <div className="inner-text">
                    Servers, applications, databases. Logic and functionality.
                  </div>
                </div>

                <label data-aos="fade-left" data-aos-duration="2000" id="databases-label">
                  Database
                </label>

                <div className="database-box">
                  <div className="inner-text">
                    Design database structure, store important data, extract &#38; update &#38;
                    delete.
                  </div>
                  <svg viewBox="0 0 100 100">
                    <ellipse cx="50" cy="75" rx="45" ry="20" />
                    <ellipse cx="50" cy="50" rx="45" ry="20" />
                    <ellipse cx="50" cy="25" rx="45" ry="20" />
                  </svg>
                </div>
                <label data-aos="fade-left" data-aos-duration="2000" id="devops-label">
                  DevOps
                </label>
                <div className="devops-box">
                  <img id="devops-img" src="https://i.imgur.com/GJ6nxMm.png" />
                </div>

                <label data-aos="fade-left" data-aos-duration="2000" id="other-label">
                  Other
                </label>
                <div className="other-box">
                  <div className="inner-text">
                    Continuously learning the best tools &#38; practices for each application.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <AboutBlurb data-aos="fade-up" className="mb-3">
                <span style={{ fontSize: "2em", fontWeight: "700", color: "#b0bfff" }}>
                  Hi, I'm Joanna Makary. It's nice to meet you.
                </span>
                <br />
                <br />
                I'm a Junior Full-Stack Developer in Toronto, Ontario. I graduated from Ryerson
                University with a B.Sc. in Computer Science in 2018.
                <br />
                <br />I am currently seeking a job opportunity as a Junior Developer for a company
                that I love and believe in.
              </AboutBlurb>

              <div id="skillTable">
                <div>
                  <div data-aos="fade-right" className="col skillLabel mb-1">
                    Tools &#38; Technologies
                  </div>
                </div>
                <div className="row">
                  <div
                    data-aos="flip-left"
                    data-aos-duration="1000"
                    id="front-tools"
                    className="col-sm"
                  >
                    <img src="https://i.imgur.com/ZpNHPdY.png" />
                    <br />
                    HTML5, CSS3, JavaScript, jQuery. <br />
                    Frameworks: React, Angular, Bootstrap
                    <br />
                    Chrome Devtools
                  </div>
                  <div
                    data-aos="flip-left"
                    data-aos-duration="1500"
                    id="back-tools"
                    className="col-sm"
                  >
                    <img src="https://i.imgur.com/j3Vcy6l.png" />
                    <br />
                    PHP, Python, Java, JavaScript
                    <br />
                    Frameworks: Express, Node
                  </div>
                  <div
                    data-aos="flip-left"
                    data-aos-duration="2000"
                    id="data-tools"
                    className="col-sm"
                  >
                    <img src="https://i.imgur.com/G8qXeMJ.png" />
                    <br />
                    Web Storage
                    <br />
                    SQL - NoSQL, MySQL
                    <br />
                    MongoDB
                  </div>
                </div>
                <div className="row">
                  <div data-aos="flip-left" id="dev-tools" className="col-sm">
                    <img src="https://i.imgur.com/D0JYPuz.png" />
                    <br />
                    Git/Github
                    <br />
                    nginx, AWS
                    <br />
                    VMWare/Virtualbox
                  </div>
                  <div data-aos="flip-left" id="other-tools" className="col-sm">
                    <img src="https://i.imgur.com/7NpOszx.png" />
                    <br />
                    RESTful Routing, APIs
                    <br />
                    CMS (Wordpress)
                    <br />
                    XML/XSLT
                    <br />
                    Adobe Photoshop &#38; Illustrator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AboutMe>
        <Projects id="projectz">
          <img id="bokeh3" src="https://pngimg.com/uploads/bokeh/bokeh_PNG12.png" />
          <img id="projects" src="https://i.imgur.com/KfFWuG6.png" />
          <ProjectSideBar id="project-side">PROJECTS</ProjectSideBar>

          <HorizontalSection>
            {vw >= 768 && (
              <HorizontalScroll>
                <CardsContainer>
                  <ProjectCard id="royals">
                    <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />
                    <div className="row" data-aos="fade-right" data-aos-once="true">
                      <div className="col-sm-6">
                        <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                        <ProjectTitle>MapleRoyals Price Guide</ProjectTitle>
                        <ProjectInfo>
                          A website dedicated to the in-game market system in MapleRoyals.
                          <ul className="mt-3">
                            <li>Provides user with prices for in-game items.</li>
                            <li>Provides stats on the % of change since last updated</li>
                            <li>User register/login feature</li>
                            <li>
                              Specific admin features (admins can edit prices, add items, etc)
                            </li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS, React,
                          MongoDB, Express, Node (MERN Stack)
                        </ProjectInfo>
                        <a href="https://mapleroyalspriceguide.com/">
                          <Buttons>View Website</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <img id="project-1" src="https://i.imgur.com/gcChAxT.png" />
                        <img
                          id="project-1-gif"
                          src="https://media0.giphy.com/media/Q1UPgr2bvSWUXOYvC8/giphy.gif"
                        />
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard id="prc-1">
                    <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>WORKPLACE PROJECT</ProjectHeader>
                        <ProjectTitle>PRC Caterers (WordPress)</ProjectTitle>
                        <ProjectInfo>
                          PRC Caterers is a kosher catering company that I currently work for as
                          Junior Developer and Graphic Designer/Social Media Manager.
                          <ul className="mt-3">
                            <li>Creating order forms for e-commerce</li>
                            <li>Custom CSS and JavaScript for webpages</li>
                            <li>Plan, develop, design, test, deploy, maintain, optimize.</li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS, Javascript,
                          PHP
                        </ProjectInfo>
                        <a href="https://github.com/JoannaMakary/PRC-Caterers">
                          <Buttons className="mr-3">View Code</Buttons>
                        </a>
                        <a href="https://prccaterers.com/passover-menu/">
                          <Buttons>Website</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <img id="project-2" src="https://i.imgur.com/oWsieTO.png" />
                        <img
                          id="project-2-gif"
                          src="https://media2.giphy.com/media/2iL5eLtQIzYunrxMA6/giphy.gif"
                        />
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard id="prc-2">
                    <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>WORKPLACE PROJECT</ProjectHeader>
                        <ProjectTitle>
                          PRC Caterers
                          <br />
                          Graphic Design &#38; Social Media
                        </ProjectTitle>
                        <ProjectInfo>
                          PRC Caterers is a kosher catering company that I currently work for as
                          Junior Developer and Graphic Designer/Social Media Manager.
                          <ul className="mt-3">
                            <li>Created designs for our new soup labels.</li>
                            <li>Created designs for proposals to send to clients.</li>
                            <li>Creating social media campaigns and posts daily.</li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> Adobe Photoshop,
                          Illustrator
                        </ProjectInfo>
                        <a href="https://drive.google.com/drive/folders/14wwzGtT8qypDnlqGyTdNeQaNS5XJQFVt?usp=sharing">
                          <Buttons className="mr-3">SELECTED WORKS</Buttons>
                        </a>
                        <a href="https://instagram.com/prccaterers">
                          <Buttons>Instagram</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <img id="project-3" src="https://i.imgur.com/qV2tI7u.png" />
                        <img
                          id="project-3-gif"
                          src="https://media3.giphy.com/media/Jpdart0MMYzAb0QZUo/giphy.gif"
                        />
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard>
                    <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>WORKPLACE/PERSONAL PROJECT</ProjectHeader>
                        <ProjectTitle>Jo's Nutrition Calculator</ProjectTitle>
                        <ProjectInfo>
                          A program that I designed to help calculate nutritional information based
                          on a given recipe. This was mainly created to help with getting nutrition
                          for our products at PRC.
                          <ul className="mt-3">
                            <li>Takes the input from user's recipe</li>
                            <li>Uses the USDA nutrition API to look up each item.</li>
                            <li>
                              Ouputs a nutritional table based on the given serving size/portion.
                            </li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> Python, APIs
                        </ProjectInfo>
                        <a href="https://github.com/JoannaMakary/JoNutritionalInfo">
                          <Buttons className="mr-3">VIEW CODE</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <img id="project-4" src="https://i.imgur.com/3T4Yqt3.png" />
                        <img
                          id="project-4-gif"
                          src="https://media3.giphy.com/media/fXeQZ1refNWFanpLBk/giphy.gif"
                        />
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard>
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                        <ProjectTitle>MapleRoyals Price Bot</ProjectTitle>
                        <ProjectInfo>
                          A Python program that I designed to help extract price information for the
                          market system in the game MapleRoyals. This assists me in gathering prices
                          for the website I have created (see first project). Currently in the
                          process of training the bot to be more accurate.
                          <ul className="mt-3">
                            <li>Takes in a video recording of the game</li>
                            <li>Splits the video into multiple frames and removes duplicates</li>
                            <li>Scans the frames for item information and prices</li>
                            <li>Stores this information into an excel sheet</li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> Python, OCR (Tesseract),
                          VirtualBox (Linux)
                        </ProjectInfo>
                        <a href="https://github.com/JoannaMakary/Royals-OCR">
                          <Buttons className="mr-3">VIEW CODE</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="https://github.com/JoannaMakary/Royals-OCR">
                          <img id="project-5" src="https://i.imgur.com/WAjWgwP.png" />
                        </a>
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard>
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                        <ProjectTitle>World of League - Browser RPG</ProjectTitle>
                        <ProjectInfo>
                          World of League is a fan-made browser-based RPG inspired by the
                          RPG/strategy MOBA League of Legends from Riot Games. You start the game as
                          the first champion, Singed, and battle monsters that appear to gain EXP
                          and gold, to be able to level up and purchase additional items and
                          champions. Specifically made to improve my programming of object-oriented
                          PHP.
                          <ul className="mt-3">
                            <li>Creating an account to login with.</li>
                            <li>A shop to buy additional champions, items, and abilities.</li>
                            <li>
                              Randomly spawned monsters that appear while exploring the map, and
                              options to fight or run.
                            </li>
                          </ul>
                          <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS,
                          Object-Oriented PHP
                        </ProjectInfo>
                        <a href="https://github.com/JoannaMakary/World-of-League">
                          <Buttons className="mr-3">VIEW CODE</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="https://github.com/JoannaMakary/World-of-League">
                          <img id="project-6" src="https://i.imgur.com/x2oneLd.png" />
                        </a>
                      </div>
                    </div>
                  </ProjectCard>
                  <ProjectCard>
                    <div className="row">
                      <div className="col-sm-6">
                        <ProjectHeader>VIEW MORE</ProjectHeader>
                        <ProjectTitle>
                          Visit my GitHub to see more <br />
                          of my current projects
                        </ProjectTitle>
                        <ProjectInfo>
                          This was a short list of my selected works. My other public projects are
                          available on my GitHub. Private, in-progress, projects are not included
                          but may be available one day!
                        </ProjectInfo>
                        <a href="https://github.com/JoannaMakary?tab=repositories">
                          <Buttons className="mr-3">VISIT GITHUB</Buttons>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="https://github.com/JoannaMakary?tab=repositories">
                          <img id="project-7" src="https://i.imgur.com/p2SCOOv.png" />
                        </a>
                      </div>
                    </div>
                  </ProjectCard>
                </CardsContainer>
              </HorizontalScroll>
            )}
            {vw < 768 && (
              <CardsContainer>
                <ProjectCard id="royals">
                  <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />
                  <div className="row" data-aos="fade-right" data-aos-once="true">
                    <div className="col-sm-6">
                      <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                      <ProjectTitle>MapleRoyals Price Guide</ProjectTitle>
                      <ProjectInfo>
                        A website dedicated to the in-game market system in MapleRoyals.
                        <ul className="mt-3">
                          <li>Provides user with prices for in-game items.</li>
                          <li>Provides stats on the % of change since last updated</li>
                          <li>User register/login feature</li>
                          <li>Specific admin features (admins can edit prices, add items, etc)</li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS, React, MongoDB,
                        Express, Node (MERN Stack)
                      </ProjectInfo>
                      <a href="https://mapleroyalspriceguide.com/">
                        <Buttons>View Website</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <img id="project-1" src="https://i.imgur.com/gcChAxT.png" />
                      <img
                        id="project-1-gif"
                        src="https://media0.giphy.com/media/Q1UPgr2bvSWUXOYvC8/giphy.gif"
                      />
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard id="prc-1">
                  <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>WORKPLACE PROJECT</ProjectHeader>
                      <ProjectTitle>PRC Caterers (WordPress)</ProjectTitle>
                      <ProjectInfo>
                        PRC Caterers is a kosher catering company that I currently work for as
                        Junior Developer and Graphic Designer/Social Media Manager.
                        <ul className="mt-3">
                          <li>Creating order forms for e-commerce</li>
                          <li>Custom CSS and JavaScript for webpages</li>
                          <li>Plan, develop, design, test, deploy, maintain, optimize.</li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS, Javascript, PHP
                      </ProjectInfo>
                      <a href="https://github.com/JoannaMakary/PRC-Caterers">
                        <Buttons className="mr-3">View Code</Buttons>
                      </a>
                      <a href="https://prccaterers.com/passover-menu/">
                        <Buttons>Website</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <img id="project-2" src="https://i.imgur.com/oWsieTO.png" />
                      <img
                        id="project-2-gif"
                        src="https://media2.giphy.com/media/2iL5eLtQIzYunrxMA6/giphy.gif"
                      />
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard id="prc-2">
                  <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>WORKPLACE PROJECT</ProjectHeader>
                      <ProjectTitle>
                        PRC Caterers
                        <br />
                        Graphic Design &#38; Social Media
                      </ProjectTitle>
                      <ProjectInfo>
                        PRC Caterers is a kosher catering company that I currently work for as
                        Junior Developer and Graphic Designer/Social Media Manager.
                        <ul className="mt-3">
                          <li>Created designs for our new soup labels.</li>
                          <li>Created designs for proposals to send to clients.</li>
                          <li>Creating social media campaigns and posts daily.</li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> Adobe Photoshop,
                        Illustrator
                      </ProjectInfo>
                      <a href="https://drive.google.com/drive/folders/14wwzGtT8qypDnlqGyTdNeQaNS5XJQFVt?usp=sharing">
                        <Buttons className="mr-3">SELECTED WORKS</Buttons>
                      </a>
                      <a href="https://instagram.com/prccaterers">
                        <Buttons>Instagram</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <img id="project-3" src="https://i.imgur.com/qV2tI7u.png" />
                      <img
                        id="project-3-gif"
                        src="https://media3.giphy.com/media/Jpdart0MMYzAb0QZUo/giphy.gif"
                      />
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard>
                  <img className="animate-click" src="https://i.imgur.com/W8pqzv4.png" />{" "}
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>WORKPLACE/PERSONAL PROJECT</ProjectHeader>
                      <ProjectTitle>Jo's Nutrition Calculator</ProjectTitle>
                      <ProjectInfo>
                        A program that I designed to help calculate nutritional information based on
                        a given recipe. This was mainly created to help with getting nutrition for
                        our products at PRC.
                        <ul className="mt-3">
                          <li>Takes the input from user's recipe</li>
                          <li>Uses the USDA nutrition API to look up each item.</li>
                          <li>
                            Ouputs a nutritional table based on the given serving size/portion.
                          </li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> Python, APIs
                      </ProjectInfo>
                      <a href="https://github.com/JoannaMakary/JoNutritionalInfo">
                        <Buttons className="mr-3">VIEW CODE</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <img id="project-4" src="https://i.imgur.com/3T4Yqt3.png" />
                      <img
                        id="project-4-gif"
                        src="https://media3.giphy.com/media/fXeQZ1refNWFanpLBk/giphy.gif"
                      />
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard>
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                      <ProjectTitle>MapleRoyals Price Bot</ProjectTitle>
                      <ProjectInfo>
                        A Python program that I designed to help extract price information for the
                        market system in the game MapleRoyals. This assists me in gathering prices
                        for the website I have created (see first project). Currently in the process
                        of training the bot to be more accurate.
                        <ul className="mt-3">
                          <li>Takes in a video recording of the game</li>
                          <li>Splits the video into multiple frames and removes duplicates</li>
                          <li>Scans the frames for item information and prices</li>
                          <li>Stores this information into an excel sheet</li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> Python, OCR (Tesseract),
                        VirtualBox (Linux)
                      </ProjectInfo>
                      <a href="https://github.com/JoannaMakary/Royals-OCR">
                        <Buttons className="mr-3">VIEW CODE</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="https://github.com/JoannaMakary/Royals-OCR">
                        <img id="project-5" src="https://i.imgur.com/WAjWgwP.png" />
                      </a>
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard>
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>PERSONAL PROJECT</ProjectHeader>
                      <ProjectTitle>World of League - Browser RPG</ProjectTitle>
                      <ProjectInfo>
                        World of League is a fan-made browser-based RPG inspired by the RPG/strategy
                        MOBA League of Legends from Riot Games. You start the game as the first
                        champion, Singed, and battle monsters that appear to gain EXP and gold, to
                        be able to level up and purchase additional items and champions.
                        Specifically made to improve my programming of object-oriented PHP.
                        <ul className="mt-3">
                          <li>Creating an account to login with.</li>
                          <li>A shop to buy additional champions, items, and abilities.</li>
                          <li>
                            Randomly spawned monsters that appear while exploring the map, and
                            options to fight or run.
                          </li>
                        </ul>
                        <span style={{ color: "#b0bfff" }}>Tools:</span> HTML, CSS, Object-Oriented
                        PHP
                      </ProjectInfo>
                      <a href="https://github.com/JoannaMakary/World-of-League">
                        <Buttons className="mr-3">VIEW CODE</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="https://github.com/JoannaMakary/World-of-League">
                        <img id="project-6" src="https://i.imgur.com/x2oneLd.png" />
                      </a>
                    </div>
                  </div>
                </ProjectCard>
                <ProjectCard>
                  <div className="row">
                    <div className="col-sm-6">
                      <ProjectHeader>VIEW MORE</ProjectHeader>
                      <ProjectTitle>
                        Visit my GitHub to see more <br />
                        of my current projects
                      </ProjectTitle>
                      <ProjectInfo>
                        This was a short list of my selected works. My other public projects are
                        available on my GitHub. Private, in-progress, projects are not included but
                        may be available one day!
                      </ProjectInfo>
                      <a href="https://github.com/JoannaMakary?tab=repositories">
                        <Buttons className="mr-3">VISIT GITHUB</Buttons>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="https://github.com/JoannaMakary?tab=repositories">
                        <img id="project-7" src="https://i.imgur.com/p2SCOOv.png" />
                      </a>
                    </div>
                  </div>
                </ProjectCard>
              </CardsContainer>
            )}
          </HorizontalSection>
        </Projects>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <div id="contact-me" className="container">
              <form method="POST" action="https://formspree.io/f/moqpdaeb" id="contact-form">
                <h2 id="contact-text">Contact me</h2>
                <div className="form-group">
                  <p>
                    <label>Name:</label>
                    <input id="name" name="name" type="text" />
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label>Email Address:</label>
                    <input name="email" id="email" type="email" />
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label>Message:</label>
                    <textarea id="message" name="message"></textarea>{" "}
                  </p>
                </div>

                <p>
                  <button type="submit">Submit</button>
                </p>
                <span style={{ color: "white", fontSize: "0.7em", fontWeight: "600" }}>
                  Alternatively, you may e-mail me at{" "}
                  <a href="mailto:joannamakary@hotmail.com">joannamakary@hotmail.com</a>
                </span>
              </form>
              <div id="status"></div>
            </div>
          </div>
        </div>
        <Footer>
          <nav>
            <a href="https://www.linkedin.com/in/joannamakary/">Linkedin</a> |{" "}
            <a href="https://github.com/JoannaMakary?tab=repositories">Github</a> |{" "}
            <a href="#">Resume</a>
          </nav>
          <br />
          &#169; 2021 Joanna Makary
        </Footer>
      </Homepage>
    );
  }
}

export default Home;
