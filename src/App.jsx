import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy load the page components
const HomePage = React.lazy(() => import("./components/HomePage"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));

function App() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
     <h1 className=" mt-3 text-3xl text-center font-bold">PRODUCTS</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;

