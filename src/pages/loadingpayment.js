import React from "react";
import "../style/loadingpayment.css";
import { Link } from 'react-router-dom';

export const LoadingPayment = () => {
  return (
    <div className="loading-payment">
      <div className="div">
        <img
          className="pngtree-orange"
          alt="Pngtree orange"
          src="https://c.animaapp.com/y6C6x4BT/img/pngtree-orange-gradient-loading-completion-progress-bar-image-11.png"
        />
        <div className="text-wrapper">payment is in progress</div>
        <div className="frame">
          <div className="text-wrapper-2"><Link to='/purchasesuccess'>continue</Link></div>
        </div>
      </div>
    </div>
  );
};
