import React, { useEffect, useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import './verification.css';
import validation from './validation';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Verification() {
  const [values, setValues] = useState({
    phoneNumber: '',
    modeOfPayment: 'card',
    cardNumber: '',
    cardName: '',
    cardExpiredDate: '',
    cardCvv: '',
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
    setErrors(validation(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    if (values.cardNumber) {
      navigate('/success');
    } else {
      navigate('/unsuccess');
    }

    console.log(errors);
    console.log(values);
  };
  useEffect(() => {
    setErrors(validation(values));
  }, [values]);
  return (
    <div className="verification">
      <Navbar />
      <div className="head_link">
        <p>Home</p> <MdOutlineNavigateNext className="head_link_next" />{' '}
        <p>cart</p> <MdOutlineNavigateNext className="head_link_next" />{' '}
        <h4>Verification</h4>
      </div>
      <div className="verification_header">
        <h1>
          Verification{' '}
          <span>
            <p>Confirm address & Payment</p>
          </span>
        </h1>
      </div>
      <div className="verification_sub_header">
        <div className="verification_sub_sub">
          <h2>Delivery Address </h2>
          <p>Your order will be delivered to your address</p>
        </div>

        <BiCurrentLocation className="head_link_location" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="verification_form">
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="+234"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            {' '}
            <label>Payment Mode</label>
            <select
              name="modeOfPayment"
              value={values.modeOfPayment}
              onChange={handleChange}
            >
              <option value="card">Card</option>
              <option value="cash">Cash On Delivery</option>
            </select>
            {errors.modeOfPayment && (
              <p className="error">{errors.modeOfPayment}</p>
            )}
          </div>
          <div>
            <label>Card Number</label>
            <input
              type="number"
              name="cardNumber"
              placeholder="2345 6543 7868 2343"
              value={values.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber} </p>}
          </div>
          <div>
            <label>Card Name</label>
            <input
              type="text"
              name="cardName"
              placeholder="TOLUWALASE KENNY OJO"
              value={values.cardName}
              onChange={handleChange}
            />
            {errors.cardName && <p className="error">{errors.cardName}</p>}
          </div>
          <div className="expired">
            <div className="expiredDate">
              <label>Expired Date</label>
              <input
                type="text"
                value={values.cardExpiredDate}
                placeholder="02/24"
                name="cardExpiredDate"
                onChange={handleChange}
              />
              {errors.cardExpiredDate ? (
                <p className="error">{errors.cardExpiredDate}</p>
              ) : (
                ''
              )}
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                name="cardCvv"
                value={values.cardCvv}
                onChange={handleChange}
              />
              {errors.cardCvv && <p className="error">{errors.cardCvv}</p>}
            </div>
          </div>
          <div className="btn">
            <button
              type="submit"
              className="submit"
              disabled={
                errors.phoneNumber ||
                errors.cardNumber ||
                errors.cardName ||
                errors.cardExpiredDate ||
                errors.cardCvv
              }
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verification;
