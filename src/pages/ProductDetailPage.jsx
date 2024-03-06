import React, { Suspense, useEffect, useState } from "react";
import LongButton from "../components/LongButton";
import styled from "styled-components";
import Modal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
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

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get(`/products/${productId}`);
        setProduct(response.body.data);
        console.log(product);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduct();
  }, [product, productId]);

  return (
    <Suspense fallback={<Spinner />}>
      {product && (
        <>
          <ImageWrapper>
            <Image src={product.productImage} alt={product.productName} />
          </ImageWrapper>
          <ProudctName>{product.productName}</ProudctName>
          <ProductPrice>{product.productPrice}원</ProductPrice>
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
