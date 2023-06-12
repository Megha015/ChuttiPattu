import { React, useEffect } from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = ({ products, bannerData }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2 data-aos="zoom-in">Best selling products</h2>
        <p data-aos="zoom-out">
          Customized Ethnic collections for your Chutti Pattus
        </p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};
export const getServerSideProps = async (params) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const query1 = `*[_type == 'order' && _id == '${params.id}']`;
  let order = null;
  const { id } = query;
  // const order = await client.fetch(query1);

  if (id) {
    const orderQuery = `*[_type == 'order' && _id == '${id}']`;
    const orderData = await client.fetch(orderQuery);
    order = orderData[0]; // Assign the order value if it exists
  }

  return {
    props: { products, bannerData, order },
  };
};
export default Home;

// export const getServerSideProps = async ({ query }) => {
//   const { id } = query; // Extract the id from the query object

//   const productsQuery = '*[_type == "product"]';
//   const products = await client.fetch(productsQuery);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   let order = null; // Set a default value for order

//   if (id) {
//     const orderQuery = `*[_type == 'order' && _id == '${id}']`;
//     const orderData = await client.fetch(orderQuery);
//     order = orderData[0]; // Assign the order value if it exists
//   }

//   return {
//     props: { products, bannerData, order },
//   };
// };

// export default Home;
