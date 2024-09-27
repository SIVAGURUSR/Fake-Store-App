import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side (Brand) */}
          <div className="flex-shrink-0">
            <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo" className="h-10 w-10" /></div>
  
            <h1 className="text-white text-3xl font-bold tracking-wide hover:text-gray-300 transition duration-300">
              Fake Store
            </h1>
          

          {/* Right side (Cart Button) */}
          <div className="flex items-center">
            <button
              onClick={openCart}
              className="relative bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300"
            > 
              Cart  <FontAwesomeIcon icon={faCartShopping} />
              {/* Cart item count */}
              <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-600 text-white rounded-full w-6 h-6 text-center text-sm">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
