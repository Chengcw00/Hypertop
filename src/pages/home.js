import React from "react";
import "../style/home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="rectangle" />
        <div className="text-wrapper">Hypertop</div>
        <div className="text-wrapper-2"><Link to='/home'>Home</Link></div>
        <div className="text-wrapper-3"><Link to='/aboutus'>About Us</Link></div>
        <div className="text-wrapper-4"><Link to='/product'>Laptop</Link></div>
        <div className="text-wrapper-5"><Link to='/receipt'>Receipt</Link></div>
        <div className="text-wrapper-6"><Link to='/contactus'>Contact Us</Link></div>
        <Link to='/cart'><img
          className="free-add-to-cart"
          alt="Free add to cart"
          src="https://c.animaapp.com/ERg9HKk5/img/free-add-to-cart-icon-3046-thumb-1@2x.png"
        /></Link>
        <div className="text-wrapper-7">___</div>
        <div className="text-wrapper-8">___</div>
        <Link to='/profile'><img
          className="img"
          alt="Img"
          src="https://c.animaapp.com/ERg9HKk5/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
        /></Link>
        <div className="logo">
          <div className="overlap">
            <div className="group">
              <div className="rectangle-wrapper">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://c.animaapp.com/ERg9HKk5/img/rectangle-7.svg"
                />
              </div>
              <div className="img-wrapper">
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src="https://c.animaapp.com/ERg9HKk5/img/rectangle-7.svg"
                />
              </div>
              <div className="group-2">
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src="https://c.animaapp.com/ERg9HKk5/img/rectangle-7.svg"
                />
              </div>
              <div className="group-3">
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://c.animaapp.com/ERg9HKk5/img/rectangle-7.svg"
                />
              </div>
            </div>
            <img
              className="roggg-removebg"
              alt="Roggg removebg"
              src="https://c.animaapp.com/ERg9HKk5/img/roggg-removebg-preview-1@2x.png"
            />
            <Link to='/product'><img
              className="download"
              alt="Download"
              src="https://c.animaapp.com/ERg9HKk5/img/download--1ppp-removebg-preview-1@2x.png"
            /></Link>
            
            <img
              className="png-clipart-logo"
              alt="Png clipart logo"
              src="https://c.animaapp.com/ERg9HKk5/img/png-clipart-logo-dell-alienware-asus-brand-alienware-electronics@2x.png"
            />
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="o-m-e-n">
                  O&nbsp;&nbsp;&nbsp;&nbsp; M&nbsp;&nbsp;&nbsp;&nbsp; E&nbsp;&nbsp;&nbsp;&nbsp; N
                </div>
                <img
                  className="download-sdsdad"
                  alt="Download sdsdad"
                  src="https://c.animaapp.com/ERg9HKk5/img/download--1-sdsdad-removebg-preview-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="overlap-2">
            <div className="text-wrapper-9">CATEGORY</div>
            <img className="line" alt="Line" src="https://c.animaapp.com/ERg9HKk5/img/line-1.svg" />
          </div>
        </div>
        <div className="home-bg">
          <div className="overlap-3">
            <div className="rectangle-5" />
            <div className="group-4">
              <div className="text-wrapper-10">*Latest Product</div>
              <div className="text-wrapper-11">MSI Raider GE78HX</div>
              <div className="frame-wrapper">
                <div className="frame">
                  <div className="text-wrapper-12"><Link to='/productdetails'>Details</Link></div>
                </div>
              </div>
              <img className="image" alt="Image" src="https://c.animaapp.com/ERg9HKk5/img/image-2.png" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
