import React from "react";
import "../style/contactus.css";
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Contact Us</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/AHTP36vd/img/line-1.svg" />
          <div className="au-bg" />
          <div className="rectangle" />
          <div className="rectangle-2" />
          <img
            className="element"
            alt="Element"
            src="https://c.animaapp.com/AHTP36vd/img/5654359111-01-removebg-preview-1.png"
          />
          <div className="frame">
            <div className="text-wrapper-2">send message</div>
          </div>
          <div className="frame-2" />
          <div className="frame-3" />
          <div className="frame-4" />
          <div className="frame-5" />
          <div className="frame-6" />
          <div className="text-wrapper-3">first name</div>
          <div className="text-wrapper-4">second name</div>
          <div className="text-wrapper-5">email</div>
          <div className="text-wrapper-6">phone</div>
          <div className="text-wrapper-7">message</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-8">Hypertop</div>
          <div className="text-wrapper-9"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-10"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-11"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-12"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-13"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-14">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-15">___</div>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/AHTP36vd/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
