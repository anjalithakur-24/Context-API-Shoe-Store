import React from 'react';
import './Cartcopy.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext.jsx';
import { useContext } from 'react';

function Cartcopy({ cart, removeFromCart, addToCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='cart w-96 mr-40'>
      <h1 className='m-7 text-xl'>Cart</h1>
      <ul>
        {cart.map(item => (
          <li className='listcart' key={item.id}>
            <div className='list2'>
              <div className='cartimage'>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <div className='but'>
                <button onClick={() => addToCart(item)}>+</button>
                {item.quantity}
                <button onClick={() => removeFromCart(item)}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h2 className='flex justify-center text-2xl'>Total: ₹{calculateTotal()}</h2>

      <Link to="/" className="proceed-to-pay-button">
        <button className='full-width-button'>
          Go Back <br /> to Shopping
        </button>
      </Link>
    </div>
  );
}

export default Cartcopy;