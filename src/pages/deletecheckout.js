import React from "react";
import "../style/deletecheckout.css";
import { Link } from 'react-router-dom';

export const DeleteCheckout = () => {
  return (
    <div className="delete-checkout">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Hypertop</div>
          <div className="text-wrapper-2"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-3"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-4"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-5"><Link to='/receiptno'>Receipt</Link></div>
          <div className="text-wrapper-6"><Link to='/contactus'>Contact Us</Link></div>
          <div className="overlap-group">
            <div className="text-wrapper-7">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-8">___</div>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/QNwyBcWU/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-9">Checkout Order</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/QNwyBcWU/img/line-1.svg" />
        </div>
        <div className="overlap-group-2">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <p className="p">your checkout is empty !</p>
          <div className="frame">
            <div className="text-wrapper-10">Delete All</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-11">select payment method</div>
          </div>
        </div>
      </div>
    </div>
  );
};
