import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';

import LanguageSelector from '../UI/LanguageSelector'
import Logo from '../../assets/images/logo amon.png'
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';
import SocialBar from './SocialBar';
import { HiOutlineMail } from 'react-icons/hi';
import './MainNavigation.css';
function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return (_) => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={'header'}
            style={scrolled ? {
                background: 'linear-gradient( 180deg,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.8))'
            } : null}
        >


            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            {
                <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}
                    style={{ top: '80px', paddingTop: '100px' }}
                >
                    <NavLinks
                        sidebar_nav_item_wrapper='sidedrawer-navlink_wrapper'
                        className={'sidedrawer-navlinks'}
                        onClick={props.onClick}
                        closeDrawer={closeDrawerHandler}
                    />
                    <SocialBar />
                </SideDrawer>
            }

            <div className={'main_header p50'}>
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
                <div className='logo_wrapper'>
                    <img src={Logo} alt='logo' className='logo' />
                </div>


                <NavLinks />
                <div className="main_header_left-item">
                    <a className='navbar_email' href='mailto:onalnihat1986@gmail.com'><HiOutlineMail />onalnihat1986@gmail.com</a>
                    <LanguageSelector />
                </div>

                {/* <SocialBar className={scrolled ? "social_out" : "social_in"} /> */}
            </div>

        </div >
    );
}

export default MainNavigation;