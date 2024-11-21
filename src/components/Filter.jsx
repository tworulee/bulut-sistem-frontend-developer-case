import { useDispatch } from "react-redux";
import { filterProducts, filterByPriceRange } from "../redux/productSlice";
import { useState, useRef } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const timeoutRef = useRef(null);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(filterProducts(value));
    }, 300);
  };

  const handleFilterByPrice = () => {
    const parsedMinPrice = parseFloat(minPrice) || 0;
    const parsedMaxPrice = parseFloat(maxPrice) || Infinity;

    dispatch(
      filterByPriceRange({ minPrice: parsedMinPrice, maxPrice: parsedMaxPrice })
    );

    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch justify-center p-4">
      <input
        placeholder="Ara"
        onChange={handleFilter}
        className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Minimum Price"
        className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Maximum Price"
        className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleFilterByPrice}
        className="bg-blue-500 text-white p-2"
      >
        Filter by Price
      </button>
    </div>
  );
};

export default Filter;
