import Products from "./Products";
import Category from './Category';
import { useState } from 'react';
import Filter from "./Filter";

const HomePage = () => {
  const [category,setCategory] = useState("")
  const [filterText,setFilterText] = useState("")

  return (
    <div className="flex" >
      <Filter setFilterText={setFilterText}/>
      <Category setCategory={setCategory}/>
      <Products filterText={filterText} category={category} />
    </div>
  );
};

export default HomePage;
