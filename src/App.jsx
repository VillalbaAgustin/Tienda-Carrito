import { useContext, useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Cart, Footer, Header, Products } from "./components";
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from "./hooks";


function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts, filters } = useFilters();

  // const categories = [];

  // products.forEach((product) => {
  //   if (!categories.includes(product.category)) {
  //     categories.push(product.category);
  //   }
  // });
  // console.log(categories);

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </>
  );
}

export default App;
