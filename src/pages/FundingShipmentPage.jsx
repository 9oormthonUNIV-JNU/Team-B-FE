import React, { useState } from "react";
import Input from "../components/Input";
import Modal from "../components/Modal";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import LongButton from "../components/LongButton";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import CircledImage from "../components/CircledImage";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
`;

const Form = styled.form`
  display: grid;
  gap: 8px;
`;

const SubHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const Section = styled.div`
  display: grid;
  gap: 16px;
`;

const ProductArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Price = styled.div`
  color: #ff7a00;
  font-weight: 700;
`;

const FundingShipmentPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setValue("address", fullAddress);

    handleClick();
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <TopNavBarTitle title="배송 정보" />

      <Wrapper>
        <Section>
          <SubHeading>상품 정보</SubHeading>
          <ProductArea>
            <CircledImage
              src="/assets/products/nike.png"
              alt="나이키 에어포스"
              width={96}
              height={96}
            />
            <div>
              <div>나이키 에어포스1 ‘07 CW2288-111 올화이트 에어포스원07</div>
              <Price>118,000원</Price>
            </div>
          </ProductArea>
        </Section>

        <Section>
          <SubHeading>배송지 입력</SubHeading>
          <Form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
            <Input
              id="name"
              type="text"
              placeholder="받는 분 성함"
              {...register("name")}
            />
            <Input
              id="address"
              type="text"
              placeholder="주소"
              onClick={handleClick}
              {...register("address")}
            />
            <Input
              id="extra-address"
              type="text"
              placeholder="나머지 주소"
              {...register("extra-address")}
            />
            <Input
              id="tel"
              type="number"
              placeholder="전화번호"
              {...register("tel")}
            />
            <Input
              id="shipment-message"
              type="text"
              placeholder="배송 메시지"
              {...register("shipment-message")}
            />
            <LongButton
              type="submit"
              label="입력 완료"
              onClick={() => {
                navigate("/funding/1/payment/result");
              }}
            />
          </Form>
        </Section>
      </Wrapper>
      <Modal isOpen={isModalOpen} title="주소 검색" handleClick={handleClick}>
        <DaumPostcode onComplete={handleComplete} />
      </Modal>
    </>
  );
};

export default FundingShipmentPage;
