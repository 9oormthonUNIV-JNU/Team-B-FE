import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f6f6f6;
  box-shadow: 0 0 0 1px #949494 inset;
  border: none;
  outline: none;
`;

const Input = forwardRef(
  ({ type = "text", placeholder, value, ...props }, ref) => {
    return (
      <StyledInput
        type={type}
        ref={ref}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    );
  }
);

export default Input;
