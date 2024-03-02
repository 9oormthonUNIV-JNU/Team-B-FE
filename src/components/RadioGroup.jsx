import React from "react";
import styled from "styled-components";

const Fieldset = styled.fieldset`
  padding: 0;
  /* border: none; */
`;

const RadioGroup = ({ children }) => {
  return <Fieldset>{children}</Fieldset>;
};

export default RadioGroup;
