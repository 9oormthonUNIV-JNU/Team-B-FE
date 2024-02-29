import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Giants-Inline";
  background: ${(props) =>
    props.background
      ? "#8C8C8C"
      : "linear-gradient(to right, #ffdb01, #e75025)"};
  color: transparent;
  -webkit-background-clip: text;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "inherit")};
`;

const GradientText = ({ children, fontSize, toGray }) => {
  return (
    <StyledDiv background={toGray} fontSize={fontSize}>
      {children}
    </StyledDiv>
  );
};

export default GradientText;
