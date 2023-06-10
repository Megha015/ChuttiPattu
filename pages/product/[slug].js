import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import OrderModal from "../../components/OrderModal";
import ImageGallery from "react-image-gallery";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const [PaymentMethod, setPaymentMethod] = useState(null);

  const images = image?.map((item) => ({
    original: urlFor(item).url(),
    thumbnail: urlFor(item).url(),
  }));

  const handleOnDelivery = () => {
    setPaymentMethod(0);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>

          {/* <div className="image-container">
            <ImageGallery items={images} />
          </div> */}

          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p className="quantity">{price}</p>
          <p>{details}</p>
          <div className="quantity">
            <div className="sizes-header">
              <h3>Available Sizes:</h3>
              <p className="quantity-desc">
                <span className="plus">Newborn to 6 Years</span>
              </p>
            </div>
          </div>
          <div className="buttons">
            <button className="add-to-cart">
              <AiOutlineWhatsApp /> Whatsapp to +91 87789 13557
            </button>
            <button
              type="button"
              className="buy-now"
              onClick={handleOnDelivery}
            >
              Enquire Now for Availablity and Price
            </button>
          </div>
        </div>
      </div>
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
