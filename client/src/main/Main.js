import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from "../shared/context/Language";
import Hero from './hero/Hero';
import Portfolio from './portfolio/Portfolio';
import About from './aboutus/About';
import Contact from './contact/Contact';

import './Main.css';
function Main() {
    const lang = useContext(LanguageContext);

    return (
        <div className="main_container">
            <Hero />
            <About
            // title={lang.dictionary["navlinks"][0]}
            />
            <Portfolio />
            <Contact />


        </div>
    );
}

export default Main;