import React from 'react';
import Success from './images/success.jpg';
import './orderSuccessful.css';

function OrderSuccessful() {
  return (
    <div className="success">
      <img src={Success} alt="success" />
      <h1>Order successful</h1>
      <p>
        We have started processing <br /> your order.
      </p>
    </div>
  );
}

export default OrderSuccessful;
