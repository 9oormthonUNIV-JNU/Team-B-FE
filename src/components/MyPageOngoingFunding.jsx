import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useParams } from "react-router-dom";
import { instance } from "../apis/instance";

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
  const [funding, setFundings] = useState({});
  const { fundingId } = useParams();

  useEffect(() => {
    const fetchFunding = async () => {
      try {
        const response = await instance.get(
          `/fundings?state={진행 상태}`
        ); /* url 수정필요 */
        setFundings(response.body.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchFunding();
  }, [funding, fundingId]);

  return (
    <>
      <div>진행중인 펀딩</div>
      {fundingId && (
        <Wrapper to={`/fundings/${fundingId}`}>
          <Container>
            <ImageWrapper>
              <Image src={funding.productImage} alt={funding.productName} />
            </ImageWrapper>
            <SectionRight>
              <ProductName>{fundingId.productName}</ProductName>
              <ProductPrice>{funding.productPrice}</ProductPrice>
              <ProgressBar progress={funding.progress} />
            </SectionRight>
          </Container>
        </Wrapper>
      )}
    </>
  );
};

export default MyPageOngoingFunding;
