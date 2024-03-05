import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Image src="/assets/Spinner.gif" alt="" />
    </Wrapper>
  );
};

export default Spinner;
