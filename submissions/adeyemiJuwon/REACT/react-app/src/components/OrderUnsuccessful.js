import React from 'react';
import Unsuccess from './images/Illustration_failed.svg';
import './orderUnsuccessful.css';
function OrderUnsuccessful() {
  return (
    <div className="unsuccess">
      <img src={Unsuccess} alt="success" />
      <h1>Order unsuccessful</h1>
      <p>
        Something is wrong with <br /> your order.
      </p>
    </div>
  );
}

export default OrderUnsuccessful;
