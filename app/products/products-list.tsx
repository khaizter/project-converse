import { getProducts } from "@/lib/products";
import React from "react";
import Image from "next/image";

const ProductsList = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {products?.length > 0 ? (
        <>
          {products.map((product, index) => {
            return (
              <div key={index}>
                <Image
                  src={product.image || "no image"}
                  alt={product.name || "no name"}
                  width={204}
                  height={209}
                />
                <div>{product.name || "no name"}</div>
                <div>{product.price || "no price"}</div>
              </div>
            );
          })}
        </>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default ProductsList;
