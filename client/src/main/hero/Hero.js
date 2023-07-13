import React from 'react';

import image from '../../assets/images/hero_image.jpg';
import HeroPanel from './HeroPanel';
import './Hero.css'
function Hero(props) {
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });

    }
    return (
        <div id='home' className='hero_container'>
            <div className="hero_wrapper">
                 <div class="shadow"></div>
                <div className="hero_content">
                    <h3 className="hero_subtitle">Hey, I'm Nihat</h3>
                    <h1 className="hero_title">I enjoy designing tech websites</h1>
                    <button className="hero_btn"
                        onClick={() => scrollSmoothTo('contact')}
                    >Get in touch</button>
                </div>
                <div className="hero_image_wrapper">
                    <HeroPanel />
                    {/* <img src={image} alt="hero_image" /> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;