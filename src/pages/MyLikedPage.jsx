import React, { useEffect, Suspense, useState } from "react";
import styled from "styled-components";
import TopNavBarTitle from "../components/TopNavBarTitle";
import ProductItem from "../components/ProductItem";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

const Grid = styled.div`
  display: grid;
  padding: 24px 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  row-gap: 24px;
`;

const MyLikedPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get("/wishlists");
        setProduct(response.data.response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  });

  return (
    <Suspense fallback={<Spinner />}>
      {product && (
        <>
          <TopNavBarTitle title="찜하기" />
          <Grid>
            {product.map((item) => (
              <ProductItem
                key={item.productId}
                productId={item.productId}
                productImage={item.productImage}
                productName={item.productName}
                productPrice={item.productPrice}
              />
            ))}
          </Grid>
        </>
      )}
    </Suspense>
  );
};

export default MyLikedPage;
