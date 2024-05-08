import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsPerson } from "react-icons/bs";
import { LuHelpingHand } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

import { BiDonateHeart } from "react-icons/bi";
//import {CgFileDocument} from "react-icons/cg";


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <Link to='/'>
            <h1 title='Home' className='Logo ml-3'><span className='ml-1'>Home</span></h1>
        </Link>
        
        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/about"><BsPerson/><span className='ml-1'>About</span></Link></li>
            <li onClick={hideMenu}><Link to="/locations"><CiLocationOn/><span className='ml-1'>Locations</span></Link></li>
            <li onClick={hideMenu}><Link to="/donate"><BiDonateHeart  /><span className='ml-1'>Donate</span></Link></li>
            <li onClick={hideMenu}><Link to="/help"><LuHelpingHand /><span className='ml-1 flex'>WeHelp</span></Link></li>
            {/* <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li> */}
        </ul>        
    </nav>
  )
}

export default Nav;