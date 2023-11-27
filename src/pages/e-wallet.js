import React from "react";
import "../style/e-wallet.css";
import { Link } from 'react-router-dom';

export const EWallet = () => {
  return (
    <div className="e-wallet">
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
              src="https://c.animaapp.com/oOeM5Jy5/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-9">TNG E-Wallet</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/oOeM5Jy5/img/line-1.svg" />
        </div>
        <div className="overlap-group-2">
          <div className="please-scan-in">
            please scan in
            <br />
            00:01:58
          </div>
          <div className="frame">
            <div className="text-wrapper-10"><Link to='/loadingpayment'>scaned</Link></div>
          </div>
          <img className="image" alt="Image" src="https://c.animaapp.com/oOeM5Jy5/img/image-2.png" />
          <div className="brandqrcodes-url-wrapper">
            <img
              className="brandqrcodes-url"
              alt="Brandqrcodes url"
              src="https://c.animaapp.com/oOeM5Jy5/img/brandqrcodes-url-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
