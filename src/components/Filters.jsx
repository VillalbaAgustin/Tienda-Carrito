import { useId, useState } from "react";
import "./Filters.css";
import { useFilters } from "../hooks";

export function Filters() {
  // const [minPrice, setMinPrice] = useState(0);
  const {filters, setFilters} = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    // console.log(e.target.value);
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
          type="range"
          name="price"
          id={minPriceFilterId}
          min="0"
          max="1000"
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} name="category" id={categoryFilterId}>
          <option value="all">All</option>
          <option value="home-decoration">Home-decoration</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
