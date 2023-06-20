import React from 'react';
import second from "../images/second.jpg";
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import Chatbox from '../components/Chatbox';
import Subscribe from '../components/Subscribe';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.css"

const About = () => {
  return (
    <React.Fragment>
    <Navbar/><Chatbox/>
    <span> <br /><br /><br /><br /> </span>

    <div className='about-main-div'>
    <img style={{ position:"absolute", paddingTop:"30px"}} src={second} alt="" width="350px" height="450px" />
    <div className='about-inner-div'>
    <h1 style={{textAlign:"left", color:"white", paddingTop:"60px", paddingLeft:"50px"}}>
    <FontAwesomeIcon icon={faArrowRight} /> THE DO'PAIR <br />
    &nbsp; &nbsp; STORY
    </h1>
    </div>
    <div className='about-text'>Here at Do'pair, we understand that style <br /> and success start with the right footwear. <br />
    We in like manner comprehend that <br /> adequately finding the size and style to <br /> meet your necessities is indispensable to <br /> your online shopping knowledge.
    Since <br /> starting our online business site in 2014, <br />
    we've been attempting to present to you <br /> that ideal shopping experience.
    We offer <br /> our patrons with high-quality handcrafted <br /> leather footwear for a variety of episodes <br /> and it only gets better with time.
    We highly esteem passing on difficult-to-find styles, sizes,
    and widths since we understand that every individual's needs differentiate.
    Whether or not you're encountering issues investigating our immense inventory of various shoes or you have a clear request,
    our customer benefits group is arranged and ready to help.
    Pricing
    Our footwear is high quality close by comparative items from different brands that charge clients in the $300-600 value extend.
    We make zero tradeoffs regarding quality materials, assembling, or business morals (fair labor and sustainability).
    We just accept that offering clients an extraordinary worth is the establishment to long haul business achievement and is the righteous thing to do.
    </div>
    </div>
  
    
    
    
    <br /><br /><br />
    <Subscribe/>
    <BottomNav/>
    </React.Fragment>
  )
}

export default About