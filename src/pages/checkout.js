import React from "react";
import "../style/checkout.css";
import { Link } from 'react-router-dom';

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Checkout Order</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/z2VCKmEk/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="frame">
            <div className="text-wrapper-2"><Link to='/paymentmethod'>select payment method</Link></div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3"><Link to='/updateprofile'>edit</Link></div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3"><Link to='/updateprofile'>edit</Link></div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-3"><Link to='/updateprofile'>edit</Link></div>
          </div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                :<br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                :<br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                :<br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                :<br />
              </span>
            </p>
            <p className="text">
              <span className="span">:</span>
            </p>
          </div>
          <div className="flexcontainer-2">
            <p className="text">
              <span className="span">
                name <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                email&nbsp;&nbsp;
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                order item
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                total price
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">address&nbsp;&nbsp; </span>
            </p>
          </div>
          <div className="flexcontainer-3">
            <p className="text">
              <span className="span">
                UNO&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                uno123@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                MSI Raider GE78HX
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                RM 16999.00
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">123, Jalan Dom, Taman Furious, 12345 Jelutong, Pulau Pinang&nbsp;&nbsp;</span>
            </p>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-4"><Link to='/deletecheckout'>Delete All</Link></div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-5">Hypertop</div>
          <div className="text-wrapper-6"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-7"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-8"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-9"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-10"><Link to='/contactus'>Contact Us</Link></div>
          <div className="overlap-3">
            <div className="text-wrapper-11">___</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-12">___</div>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/z2VCKmEk/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
