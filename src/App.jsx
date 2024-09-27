import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import CartModal from './Components/CartModal';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetching products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyInCart = cart.find(item => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const openCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={openCart} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            isInCart={cart.some(item => item.id === product.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <CartModal
          cartItems={cart}
          closeModal={closeModal}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
