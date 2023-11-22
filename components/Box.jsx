import React from "react";
import Link from "next/link";
import { urlFor } from "@/Lib/clients";
import product from "@/ecommerce/schemas/product";
import Aos from "aos";
import "aos/dist/aos.css"; 
const Product = ({ product: { image, name, slug, price } }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
    }, []);
  return (
    <div className="services-container">
      <Link href={`/product/${slug.current}`}>
        <div className="box">
          <div className="box-img">
            <img
               src={urlFor(image && image[0])}
              alt=""
              width={250}
              height={250}
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <span className="btn">
            Click Me!
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
