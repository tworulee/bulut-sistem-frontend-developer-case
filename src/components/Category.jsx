import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/5 bg-gray-100 p-4">
      <div className="border-b pb-1 px-2 text-xl font-bold">Kategoriler</div>
      <div
        onClick={(e) => {
          e.preventDefault();
          setCategory("");
        }}
        className="text-lg cursor-pointer hover:bg-gray-200 p-2"
      >
        Tüm Ürünler
      </div>
      <div>
        {categories?.map((category, i) => (
          <div
            onClick={() => setCategory(category)}
            className="text-lg cursor-pointer hover:bg-gray-200 p-2"
            key={i}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
