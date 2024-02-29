import React from "react";
import styled from "styled-components";
import GradientText from "./GradientText";

const Outer = styled.div`
  position: relative;
  background-color: #e7e7e7;
  height: 12px;
  border-radius: 9999px;
`;

const Inner = styled.div`
  width: ${(props) => props.width + "%"};
  background: linear-gradient(to right, #ffdb01, #e75025);
  border-radius: 9999px;
  height: 12px;
`;

const Number = styled.div`
  position: absolute;
  left: ${(props) => props.left + "%"};
  transform: translate(-50%, 0);
`;

const ProgressBar = ({ progress, showNumber }) => {
  return (
    <>
      <Outer>
        <Inner width={progress}></Inner>
        {showNumber && (
          <Number left={progress}>
            <GradientText>{progress}%</GradientText>
          </Number>
        )}
      </Outer>
    </>
  );
};

export default ProgressBar;
