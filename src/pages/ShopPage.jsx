import React, { Suspense, useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import Spinner from "../components/Spinner";
import { instance } from "../apis/instance";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  padding: 24px 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  row-gap: 24px;
`;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const images = [
    { src: "/assets/Carousel/carousel1.png", alt: "캐러셀1" },
    { src: "/assets/Carousel/carousel2.png", alt: "캐러셀2" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get("/products");
        setProducts(response.data.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Heading>선물샵</Heading>
      <ImageCarousel images={images} />
      <Suspense fallback={<Spinner />}>
        <Grid>
          {products &&
            products.map((item) => (
              <ProductItem
                key={item.productId}
                productId={item.productId}
                productImage={item.productImage}
                productName={item.productName}
                productPrice={item.productPrice}
              />
            ))}
        </Grid>
      </Suspense>
    </>
  );
};

export default ShopPage;
