import React from "react";
import TopNavBarTitle from "../components/TopNavBarTitle";
import CircledImage from "../components/CircledImage";
import styled from "styled-components";
import GradientText from "../components/GradientText";
import ProgressBar from "../components/ProgressBar";
import LongButton from "../components/LongButton";

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  padding: 16px 0;
`;

const Section = styled.div`
  display: grid;
  gap: 16px;
`;

const SubHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const MessageBox = styled.div`
  font-size: 14px;
  background-color: #e7e7e7;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
`;

const FundedPrice = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProfileArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const FundingNotificationPage = () => {
  return (
    <>
      <TopNavBarTitle title="펀딩 알림" />
      <Wrapper>
        <ProfileArea>
          <CircledImage
            src="/assets/images/person.png"
            alt="이나래"
            width={96}
            height={96}
          />
          <div>
            이나래님으로부터
            <br />
            펀딩받았어요!
          </div>
        </ProfileArea>
        <MessageBox>지은아 생일축하해🎁</MessageBox>

        <Section>
          <SubHeading>받은 금액</SubHeading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GradientText fontSize={52}>\19,500</GradientText>
          </div>
        </Section>

        <Section>
          <SubHeading>펀딩 진행률</SubHeading>
          <ProgressBar progress={75} showNumber />
        </Section>

        <Section>
          <SubHeading>펀딩 금액</SubHeading>
          <FundedPrice>
            <GradientText fontSize={24}>400,000</GradientText>
            <GradientText fontSize={24} toGray>
              /
            </GradientText>
            <GradientText fontSize={24} toGray>
              600,000
            </GradientText>
          </FundedPrice>
        </Section>
      </Wrapper>
      <LongButton label="카톡으로 감사인사 보내기" onClick={() => {}} />
    </>
  );
};

export default FundingNotificationPage;
