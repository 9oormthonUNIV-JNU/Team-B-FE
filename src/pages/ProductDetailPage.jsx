import React, { useState } from "react";
import LongButton from "../components/LongButton";
import styled from "styled-components";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ImageWrapper>
        <Image src="/assets/products/ps5.png" alt="ps5" />
      </ImageWrapper>
      <ProudctName>플레이스테이션 5 디스크 에디션</ProudctName>
      <ProductPrice>458,000원</ProductPrice>
      <hr />
      <SubHeading>상품 설명</SubHeading>
      <ProductDescription>
        빛이 그대로 살아 있는 나이키 에어 포스 1 ’07은 OG 농구화로서 많은 사랑을
        받아온 디자인에 새로운 멋을 더했습니다. 튼튼하게 스티치 처리된
        오버레이와 깔끔한 마감 처리, 과하지 않은 절제된 화려함으로 빛나는
        존재감을 발휘해 보세요.
        <br />
        <br />- 현재 컬러: 화이트/화이트
        <br />- 스타일 번호: CW2288-111
      </ProductDescription>
      <LongButton label="펀딩 받기" onClick={handleClick} />
      <Modal
        isOpen={isModalOpen}
        title="펀딩을 시작할까요?"
        handleClick={handleClick}>
        <ModalProductArea>
          <ModalImageWrapper>
            <Image src="/assets/products/ps5.png" alt="ps5" />
          </ModalImageWrapper>
          <div>
            <ModalProductName>플레이스테이션 5 디스크 에디션</ModalProductName>
            <ModalProductPrice>458,000원</ModalProductPrice>
          </div>
        </ModalProductArea>
        <LongButton
          label="시작하기"
          onClick={() => {
            navigate("/shop/product/1/funding");
          }}
        />
      </Modal>
    </>
  );
};

export default ProductDetailPage;
