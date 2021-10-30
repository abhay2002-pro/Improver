import React,{useState} from 'react';
import "./Nav.css";
import menu from './menu.jpg';
import close from './close.jpeg';
import {useRouteMatch} from 'react-router-dom';

export default function Nav() {
    const match=useRouteMatch();
    const [Toggle,setToggle]=useState(false);
    return (
    
        <nav id="navbar">
          {/* {window.pageXOffset>450?setToggle(false):setToggle((prev)=>prev)} */}
          <ul className="navlayout">
            <li className={match.url=="/"?"current":""}>
              <a className="links" href="/">
                Home
              </a>
            </li>

            <li className={match.url=="/about"?"current":""}>
              <a className="links" href="/about">
                About
              </a>
            </li>

            <li className={match.url=="/grammer"?"current":""}>
              <a className="links" href="/grammer">
                Grammer
              </a>
            </li>

            <li className={match.url=="/paraphrase"?"current":""}>
              <a className="links" href="/paraphrase">
                Paraphrase
              </a>
            </li>
          </ul>
            <div id="toogle"><img src={Toggle?close:menu} onClick={()=>setToggle((prev)=>!prev)} style={{height:"48px",width:"48px"}}/></div>

        </nav>
        
    )
}
