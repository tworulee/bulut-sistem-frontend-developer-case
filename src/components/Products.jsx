import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/productSlice";
import Loading from "./Loading";
import Product from "./Product";

const Products = () => {
    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <div>
       {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
        <div className="flex justify-center items-center min-h-screen m-6">
          <div className="flex flex-wrap justify-center items-center  w-4/5 ">
            {
                products.map((product)=>(
                    <Product product={product} key={product.id} />
                ))
            }
          </div></div>
        </>
      )}
    </div>
  )
}

export default Products
