import React from "react";
import "../style/paymentmethod.css";
import { Link } from 'react-router-dom';

export const PaymentMethod = () => {
  return (
    <div className="payment-method">
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
              src="https://c.animaapp.com/MauglWm3/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-9">Select Payment Method</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/MauglWm3/img/line-1.svg" />
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="rectangle" />
            <div className="text-wrapper-10">Debit / Credit Card</div>
            <div className="ellipse" />
            <img
              className="carddd-removebg"
              alt="Carddd removebg"
              src="https://c.animaapp.com/MauglWm3/img/carddd-removebg-preview-1@2x.png"
            />
          </div>
          <div className="overlap-5">
            <div className="rectangle" />
            <div className="text-wrapper-11">Online Banking</div>
            <div className="ellipse" />
            <img
              className="fpx-logo-removebg"
              alt="Fpx logo removebg"
              src="https://c.animaapp.com/MauglWm3/img/fpx-logo-removebg-preview-1@2x.png"
            />
          </div>
          <div className="overlap-6">
            <div className="rectangle" />
            <div className="text-wrapper-12">TNG E-Wallet</div>
            <div className="ellipse" />
            <div className="ellipse-2" />
            <img
              className="element-touch-n-go"
              alt="Element touch n go"
              src="https://c.animaapp.com/MauglWm3/img/1200px-touch--n-go-ewallet-logo-1@2x.png"
            />
          </div>
          <div className="overlap-7">
            <div className="rectangle" />
            <div className="text-wrapper-10">Cash On Delivery</div>
            <div className="ellipse" />
            <img
              className="element-removebg"
              alt="Element removebg"
              src="https://c.animaapp.com/MauglWm3/img/1554406-removebg-preview-1@2x.png"
            />
          </div>
          <div className="frame">
            <div className="text-wrapper-13"><Link to='/e-wallet'>select</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};
