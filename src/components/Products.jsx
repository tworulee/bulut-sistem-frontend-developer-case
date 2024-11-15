import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { getProducts, getCategoryProducts } from "../redux/productSlice";
import Loading from "./Loading";
import Product from "./Product";

const isNullOrEmpty = (str) => {
  if (str !== undefined && str !== null && str.length > 0) {
    return false;
  }
  return true;
};

const Products = ({ category, filterText, fromAmount, toAmount }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  //lazy loading icin stateler
  const [visible, setVisible] = useState([]);
  const observerRef = useRef(null);
  const [lastElement, setLastElement] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  //Bütün ürünlerin çekilmesi
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  //title  ve fiyata göre arama
  useEffect(() => {
    if (!isNullOrEmpty(filterText) || fromAmount > -1 || toAmount > -1) {
      let filteredVisible = products;
      if (!isNullOrEmpty(filterText)) {
        filteredVisible = filteredVisible.filter((each) =>
          each.title.toLowerCase().includes(filterText.toLowerCase())
        );
      }
      if (fromAmount > -1) {
        filteredVisible = filteredVisible.filter(
          (each) => each.price >= fromAmount
        );
      }
      if (toAmount > -1) {
        filteredVisible = filteredVisible.filter(
          (each) => each.price <= toAmount
        );
      }
      const debaunce = setTimeout(() => {
        setVisible(filteredVisible);
      }, 500);
      return () => {
        clearTimeout(debaunce);
      };
    } else {
      setVisible(products.slice(0, 15));
    }
  }, [filterText, fromAmount, toAmount]);

  useEffect(() => {
    if (products.length > 0) {
      if (!isNullOrEmpty(filterText)) {
        setVisible(
          products
            .slice(0, 15)
            .filter((each) => each.title.includes(filterText))
        );
      } else {
        setVisible(products.slice(0, 15));
      }
    }
  }, [products]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && products.length > visible.length) {
        setIsLoadingMore(true);
        if (isNullOrEmpty(filterText)) {
          setVisible((prev) => [
            ...prev,
            ...products.slice(prev.length, prev.length + 10),
          ]);
        }
        setIsLoadingMore(false);
      }
    });

    if (lastElement) {
      observerRef.current.observe(lastElement);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [lastElement, products, visible, filterText]);

  if (productsStatus === "LOADING") {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex min-h-screen m-6 w-full">
        <div className="flex flex-wrap w-full">
          {visible.map((product) => (
            <Product product={product} key={product.id} />
          ))}

          {isLoadingMore &&
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <Loading />
              </div>
            ))}

          <div ref={setLastElement} style={{ height: "1px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
