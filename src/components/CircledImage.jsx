import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width + "px" : "56px")};
  height: ${(props) => (props.height ? props.height + "px" : "56px")};
`;

const Circle = styled.div`
  width: ${(props) => (props.width ? props.width + "px" : "56px")};
  height: ${(props) => (props.height ? props.height + "px" : "56px")};
  border-radius: 9999px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Dday = styled.div`
  position: absolute;
  font-family: "Giants-Inline";
  background-color: #ff7a00;
  border-radius: 9999px;
  padding: 0 8px;
  color: #ffffff;
  bottom: 0;
  right: 0;
`;

const CircledImage = ({ src, alt, width, height, dDay }) => {
  return (
    <Wrapper width={width} height={height}>
      <Circle width={width} height={height}>
        <Image src={src} alt={alt} />
      </Circle>
      {dDay && <Dday>D-{dDay}</Dday>}
    </Wrapper>
  );
};

export default CircledImage;
