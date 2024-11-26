import Products from "./Products";
import Category from "./Category";
import { useState } from "react";
import Filter from "./Filter";

const HomePage = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center">
        <Category setCategory={setCategory} />
        <Filter />
      </div>
      <Products category={category} />
    </div>
  );
};

export default HomePage;
