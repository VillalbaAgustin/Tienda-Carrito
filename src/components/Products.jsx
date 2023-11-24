import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks";
import "./Products.css";

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <button
                style={{backgroundColor: isProductInCart ? '#b30024' : '#1a1a1a'}}
                onClick={() =>
                  isProductInCart ? removeFromCart(product) : addToCart(product)
                }
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
