import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import './Payment.css'

function PaymentPage() {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="payment-container">
      <form className="payment-form">
        <div className="payment-option">
          <input type="radio" name="payment" /> Cash on Delivery
          <input type="radio" name="payment" /> Credit Card
        </div>

        <div className="form-group">
          <label>Enter your card number:</label>
          <input type="text" placeholder="1234 5678 8765 4321" />
        </div>

        <div className="form-group">
          <label>Enter your card's expiry date:</label>
          <input type="text" placeholder="MM/YY" />
        </div>

        <div className="form-group">
          <label>Enter your CVV number:</label>
          <input type="text" placeholder="123" />
        </div>

        <button type="submit" className="confirm-button">Confirm Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
