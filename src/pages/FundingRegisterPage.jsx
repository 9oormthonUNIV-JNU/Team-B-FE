import React, { Suspense, useEffect, useState } from "react";
import Radio from "../components/Radio";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import LongButton from "../components/LongButton";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all; */
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

const Form = styled.form`
  padding: 16px 0;
  display: grid;
  gap: 24px;
`;

const FundingRegisterPage = () => {
  const { productId, productName, productImage, productPrice } = useSelector(
    (state) => state.product
  );

  const navigate = useNavigate();

  const [eventDate, setEventDate] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [fundingMessage, setFundingMessage] = useState("");
  const [eventType, setEventType] = useState("BIRTHDAY");

  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFundingMessage(e.target.value);
  };

  useEffect(() => {
    if (eventDate) {
      const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;
      const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

      const event = new Date(eventDate);

      const startDate = new Date(event - TWO_WEEKS);
      const endDate = new Date(event);
      endDate.setTime(endDate.getTime() + ONE_WEEK);

      // setEventStartDate(
      //   `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(
      //     2,
      //     0
      //   )}-${String(startDate.getDate()).padStart(2, 0)}`
      // );
      // setEventEndDate(
      //   `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(
      //     2,
      //     0
      //   )}-${String(endDate.getDate()).padStart(2, 0)}`
      // );

      setEventStartDate(startDate.toISOString());
      setEventEndDate(endDate.toISOString());
    }
  }, [eventDate]);

  const registerFunding = async () => {
    return await instance.post("/fundings", {
      productId,
      event: eventType,
      startDate: eventStartDate,
      endDate: eventEndDate,
      message: fundingMessage,
    });
  };

  const handleSelect = (e) => {
    if (!e.target.value) return;
    setEventType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerFunding()
      .then(() => {
        alert("등록이 완료되었습니다.");
        navigate("/");
      })
      .catch((e) => {
        alert("일시적인 오류로 등록에 실패했습니다.");
      });
  };

  return (
    <Suspense fallback={<Spinner />}>
      <>
        <TopNavBarTitle title="펀딩 등록" />
        <Form onSubmit={handleSubmit}>
          <Section>
            <SubHeading>상품 정보</SubHeading>
            <ProductArea>
              <ImageWrapper>
                <Image src={productImage} alt={productName} />
              </ImageWrapper>
              <div>
                <ProductName>{productName}</ProductName>
                <ProductPrice>{productPrice.toLocaleString()}원</ProductPrice>
              </div>
            </ProductArea>
          </Section>

          <Section>
            <SubHeading>이벤트 구분</SubHeading>
            <div onClick={handleSelect}>
              <Radio name="event" value="BIRTHDAY" defaultChecked>
                생일
              </Radio>
              <Radio name="event" value="GRADUATION">
                졸업
              </Radio>
              <Radio name="event" value="FIRST_BIRTHDAY_PARTY">
                돌잔치
              </Radio>
              <Radio name="event" value="MARRIAGE">
                결혼
              </Radio>
            </div>
          </Section>

          <Section>
            <SubHeading>날짜</SubHeading>
            <input type="date" onChange={handleDateChange} />
            {eventDate && (
              <div>
                펀딩 기간: {eventStartDate} ~ {eventEndDate}
              </div>
            )}
          </Section>

          <Section>
            <SubHeading>펀딩 메시지</SubHeading>
            <FundingMessage
              value={fundingMessage}
              onChange={handleMessageChange}
            />
          </Section>
          <LongButton type="submit" label="펀딩하기" />
        </Form>
      </>
    </Suspense>
  );
};

export default FundingRegisterPage;
