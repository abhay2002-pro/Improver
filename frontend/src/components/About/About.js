import React from 'react';
import "./About.css";
import satya from "./pictures/galaxy.jfif";
import abhay from "./pictures/abhay";
import aritro from "./pictures/aritro";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";
import mail from "./icons/envelope-fill.svg";

export default function About() {
    return (
        <div id="aboutpage">
            <h2 className="size">About Us</h2>
            <p className="text">
                We are from IIIT Sricity pursuing Btech and currently in second year
            </p>
            <div className="rows">
                <div className="card">
                    <div className="card-info">
                        <div className="card-front">
                            <div className="nametag">Satyakiran</div>
                            <img src={satya} alt="" className="sizing" />
                            <div className="card-text">
                                ML Engineer
                                <br />
                                Front-end developer
                                <br />
                                Familiar with HTML, CSS, Bootstrap, React.
                                <br/>
                            </div>
                            <div className="mail">
                                <img src={mail} alt="mailIcon" className="icon" /><br />
                                <a href="mailto:satyakiran56@gmail.com" target="_blank">satyakiran56@gmail.com</a>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="back-text">
                                Social Handles
                            </div>
                            <div className="back-">
                                <a href="https://github.com/galaxey56" target="_blank"><img src={github} alt="github" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="https://www.linkedin.com/in/satya-venkata-kiran-patnala-1321aa202/" target="_blank"><img src={linkedin} alt="linkedin" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="mailto:satyakiran56@gmail.com" target="_blank"><img src={mail} alt="mail" className="back-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="card-front">
                            <div className="nametag">Abhay Ray</div>
                            <img src={abhay} alt="" className="sizing" />
                            <div className="card-text">
                                Front-end developer
                                <br />
                                Familiar with HTML, CSS, Bootstrap, React.
                                <br />
                                WebOps Engineer
                            </div>
                            <div className="mail">
                                <img src={mail} alt="mailIcon" className="icon" /><br />
                                <a href="mailto:abhay2002@gmail.com" target="_blank">abhayray2002@gmail.com</a>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="back-text">
                                Social Handles
                            </div>
                            <div className="back-">
                                <a href="https://github.com/abhay2002-pro" target="_blank"><img src={github} alt="github" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="https://www.linkedin.com/in/abhay-ray-204b44187/" target="_blank"><img src={linkedin} alt="linkedin" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="mailto:abhay2002@gmail.com" target="_blank"><img src={mail} alt="mail" className="back-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="card-front">
                            <div className="nametag">Aritro Ghosh</div>
                            <img src={aritro} alt="" className="sizing" />
                            <div className="card-text">
                                Mern developer
                                <br />
                                Familiar with HTML, CSS, Bootstrap,React , Node and Express.
                                <br />
                            </div>
                            <div className="mail">
                                <img src={mail} alt="mailIcon" className="icon" /><br />
                                <a href="mailto:ghosharitro66@gmail.com" target="_blank">ghosharitro66@gmail.com</a>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="back-text">
                                Social Handles
                            </div>
                            <div className="back-">
                                <a href="https://github.com/aritro66" target="_blank"><img src={github} alt="github" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="https://www.linkedin.com/in/aritro-ghosh-9394651bb/" target="_blank"><img src={linkedin} alt="linkedin" className="back-icon" /></a>
                            </div>
                            <div className="back-">
                                <a href="mailto:ghosharitro66@gmail.com" target="_blank"><img src={mail} alt="mail" className="back-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
