import React, { Suspense, useState, useEffect } from "react";
import TopNavBarTitle from "../components/TopNavBarTitle";
import CircledImage from "../components/CircledImage";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import LongButton from "../components/LongButton";
import GradientText from "../components/GradientText";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  padding: 16px 0;
`;

const Section = styled.div`
  display: grid;
  gap: 16px;
`;

const UserImageArea = styled.div`
  display: flex;
  justify-content: center;
`;

const UserName = styled.div`
  font-size: 24px;
  text-align: center;
`;

const ProductImageWrapper = styled.div`
  text-align: center;
  height: 144px;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductName = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const MessageBox = styled.div`
  font-size: 14px;
  background-color: #e7e7e7;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
`;

const SubHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const FundedPrice = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

/**
 * @todo 내 펀딩에 들어갈 때와 타인의 펀딩에 들어갈 때 버튼 라벨 구분하기
 */
const FundingPage = () => {
  const navigate = useNavigate();
  const [fundings, setFundings] = useState({});
  const { fundingId } = useParams();

  const computeDday = (end) => {
    const now = new Date();
    const endDate = new Date(end);
    const distance = endDate - now;
    const dDay = Math.floor(distance / (1000 * 60 * 60 * 24));
    return dDay;
  };

  useEffect(() => {
    const fetchFunding = async () => {
      try {
        const response = await instance.get(`/fundings/${fundingId}`);
        setFundings(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchFunding();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {fundingId && (
        <>
          <TopNavBarTitle title="진행중인 펀딩" />
          <Wrapper>
            <Section>
              <UserImageArea>
                <CircledImage
                  width={96}
                  height={96}
                  src={fundings.userProfileImage}
                  alt={fundings.userNickname}
                  dDay={computeDday(fundings.endDate)}
                />
              </UserImageArea>
              <UserName>{fundings.userNickname}</UserName>
            </Section>

            <Section>
              <ProductImageWrapper>
                <ProductImage
                  src={fundings.productImage}
                  alt={fundings.productName}
                />
              </ProductImageWrapper>
              <ProductName>{fundings.productName}</ProductName>
              <MessageBox>{fundings.message}</MessageBox>
            </Section>

            <Section>
              <SubHeading>펀딩 진행률</SubHeading>
              <ProgressBar progress={fundings.progress} showNumber />
            </Section>

            <Section>
              <SubHeading>펀딩 금액</SubHeading>
              <FundedPrice>
                <GradientText fontSize={24}>
                  {fundings.totalAmount}
                </GradientText>
                <GradientText fontSize={24} toGray>
                  /
                </GradientText>
                <GradientText fontSize={24} toGray>
                  {fundings.productPrice}
                </GradientText>
              </FundedPrice>
            </Section>
            <LongButton
              label="펀딩하기"
              onClick={() => {
                navigate("/funding/1/payment");
              }}
            />
          </Wrapper>
        </>
      )}
    </Suspense>
  );
};

export default FundingPage;
