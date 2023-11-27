import React from "react";
import "../style/product.css";
import { Link } from 'react-router-dom';

export const Product = () => {
  return (
    <div className="product">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Product</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/MCq7Dys8/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <img className="image" alt="Image" src="https://c.animaapp.com/MCq7Dys8/img/image-1@2x.png" />
            <div className="text-wrapper-2">MSI Raider GE78HX 13VH</div>
            <div className="text-wrapper-3">RM 14499.00</div>
            <div className="frame">
              <div className="text-wrapper-4">____</div>
            </div>
            <img
              className="free-add-to-cart"
              alt="Free add to cart"
              src="https://c.animaapp.com/MCq7Dys8/img/free-add-to-cart-icon-3046-thumb-2-2@2x.png"
            />
           
          </div>
          <div className="overlap-3">
            <div className="rectangle-3" />
            <img className="img" alt="Image" src="https://c.animaapp.com/MCq7Dys8/img/image-2@2x.png" />
            <div className="text-wrapper-6">RM 16999.00</div>
            <div className="text-wrapper-7"><Link to='/productdetails'>MSI Raider GE78HX</Link></div>
            <div className="frame-2" />
            <Link to='/cart'><img
              className="free-add-to-cart-2"
              alt="Free add to cart"
              src="https://c.animaapp.com/MCq7Dys8/img/free-add-to-cart-icon-3046-thumb-2-2@2x.png"
            /></Link>
          </div>
          <div className="overlap-4">
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <img className="image-2" alt="Image" src="https://c.animaapp.com/MCq7Dys8/img/image-3@2x.png" />
            <div className="text-wrapper-8">MSI Stealth 14Studio</div>
            <div className="text-wrapper-9">RM 8699.00</div>
            <div className="frame-3" />
            <img
              className="free-add-to-cart-3"
              alt="Free add to cart"
              src="https://c.animaapp.com/MCq7Dys8/img/free-add-to-cart-icon-3046-thumb-2-2@2x.png"
            />
          </div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-10">Hypertop</div>
          <div className="text-wrapper-11"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-12"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-13"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-14"><Link to='/receiptno'>Receipt</Link></div>
          <div className="text-wrapper-15"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-16">___</div>
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-17">___</div>
            <img
              className="img-2"
              alt="Img"
              src="https://c.animaapp.com/MCq7Dys8/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
