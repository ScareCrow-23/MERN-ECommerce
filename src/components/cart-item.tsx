import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  // productId: "string",
  // photo:
  //   "https://m.media-amazon.com/images/I/41WnfV9lokL._SX300_SY300_QL70_FMwebp_.jpg",
  // name: "Puma Shoes",
  // price: 2000,
  // stock: 10,
  // quantity: 1,
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
