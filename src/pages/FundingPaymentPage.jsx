import React, { useState } from "react";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import CircledImage from "../components/CircledImage";
import LongButton from "../components/LongButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  padding: 16px 0;
`;

const Section = styled.div`
  display: grid;
  gap: 16px;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  width: 96px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const SubLabel = styled.div`
  width: 96px;
  font-size: 14px;
  color: #8c8c8c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ImageLabelArea = styled.div`
  display: grid;
  gap: 8px;
  text-align: center;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-right: 16px solid #8c8c8c;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

const SubHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrencySign = styled.div`
  font-family: "Giants-Inline";
  color: #ffdb01;
  font-size: 40px;
`;

const PriceInput = styled.input`
  width: ${(props) => props.value.length * 26 + "px"};
  font-family: "Giants-Inline";
  background: linear-gradient(to right, #ffdb01, #e75025);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 40px;
  border: none;
`;

const AveragePrice = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  text-align: center;
`;

const FundingMessage = styled.textarea`
  background-color: #e7e7e7;
  height: 144px;
  border: none;
  border-radius: 12px;
  padding: 16px;
`;

const FundingPaymentPage = () => {
  const [fundingPrice, setFundingPrice] = useState("0");
  const [fundingMessage, setFundingMessage] = useState("");

  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setFundingPrice(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFundingMessage(e.target.value);
  };

  return (
    <>
      <TopNavBarTitle title="펀딩하기" />
      <Wrapper>
        <TopArea>
          <ImageLabelArea>
            <CircledImage
              width={96}
              height={96}
              src="/assets/images/person.png"
              alt="사람 이미지"
              dDay={2}
            />
            <Label>이나래</Label>
          </ImageLabelArea>
          <Triangle />
          <ImageLabelArea>
            <CircledImage
              width={96}
              height={96}
              src="/assets/images/ps5.png"
              alt="ps5"
            />
            <Label>플레이스테이션 5 디스크 에디션</Label>
            <SubLabel>600,000원</SubLabel>
          </ImageLabelArea>
        </TopArea>

        <Section>
          <SubHeading>금액 선택</SubHeading>
          <InputArea>
            <CurrencySign>\</CurrencySign>
            <PriceInput
              type="number"
              value={fundingPrice}
              onChange={handlePriceChange}
            />
          </InputArea>
          <AveragePrice>평균 펀딩 금액은 45,000원이에요!</AveragePrice>
        </Section>
        <Section>
          <SubHeading>축하 메시지를 남겨보세요!</SubHeading>
          <FundingMessage
            value={fundingMessage}
            onChange={handleMessageChange}
          />
        </Section>

        <LongButton
          label="결제하기"
          onClick={() => {
            navigate("/funding/1/payment/result");
          }}
        />
      </Wrapper>
    </>
  );
};

export default FundingPaymentPage;
