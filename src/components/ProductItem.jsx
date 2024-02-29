import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 112px;
  display: grid;
  gap: 4px;
  color: inherit;
  text-decoration-line: none;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 112px;
  height: 112px;
  overflow: hidden;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.div`
  width: 112px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Price = styled.div`
  width: 112px;
  font-size: 14px;
  font-weight: 700;
  color: #ff7a00;
`;

const ProductItem = ({
  productId,
  productImage,
  productName,
  productPrice,
}) => {
  return (
    <Wrapper to={`/shop/product/${productId}`}>
      <ImageWrapper>
        <Image src={productImage} alt={productName} />
      </ImageWrapper>
      <ProductName>{productName}</ProductName>
      <Price>{productPrice.toLocaleString()}원</Price>
    </Wrapper>
  );
};

export default ProductItem;
