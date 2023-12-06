import React from 'react'
import "./Poster.css";
import Fade from 'react-reveal/Fade';

const Poster = () => {
    return (
        <div className='Poster' id="home">
            <Fade top>
                <h1>Do you need a Plumber?</h1>
            </Fade>
            <br />
            <p>Your reliable solution for all your plumbing problems!</p>
        </div>
    )
}

export default Poster
