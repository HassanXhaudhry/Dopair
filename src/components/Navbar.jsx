import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import dopair from "../images/dopair.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [showModel, setShowModal] = useState(false);

  const LoginModal = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);
	
    return (
      <React.Fragment>
        <div className="modal-background" onClick={() => setShowModal(false)}></div>
		<div className="login-div">
		<form action="">
		<label for="for-email"><h2>LOGIN TO DO'PAIR</h2> </label><br />
      <input className="form__field" id="for-email" type="email" placeholder="Enter Your Email" /><br /><br /><br />
	  <input className="form__field" id="for-pass" type="for-password" placeholder="Enter Your Password" /><br />
     <button className="btn-sub">Login</button>
		</form>
		</div>
    
    <div class="vertical-line"></div>

    <div className="signup-div">
		<form action="">
		<label for="for-email"><h2>SIGNUP TO DO'PAIR</h2> </label><br />
      <input className="form__field" id="for-email" type="email" placeholder="Enter Your Email" /><br /><br /><br />
	  <input className="form__field" id="for-pass" type="for-password" placeholder="Enter Your Password" /><br />
     <button className="btn-sub">signup</button>
		</form>
		</div>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <header>
        <img src={dopair} alt="" width={"120px"} height={"30px"} />
        <nav ref={navRef}>
          <a href="/#">HOME</a>
          <a href="/showcase">SHOWCASE</a>
          <div className="dropdown">
            <a className="dropdown-btn" href="/#">
              SHOP <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <ul className="sub-menu">
              <li>
                <a href="">Leather Boots</a>
              </li>
              <li>
                <a href="">Classic Shoes</a>
              </li>
              <li>
                <a href="">Chelsea Boots</a>
              </li>
              <li>
                <a href="">Loafers</a>
              </li>
              <li>
                <a href="">Female Collection</a>
              </li>
            </ul>
          </div>
          <a onClick={() => {setShowModal(true);}}>Login</a>
          {showModel && <LoginModal />}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
