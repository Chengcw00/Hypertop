import React from "react";
import "../style/receipt.css";
import { Link } from 'react-router-dom';

export const Receipt = () => {
  return (
    <div className="receipt">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Order Slip</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/oDBMdMBI/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="frame">
            <div className="text-wrapper-2"><Link to='/shipping'>Shipping status</Link></div>
          </div>
          <div className="flexcontainer">
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
                order item
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">total price</span>
            </p>
          </div>
          <div className="flexcontainer-3">
            <p className="text">
              <span className="span">
                placed on
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                name&nbsp;&nbsp;&nbsp;&nbsp; <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                email&nbsp;&nbsp;&nbsp;&nbsp; <br />
              </span>
            </p>
            <p className="text">
              <span className="span">address&nbsp;&nbsp; </span>
            </p>
          </div>
          <div className="flexcontainer-4">
            <p className="text">
              <span className="span">
                20-10-2023
                <br />
              </span>
            </p>
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
                123, Jalan Dom, Taman Furious, 12345 Jelutong, Pulau Pinang&nbsp;&nbsp;
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
              <span className="span">RM 16999.00</span>
            </p>
          </div>
          <div className="flexcontainer-5">
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
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-3">Hypertop</div>
          <div className="text-wrapper-4"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-5"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-6"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-7"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-8"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-9">___</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-10">___</div>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/oDBMdMBI/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
