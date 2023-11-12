import { useContext, useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Footer, Header, Products } from "./components";
import { IS_DEVELOPMENT } from './config.js'
import { FiltersContext } from "./context/filter.jsx";

export function useFilters() {
  const {filters, setFilters} = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };
  return { filterProducts, setFilters, filters };
}

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();

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
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  );
}

export default App;
