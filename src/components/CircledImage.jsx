import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const CircledImage = ({ src, alt, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

export default CircledImage;
