import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import './Header.css';

class Home extends Component {
  render() {
    

    return (
      <div id="home">
        <ParticlesBg type="circle" bg={true} />
        <div id="content">
        <h1>Grammerly</h1>
        <p>This project is a resume template that can be used as the project home page or resume page.</p>
        <button id="repo">Github</button>
        </div>
        
      </div>
    );
  }
}

export default Home;