import React from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import './home.scss';
import Bounce from 'react-reveal/Bounce';

const Home = ()=> {
    return(
        <Zoom>
        <div className="landing">
            <div className="dark-overflay">
                <div className="landing-inner">
                <Bounce left>
                    <p className="a1">Michael Anggriawan</p>
                </Bounce>
                <Bounce right>
                    <p className="a2">Front End Developer</p>
                </Bounce>
                </div>
                <div className="social-media">
                        <a href="/"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="/"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="/"><i className="fab fa-linkedin fa-2x"></i></a>
                        <a href="/"><i className="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>
        </Zoom>
    )   
}

export default Home;