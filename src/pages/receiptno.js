import React from "react";
import "../style/receiptno.css";
import { Link } from 'react-router-dom';

export const ReceiptNo = () => {
  return (
    <div className="receipt-no">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Hypertop</div>
          <a
            className="text-wrapper-2"
 
          >
            <Link to='/home'>Home</Link>
          </a>
          <a
            className="text-wrapper-3"

          >
            <Link to='/aboutus'>About Us</Link>
          </a>
          <a
            className="text-wrapper-4"

          >
            <Link to='/product'>Laptop</Link>
          </a>
          <a
            className="text-wrapper-5"
  
          >
            <Link to='/receiptno'>Receipt</Link>
          </a>
          <a
            className="text-wrapper-6"

          >
            <Link to='/contactus'>Contact Us</Link>
          </a>
          <div className="overlap">
            <a
              className="text-wrapper-7"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              ___
            </a>
          </div>
          <div className="overlap-2">
            <a
              className="text-wrapper-8"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              ___
            </a>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/va2esfIg/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-9">Order Slip</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/va2esfIg/img/line-2.svg" />
        </div>
        <div className="overlap-4">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <p className="p">no order placed yet !</p>
          <div className="frame">
            <div className="text-wrapper-10"><Link to='/product'>go to shop now</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};
