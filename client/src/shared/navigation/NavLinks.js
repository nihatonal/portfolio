import React, { useState,useContext } from 'react';
import { NavLink } from "react-router-dom";

import { LanguageContext } from "../context/Language";
import './NavLinks.css';
function NavLinks(props) {
    const lang = useContext(LanguageContext);

    const [active, setActive] = useState()
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',

        });
        setActive(elementId)

    }

    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'home' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('home')}
                >
                    {lang.dictionary["navlinks"][0]}
                </NavLink>

            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>

                <NavLink
                    className={active === 'aboutus' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('aboutus')}
                >
                   {lang.dictionary["navlinks"][1]}
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'portfolio' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('portfolio')}
                >
                   {lang.dictionary["navlinks"][2]}
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={active === 'contact' ? "nav-item active-nav-item" : "nav-item"}
                    to=""
                    onClick={() => scrollSmoothTo('contact')}
                >
                   {lang.dictionary["navlinks"][3]}
                </NavLink>
            </div>


        </div>
    );
}

export default NavLinks;