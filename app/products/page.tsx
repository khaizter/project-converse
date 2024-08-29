import ProductsList from "@/app/products/products-list";
import React, { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div>
      <h1>ProductsPage</h1>
      <Suspense fallback={<div>loading...</div>}>
        <ProductsList />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
