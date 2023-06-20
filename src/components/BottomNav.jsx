import React from "react";
import "./BottomNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagramSquare,faTwitterSquare,faPinterestSquare} from "@fortawesome/free-brands-svg-icons";
//import {faCopyright} from "@fortawesome/free-solid-svg-icons"
const BottomNav = () => {
  return (
    <React.Fragment>
    <div className='bottom-nav'>
            
    <div className='contents'>
            <a href="/about">About</a>
            <a href="url">Shop</a>
            <a href="url">Careers</a>
            <a href="url">Payment Option</a>
            <a href="url">Store Policy</a>
            <a href="url">Contact</a>
          </div>
  <div className="icons">
        <a href=""> <FontAwesomeIcon icon={faFacebookSquare} /></a> 
        <a href=""><FontAwesomeIcon icon={faInstagramSquare} /></a> 
        <a href=""><FontAwesomeIcon icon={faTwitterSquare} /></a> 
        <a href=""><FontAwesomeIcon icon={faPinterestSquare} /></a>
        </div>
      
      
    </div>
    </React.Fragment>
  );
};

export default BottomNav;
