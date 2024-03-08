import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import TopNavBarTitle from "../components/TopNavBarTitle";
import Spinner from "../components/Spinner";
import { instance } from "../apis/instance";

const Grid = styled.div`
  display: grid;
  padding: 24px 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  row-gap: 24px;
`;

const MyRecentPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get(`/histories`);
        setProduct(response.data.response);
        console.log(product);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  });

  return (
    <Suspense fallback={<Spinner />}>
      <>
        <TopNavBarTitle title="최근 본 상품" />
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
    </Suspense>
  );
};

export default MyRecentPage;
