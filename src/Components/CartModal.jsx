import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan, faCircleXmark} from '@fortawesome/free-regular-svg-icons'

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                {/* Modal header */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Cart ({cartItems.length} items)
        </h2>

        {/* Cart items */}
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />

                {/* Product details */}
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-xl"
              >
               Remove   <FontAwesomeIcon icon={faTrashCan} />
              </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
           <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl">
           <FontAwesomeIcon icon={faCircleXmark} /> Close
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default CartModal;
