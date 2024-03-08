import React, { Suspense, useEffect, useState } from "react";
import LongButton from "../components/LongButton";
import styled from "styled-components";
import Modal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";
import LikeButton from "../components/LikeButton";
import { productThunk } from "../store/slices/productSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const ImageWrapper = styled.div`
  width: 100%;
  height: 256px;
  overflow: hidden;
  border-radius: 12px;
`;

const ModalProductArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ModalImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 12px;
`;

const ModalProductName = styled.div`
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all; */
`;

const ModalProductPrice = styled.div`
  font-weight: 700;
  color: #ff7a00;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProudctName = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #ff7a00;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const ProductDescription = styled.p`
  font-size: 14px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    dispatch(productThunk(productId))
      .then(unwrapResult)
      .then((data) => {
        setProduct(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch, productId]);

  useEffect(() => {
    const fetchLike = async () => {
      try {
        const response = await instance.get(`/products/${productId}/wishlists`);
        if (response.data.status === "success") setIsLiked(true);
      } catch (e) {
        setIsLiked(false);
      }
    };

    fetchLike();
  }, [productId]);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await instance.delete(`/products/${productId}/wishlists`);
        setIsLiked(false);
      } else {
        await instance.post(`/products/${productId}/wishlists`);
        setIsLiked(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Suspense fallback={<Spinner />}>
      {product && (
        <>
          <ImageWrapper>
            <Image src={product.productImage} alt={product.productName} />
          </ImageWrapper>
          <ProudctName>{product.productName}</ProudctName>
          <SpaceBetween>
            <ProductPrice>{product.productPrice}원</ProductPrice>
            <LikeButton isLiked={isLiked} handleClick={handleLike} />
          </SpaceBetween>
          <hr />
          <SubHeading>상품 설명</SubHeading>
          <ProductDescription>{product.productDescription}</ProductDescription>
          <LongButton label="펀딩 받기" onClick={handleClick} />
          <Modal
            isOpen={isModalOpen}
            title="펀딩을 시작할까요?"
            handleClick={handleClick}>
            <ModalProductArea>
              <ModalImageWrapper>
                <Image src={product.productImage} alt={product.productName} />
              </ModalImageWrapper>
              <div>
                <ModalProductName>{product.productName}</ModalProductName>
                <ModalProductPrice>{product.productPrice}원</ModalProductPrice>
              </div>
            </ModalProductArea>

            <LongButton
              label="시작하기"
              onClick={() => {
                navigate(`/shop/product/${productId}/funding`);
              }}
            />
          </Modal>
        </>
      )}
    </Suspense>
  );
};

export default ProductDetailPage;
