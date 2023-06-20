import React from "react";
import "./Dopair.css";
import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";
import firstimg from "../images/firstimg.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";
import forth from "../images/forth.jpg";
import BottomNav from "../components/BottomNav";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Subscribe from "../components/Subscribe";

const Dopair = () => {
  const [text] = useTypewriter({
    words: ["TIME TO STEP UP YOUR GAME"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 500,
  });
  return (
    <React.Fragment>
      <Navbar />
      <Chatbox />
      <div className="imgone">
        <img src={firstimg} alt="" width={"100%"} height={"380px"} />
      </div>
      <div className="imgtext">
        <h1>
          <span> IT'S </span>
          <span> {text} </span>
          <Cursor cursorStyle="" />
        </h1>
        <span style={{ margintop: "70px",transition: "all .6s ease"}}>
          <h6>SHOP MEN</h6>
          <h6>SHOP FEMALE </h6>
        </span>
        <br /><br /><br /><br /><br />
      </div>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="twoimages">
          <img
            id="myimages"
            src={second}
            alt=""
            width={"486px"}
            height={"450px"}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            id="myimages"
            src={third}
            alt=""
            width={"486px"}
            height={"450px"}
          />
          <div className="imgbox1">
            <h2 style={{ marginTop: "2PX" }}>
              SHOP NEW <br />
              ARRIVALS
            </h2>
          </div>
          <div className="imgbox2">
            <h2 style={{ marginTop: "15PX" }}>WRITE US AT</h2>
          </div>
        </div>
      </p>

      <img id="forthimg" src={forth} alt="" width={"100%"} height={"520px"} />
      <div className="forthtext">
        <h2 style={{ marginTop: "10PX" }}>
          Perfectly <br /> Handcrafted <br /> Leather <br /> Footwear
        </h2>
      </div>
      <div className="forthtext2">
        <h2
          style={{ marginTop: "15PX", marginLeft: "10px", marginRight: "10px" }}
        >
          Starting our online business site in 2014 as Castle Hawk co. , we've
          been attempting to present to you that ideal shopping experience ever
          since we started to peddle...
        </h2>
      </div>
      <div>
        <button className="buttonn">
          <h2 style={{ marginTop: "10px" }}>Read More</h2>
        </button>
      </div>
      <br />
      <Subscribe/>
      <BottomNav />
    </React.Fragment>
  );
};

export default Dopair;
