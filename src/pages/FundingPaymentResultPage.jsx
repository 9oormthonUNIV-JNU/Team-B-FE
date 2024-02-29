import React from "react";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import CircledImage from "../components/CircledImage";
import LongButton from "../components/LongButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
`;

const Section = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  display: grid;
  gap: 16px;
  top: 50%;
  transform: translate(0, -50%);
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const SubHeading = styled.div`
  font-size: 16px;
  color: #8c8c8c;
`;

const FundingPaymentResultPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNavBarTitle title="펀딩완료" />
      <Wrapper>
        <Section>
          <ImageWrapper>
            <CircledImage
              width={96}
              height={96}
              src="/assets/images/person.png"
              alt="사람 이미지"
            />
            <CircledImage
              width={96}
              height={96}
              src="/assets/images/ps5.png"
              alt="ps5"
            />
          </ImageWrapper>
          <Heading>결제가 완료되었어요!</Heading>
          <SubHeading>펀딩해주셔서 감사합니다.</SubHeading>
        </Section>
      </Wrapper>
      <LongButton
        label="홈으로"
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};

export default FundingPaymentResultPage;
