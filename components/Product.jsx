import React from "react";
import Link from "next/link";
import { urlFor } from "@/Lib/clients";
import product from "@/ecommerce/schemas/product";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <section className="services" id="services">
    <div className="services-container">
      <Link href={`/product/${slug.current}`} className="services-container">
        <div className="box">
          <div className="box-img">
            <img src={urlFor(image && image[0])} alt="" />
          </div>
          <h3 className="product-name">{name}</h3>
          <h2>
            <span>
              <h2 className="product-price">${price}</h2>
            </span>
          </h2>
          <span className="btn">Click Me!</span>
        </div>
      </Link>
    </div>
    </section>
  );
};

export default Product;
