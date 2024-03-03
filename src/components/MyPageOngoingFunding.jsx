import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const Wrapper = styled(Link)`
  display: grid;
  gap: 16px;
  padding: 16px 0;
  color: inherit;
  text-decoration-line: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SectionRight = styled.div`
  display: grid;
  gap: 4px;
`;

const ProductName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ProductPrice = styled.div`
  font-weight: 700;
  color: #ff7a00;
`;

const MyPageOngoingFunding = () => {
  return (
    <>
      <Wrapper>
        <div>진행중인 펀딩</div>
        <Container>
          <ImageWrapper>
            <Image src="/assets/products/nike.png" alt="나이키 에어포스" />
          </ImageWrapper>
          <SectionRight>
            <ProductName>
              나이키 에어포스1 '07 CW2288-111 올화이트 에어포스원07
            </ProductName>
            <ProductPrice>118,000원</ProductPrice>
            <ProgressBar progress={75} />
          </SectionRight>
        </Container>
      </Wrapper>
    </>
  );
};

export default MyPageOngoingFunding;
