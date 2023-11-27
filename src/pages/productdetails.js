import React from "react";
import "../style/productdetails.css";
import { Link } from 'react-router-dom';

export const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Product Details</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/LUnn7tfS/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="frame">
            <div className="text-wrapper-2">___</div>
          </div>
          <Link to='/cart'><img
            className="free-add-to-cart"
            alt="Free add to cart"
            src="https://c.animaapp.com/LUnn7tfS/img/free-add-to-cart-icon-3046-thumb-2@2x.png"
          /></Link>
          <div className="frame-2" />
          <div className="element-wrapper">
            <div className="element">-&nbsp;&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp; +</div>
          </div>
          <img className="image" alt="Image" src="https://c.animaapp.com/LUnn7tfS/img/image-2.png" />
          <div className="text-wrapper-3">RM 16999.00</div>
          <div className="text-wrapper-4">MSI Raider GE78HX</div>
          <p className="windows-home">
            Windows 11 Home
            <br />
            NVIDIA® GeForce RTX™ 4070 Laptop GPU 8GB GDDR6
            <br />
            17&#34; 16:10 QHD+ (2560 x 1600), 240Hz, 100% DCI-P3, IPS-level panel
            <br />
            Intel® Core™ i9-13980HX
            <br />
            4TB (2TB*2) NVMe PCIe Gen4x4 SSD
            <br />
            DDR V 32GB*2 5600MHz
            <br />
            Intel® Killer™ Wi-Fi 6E AX1675(i) + BT5.3
            <br />
            Per-Key RGB Keyboard by SteelSeries
            <br />4 cell, 99.99Whr
            <br />
            Titan Gaming Backpack + Mouse M99
            <br />2 Years Warranty
          </p>
          <img className="img" alt="Image" src="https://c.animaapp.com/LUnn7tfS/img/image-3@2x.png" />
          <img className="image-2" alt="Image" src="https://c.animaapp.com/LUnn7tfS/img/image-4@2x.png" />
          <img className="image-3" alt="Image" src="https://c.animaapp.com/LUnn7tfS/img/image-5@2x.png" />
          <img className="image-4" alt="Image" src="https://c.animaapp.com/LUnn7tfS/img/image-6@2x.png" />
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-5">Hypertop</div>
          <div className="text-wrapper-6"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-7"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-8"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-9"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-10"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-11">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-12">___</div>
            <img
              className="img-2"
              alt="Img"
              src="https://c.animaapp.com/LUnn7tfS/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
