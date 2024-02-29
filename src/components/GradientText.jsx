import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Giants-Inline";
  background: linear-gradient(to right, #ffdb01, #e75025);
  color: transparent;
  -webkit-background-clip: text;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "inherit")};
`;

const GradientText = ({ children, fontSize }) => {
  return <StyledDiv fontSize={fontSize}>{children}</StyledDiv>;
};

export default GradientText;
