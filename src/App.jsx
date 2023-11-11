import { products } from "./mocks/products.json";
import { Products } from "./components";

function App() {


  return (
    <>
    <h1>Shopping cart 🛒</h1>
    <Products products={products}/>
    </>
  
  );
}

export default App;
