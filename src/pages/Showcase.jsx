import React from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Chatbox from "../components/Chatbox";
import Menu from "../Menu";
import "./Showcase.css";

const Showcase = () => {
  return (
    <React.Fragment>
      <Navbar /><Chatbox />
      <div className="showcase">
      {Menu.map((data) => (
        <div className="menu">
         <div className="img-cart"> <img src={data.image} alt="" width="300px" height="400px" /></div>
         <div className="cart-content"> <h3>{data.name}</h3>
          <h4>{data.price} </h4>
        <h5>{data.description}</h5>
        <button className="btn-cart">Add to cart</button>
        </div>
        </div>

      ))}
      </div>
     <BottomNav />
    </React.Fragment>
  );
};

export default Showcase;
