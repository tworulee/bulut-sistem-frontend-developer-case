import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import Loading from "./Loading";
import ProductDetailComp from "./ProductDetailComp";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <ProductDetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default ProductDetail;
