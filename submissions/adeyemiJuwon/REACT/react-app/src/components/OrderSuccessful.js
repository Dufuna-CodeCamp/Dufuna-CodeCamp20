import React from 'react';
import Success from './images/Illustration_success.svg';
import Navbar from './Navbar';
import './orderSuccessful.css';

function OrderSuccessful() {
  return (
    <div>
      <Navbar />
      <div className="success">
        <img src={Success} alt="success" />
        <h1>Order successful</h1>
        <p>
          We have started processing <br /> your order.
        </p>
      </div>
    </div>
  );
}

export default OrderSuccessful;
