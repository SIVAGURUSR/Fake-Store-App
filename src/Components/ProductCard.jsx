import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ product, addToCart, isInCart }) => {
  return (
    <div className="bg-transparent shadow-lg rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-4 bg-white"
      />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold bg-blue-200 text-gray-900 mb-2 truncate">
          {product.title}
        </h3>

        <p className="text-gray-500 mb-4">{product.description.slice(0, 80)}...</p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-500">${product.price}</span>
        </div>
      <button
        onClick={() => addToCart(product)}
        className={`bg-blue-500 text-white py-2 px-4 rounded-2xl ${isInCart ? 'bg-green-500' : ''}`}
      >
        {isInCart ? 'In Cart' : 'Add to Cart'} <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
    </div>
  );
};

export default ProductCard;
