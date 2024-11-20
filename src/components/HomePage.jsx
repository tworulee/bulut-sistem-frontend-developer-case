import Products from "./Products";
import Category from "./Category";
import { useState } from "react";
import Filter from "./Filter";

const HomePage = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="flex">
      <Category setCategory={setCategory} />
      <div className="w-5/6">
        <Filter />
        <Products category={category} />
      </div>
    </div>
  );
};

export default HomePage;
