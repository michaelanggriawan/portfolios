import Fade from 'react-reveal/Fade';
import React from 'react';
import './resume.scss';
import Pf from '../../assets/img/Hero-1.jpg'

const Resume = ()=> {
    return(
        <section className="container">
            <div className="profile-grid my-1">
            <Fade top>
                <div className="profile-top bg bg-primary">
                    <img src={ Pf } className="round-img my-1" alt=""/>
                    <h1 className="large">Michael Anggriawan</h1>
                    <p className="lead">Front End Developer</p>
                    <div className="icons my-1">
                        <a href="/">
                            <i className="fas fa-globe fa-2x"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
                </Fade>
                <Fade top>
                <div className="profile-about bg-light p-2">
                    <h2 className="text-primary">Michael's Bio</h2>
                        <p>
                            I'am  a front end developer with good passion to learn new things in front end development, I am work with node js, react js and MongoDB for years and I have been practice many things about web development for a long time such as SASS, Git & Github, Webpack, and Gulp etc.
                        </p>
                        <div className="line"> </div>
                            <h2 className="text-primary">Skill Set</h2>
                            <div className="skills">
                                    <div className="p-1">
                                        <i className="fas fa-check"></i> HTML
                                    </div>
                                    <div className="p-1">
                                        <i className="fas fa-check"></i> CSS
                                    </div>
                                    <div className="p-1">
                                        <i className="fas fa-check"></i> JavaScript
                                    </div>
                                    <div className="p-1">
                                        <i className="fas fa-check"></i> Java
                                    </div>
                           </div>
                      </div> 
                      </Fade>
                      {/* Experiences */}
                      
                      <div className="profile-exp bg-white p-2">
                      <Fade top>
                          <h2 className="text-primary">Experiences </h2>
                          <div>
                              <h3>Unixon Branding</h3>
                              <p>Juny 2016 - January 2017</p>
                              <p><strong>Position: </strong> IT Operation</p>
                              <p><strong>Description: </strong></p>
                              <ul >
                                  <li>Install sotware & computer drivers </li>
                                  <li>Install Os Windows, linux, and etc.</li>
                                  <li>Maintain printer to keep better performance</li>
                              </ul>
                          </div>
                        </Fade>
                        <Fade top>
                          <div>
                              <h3>PT.Telkom Indonesia</h3>
                              <p>Juni 2015 - Agustsus 2015</p>
                              <p><strong>Position: </strong>Network Engineer (Intership)</p>
                              <p><strong>Description: </strong>I'am intership at Telkom, I'am learning man things from Telkom
                              such as design topology, making LAN  with utp cable & router.</p>
                          </div>
                        </Fade>
                      </div>

                       {/* Educations */}
                       <div className="profile-edu bg-white p-2">
                       <Fade top>
                          <h2 className="text-primary">Educations</h2>
                          <div>
                              <h3>Matana University</h3>
                              <p>June 2017 - June 2022</p>
                              <p><strong>Degree: </strong>Bachelor</p>
                              <p><strong>Field of study: </strong>Computer Sciences</p>
                              <p><strong>Description: </strong></p>
                              <ul>
                                  <li>Introduction Programming and general engineering study</li>
                                  <li>Implementation OOP programming with c++ & Java.</li>
                              </ul>
                          </div>
                          </Fade>
                      </div>
                      {/* Github repos */}
                      <Fade>
                      <div className="profile-github">
                        <h2 className="text-primary my-1">
                            <i className="fab fa-github"></i> Github repos
                        </h2>
                        <div className="repo bg-white my-1">
                            <div>
                                <h4><a href="https://github.com/michaelanggriawan/training_app">Lyrics Match</a></h4>
                                <p>A web application to find any lyrics song, I build app this with React JS & Bootstrap.</p>
                            </div>

                            <div className="bt">
                                <ul>
                                    <li className="badge badge-primary">Stars: 0</li>
                                    <li className="badge badge-dark">Watchers: 2</li>
                                    <li className="badge badge-light">Forks: 2</li>
                                </ul>
                            </div>
                        </div>

                        <div className="repo bg-white my-1">
                            <div>
                                <h4><a href="https://github.com/michaelanggriawan/lyricsmatch">Training App</a></h4>
                                <p>A web application to propose schedule course. where you can request any course, time, and instructor. I build this application with React JS, Redux & Firebase.</p>
                            </div>

                            <div className="bt">
                                <ul >
                                    <li className="badge badge-primary">Stars: 0</li>
                                    <li className="badge badge-dark">Watchers: 0</li>
                                    <li className="badge badge-light">Forks: 0</li>
                                </ul>
                            </div>
                        </div>
                      </div>
                      </Fade>
               </div>
        </section>
    )
}

export default Resume;