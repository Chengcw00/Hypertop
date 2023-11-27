import React from "react";
import "../style/cart.css";
import { Link } from 'react-router-dom';

export const Cart = () => {
  return (
    <div className="cart">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Cart</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/52r8XU9k/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="frame">
            <div className="text-wrapper-2"><Link to='/deletecart'>Delete All</Link></div>
          </div>
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="div-wrapper">
              <div className="text-wrapper-3"><Link to='/checkout'>checkout</Link></div>
            </div>
            <p className="total">
              <span className="span">Total </span>
              <span className="text-wrapper-4">RM16999.00</span>
            </p>
          </div>
          <div className="overlap-3">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="text-wrapper-5">RM 16999.00</div>
            <div className="text-wrapper-6">MSI Raider GE78HX</div>
            <img className="image" alt="Image" src="https://c.animaapp.com/52r8XU9k/img/image-2@2x.png" />
            <div className="frame-2" />
            <div className="element-wrapper">
              <div className="element">-&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; +</div>
            </div>
            <div className="frame-3" />
            <div className="image-wrapper"><Link to='/deletecart'>
              <img className="img" alt="Image" src="https://c.animaapp.com/52r8XU9k/img/image-3@2x.png" />
              </Link></div>
            <div className="ellipse" />
            <div className="ellipse-2" />
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-7">Hypertop</div>
          <div className="text-wrapper-8"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-9"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-10"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-11"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-12"><Link to='/contactus'>Contact Us</Link></div>
          <div className="overlap-4">
            <div className="text-wrapper-13">___</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-14">___</div>
            <img
              className="img-2"
              alt="Img"
              src="https://c.animaapp.com/52r8XU9k/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
