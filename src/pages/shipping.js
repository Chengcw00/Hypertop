import React from "react";
import "../style/shipping.css";
import { Link } from 'react-router-dom';

export const Shipping = () => {
  return (
    <div className="shipping">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="frame">
            <div className="text-wrapper"><Link to='/home'>Back To Home</Link></div>
          </div>
          <div className="bayan-lepas-jelutong">Bayan Lepas -&gt; Jelutong</div>
          <div className="element-friday">2023-10-20&nbsp;&nbsp;Friday</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                18:10
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                17:15&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">15:30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            </p>
          </div>
          <div className="flexcontainer-2">
            <p className="text">
              <span className="span">
                Inbound - Gateway PENANG_GATEWAY
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                Outbound - Drop point Bayan Lepas
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Picked Up - Drop point Bayan Lepas</span>
            </p>
          </div>
          <div className="flexcontainer-3">
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
          <img
            className="rdgbfzsd-removebg"
            alt="Rdgbfzsd removebg"
            src="https://c.animaapp.com/yGhZvVbm/img/rdgbfzsd-removebg-preview-1.png"
          />
          <img className="line" alt="Line" src="https://c.animaapp.com/yGhZvVbm/img/line-2-1.svg" />
          <div className="ellipse" />
          <img className="img" alt="Line" src="https://c.animaapp.com/yGhZvVbm/img/line-2-1.svg" />
          <div className="ellipse-2" />
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">Hypertop</div>
          <div className="text-wrapper-3"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-4"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-5"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-6"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-7"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-9">___</div>
            <img
              className="img-2"
              alt="Img"
              src="https://c.animaapp.com/yGhZvVbm/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-10">Shipping Details</div>
          <img className="line-2" alt="Line" src="https://c.animaapp.com/yGhZvVbm/img/line-1.svg" />
        </div>
      </div>
    </div>
  );
};
