import Products from "./Products";
import Category from "./Category";
import { useState } from "react";
import Filter from "./Filter";

const HomePage = () => {
  const [category, setCategory] = useState("");
  const [filterText, setFilterText] = useState("");
  const [fromAmount, setFromAmount] = useState(-1);
  const [toAmount, setToAmount] = useState(-1);

  return (
    <div className="flex">
      <Category setCategory={setCategory} />
      <div className="w-5/6">
      <Filter
        setFilterText={setFilterText}
        setFromAmount={setFromAmount}
        setToAmount={setToAmount}
      />
      <Products
        fromAmount={fromAmount}
        toAmount={toAmount}
        filterText={filterText}
        category={category}
      />
      </div>
    </div>
  );
};

export default HomePage;
