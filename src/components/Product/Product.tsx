import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="h-fit bg-inherit w-full px-56 pt-56">
      <Image
        className="m-auto"
        data-aos="zoom-in"
        src="/images/landing/Product.svg"
        alt="product"
        width={1100}
        height={1100}
      />
    </div>
  );
};

export default Product;
