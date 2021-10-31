import React from 'react';
import './Page404.css';

export default function Page404() {
    return (<div id="layout404">
        <div className="mars"></div>
        <img src="https://assets.codepen.io/1538474/404.svg" alt="" className="logo-404" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" alt="" className="meteor" />
        <p className="title">Oh no!!</p>
        <p className="subtitle">
            You’re either misspelling the URL <br /> or requesting a page that's no longer here.
        </p>
        <div align="center">
            <a className="btn-back" href="/">Go to Home page</a>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="" className="astronaut" />
        <img src="https://assets.codepen.io/1538474/spaceship.svg" alt="" className="spaceship" /></div>
    )
}
