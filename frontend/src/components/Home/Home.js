import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Home extends Component {
  render() {
    

    return (
      <div id="home">
        <ParticlesBg type="circle" bg={true} />
        <div id="content">
        <h1>Improver</h1>
        <p>This project is a resume template that can be used as the project home page or resume page.</p>
        <a href="https://github.com/abhay2002-pro/Improver" id="repo"><FontAwesomeIcon icon={faGithub} /> Github</a>
        </div>
        
      </div>
    );
  }
}

export default Home;