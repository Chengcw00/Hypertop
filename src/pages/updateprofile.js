import React from "react";
import "../style/updateprofile.css";
import { Link } from 'react-router-dom';

export const UpdateProfile = () => {
  return (
    <div className="update-profile">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Update Profile</div>
          <img className="line" alt="Line" src="https://c.animaapp.com/p7PZZtid/img/line-1.svg" />
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="frame">
            <div className="text-wrapper-2"><Link to='/profile'>update</Link></div>
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
                email&nbsp;&nbsp;&nbsp;&nbsp; <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                street
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                postcode
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                city
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">state&nbsp;&nbsp; </span>
            </p>
          </div>
          <div className="frame-2" />
          <div className="frame-3" />
          <div className="frame-4" />
          <div className="frame-5" />
          <div className="frame-6" />
          <div className="frame-7" />
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
                123, Jalan Dom, Taman Furious
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                {" "}
                12345
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                Jelutong
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Pulau Pinang&nbsp;&nbsp;</span>
            </p>
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">Hypertop</div>
          <div className="text-wrapper-4"><Link to='/home'>Home</Link></div>
          <div className="text-wrapper-5"><Link to='/aboutus'>About Us</Link></div>
          <div className="text-wrapper-6"><Link to='/product'>Laptop</Link></div>
          <div className="text-wrapper-7"><Link to='/receipt'>Receipt</Link></div>
          <div className="text-wrapper-8"><Link to='/contactus'>Contact Us</Link></div>
          <div className="div-wrapper">
            <div className="text-wrapper-9">___</div>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-10">___</div>
            <img
              className="img"
              alt="Img"
              src="https://c.animaapp.com/p7PZZtid/img/7b8cd8b068e4b9f80b4bcf0928d7d499-removebg-preview-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
