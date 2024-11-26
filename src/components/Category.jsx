import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setCategory(e.target.value); 
  };

  return (
    <div className="w-1/6 p-4">
      <div className="border-b pb-1 px-2 text-xl font-bold">Kategoriler</div>
      <select
        onChange={handleChange}
        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg cursor-pointer mt-2"
      >
        <option value="">Tüm Ürünler</option>
        {categories?.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
