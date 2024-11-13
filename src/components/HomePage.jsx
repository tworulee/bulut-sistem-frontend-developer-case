import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className=" mt-3 text-3xl text-center font-bold">PRODUCTS</h1>
    </div>
  );
};

export default HomePage;
