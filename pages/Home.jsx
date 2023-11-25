import React, { useEffect } from "react";
import { Product, FooterBanner, HeroBanner, Footer, Navbar } from "@/components";
import { client } from "@/Lib/clients";
import Purchase from "@/components/Purchase";
import Review from "@/components/Review";
import NewsLetter from "@/components/NewsLetter";
import About from "@/components/About";
import Aos from "aos";
import "aos/dist/aos.css"; 

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
></link>;

const Home = ({ products, BannerData }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
    }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div data-aos="zoom-in">
      <HeroBanner heroBanner={BannerData.length && BannerData[0]} />
      </div>
      {console.log(BannerData)}
      <section>
        <Purchase />
      </section>
      <div className="products-heading">
        <h2>
          Explore Our Top Deals <br /> From Top Rated Dealers
        </h2>
      </div>

      <div className="services-container" data-aos="zoom-in-left">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <section>
        <About />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <NewsLetter />
      </section>  
      {/* <FooterBanner FooterBanner={BannerData && BannerData[0]}/> */}
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const BannerQuery = '*[_type == "banner"]';
  const BannerData = await client.fetch(BannerQuery);

  return {
    props: { products, BannerData },
  };
};

export default Home;
