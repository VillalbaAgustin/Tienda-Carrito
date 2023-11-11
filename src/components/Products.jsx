import { AddToCartIcon, RemoveFromCartIcon } from "./icon";
import './Products.css';

export const Products = ({ products }) => {
  // console.log(products);

  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>
                {product.title} - ${product.price}
              </strong>
            </div>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};
