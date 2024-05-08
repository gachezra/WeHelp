import React from 'react';
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by <Link to='https://pexmon.one'><b>Pexmon LTD</b></Link></h4>
      <h4>Copyright &copy; 2024 <b>WeHelp</b></h4>
      {/* <div className='footerLinks'>
        <a href="https://github.com/DevanshSahni" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/devansh-sahni/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>
      </div> */}
    </footer>
  )
}

export default Footer