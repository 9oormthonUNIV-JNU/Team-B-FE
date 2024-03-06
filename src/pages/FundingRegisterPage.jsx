import React, { Suspense, useEffect, useState } from "react";
import Radio from "../components/Radio";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import LongButton from "../components/LongButton";
import { useParams } from "react-router-dom";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

const Section = styled.div`
  display: grid;
  gap: 16px;
`;

const SubHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const ProductArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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

const FundingMessage = styled.textarea`
  background-color: #e7e7e7;
  height: 144px;
  border: none;
  border-radius: 12px;
  padding: 16px;
`;

const FundingRegisterPage = () => {
  const [eventDate, setEventDate] = useState("");
  const [fundingMessage, setFundingMessage] = useState("");
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFundingMessage(e.target.value);
  };

  useEffect(() => {
    console.log(eventDate);
    console.log(fundingMessage);
  }, [eventDate, fundingMessage]);

  useEffect(() => {
    const fetchFunding = async() => {
      try {
        const response = await instance.post(`/fundings`);
        setProduct(response.body.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchFunding();
  }, [product, productId]);

  return (
    <Suspense fallback={<Spinner />}>
      {product && (
        <>
        <TopNavBarTitle title="펀딩 등록" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("등록이 완료되었습니다.");
          }}>
          <Section>
            <SubHeading>상품 정보</SubHeading>
            <ProductArea>
              <ImageWrapper>
                <Image src={product.productImage} alt={product.productImage}/>
              </ImageWrapper>
              <div>
                <ProductName>{product.productName}</ProductName>
                <ProductPrice>{product.productPrice}</ProductPrice>
              </div>
            </ProductArea>
          </Section>
  
          <Section>
            <SubHeading>이벤트 구분</SubHeading>
            <div>
              <Radio name="event" value="birthday" defaultChecked>
                생일
              </Radio>
              <Radio name="event" value="graduation">
                졸업
              </Radio>
              <Radio name="event" value="babybirthday">
                돌잔치
              </Radio>
              <Radio name="event" value="marriage">
                결혼
              </Radio>
            </div>
          </Section>
  
          <Section>
            <SubHeading>날짜</SubHeading>
            <input type="date" onChange={handleDateChange} />
          </Section>
  
          <Section>
            <SubHeading>펀딩 메시지</SubHeading>
            <FundingMessage
              value={fundingMessage}
              onChange={handleMessageChange}
            />
          </Section>
          <LongButton type="submit" label="펀딩하기" />
        </form>
      </>
      )}
    </Suspense>
  );
};

export default FundingRegisterPage;
