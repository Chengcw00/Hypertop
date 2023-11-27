import React from "react";
import "../style/aboutus.css";
import { Link } from 'react-router-dom';


export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">About Us</div>

          <img className="line" alt="Line" src="https://c.animaapp.com/dY9uzBRQ/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="au-bg" />
          <img
            className="element"
            alt="Element"
            src="https://c.animaapp.com/dY9uzBRQ/img/5654359111-01-removebg-preview-1.png"
          />
          <p className="p">Hypertop is located in Penang, Bayan Lepas and was established in 2000</p>
          <p className="text-wrapper-2">
            Our store selling high performance laptop such as MSI, ROG, ALINEWARE, OMEN to let users geting best
            experience and done the work fast.
          </p>
          <img
            className="element-f"
            alt="Element f"
            src="https://c.animaapp.com/dY9uzBRQ/img/360-f-519109499-nwynhgxzhhps4dsx69kzs3o1r8lahjvp-removebg-previe.png"
          />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">Hypertop</div>
          <div className="text-wrapper-4"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-5"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-6"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-7"><Link to='/receiptno'>Receipt</Link></div>
          <div className="text-wrapper-8"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-9">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-10">___</div>
            <Link to='/home'><img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/dY9uzBRQ/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
