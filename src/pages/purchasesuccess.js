import React from "react";
import "../style/purchasesuccess.css";
import { Link } from 'react-router-dom';

export const PurchaseSuccess = () => {
  return (
    <div className="purchase-success">
      <div className="div">
        <img className="image" alt="Image" src="https://c.animaapp.com/ebPzNPRc/img/image-1@2x.png" />
        <div className="text-wrapper">RM 16999.00</div>
        <div className="text-wrapper-2">Transferred</div>
        <div className="flexcontainer">
          <p className="text">
            <span className="span">
              Hypertop
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
            <span className="span">20-10-2023&nbsp;&nbsp;13:14:50</span>
          </p>
        </div>
        <div className="flexcontainer-2">
          <p className="text">
            <span className="span">
              Recipent
              <br />
            </span>
          </p>
          <p className="text">
            <span className="span">
              Remark&nbsp;&nbsp; <br />
            </span>
          </p>
          <p className="text">
            <span className="span">Date &amp; Time&nbsp;&nbsp;&nbsp;&nbsp; </span>
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
        <div className="frame">
          <div className="text-wrapper-3"><Link to='/receipt'>View Receipt</Link></div>
        </div>
      </div>
    </div>
  );
};
