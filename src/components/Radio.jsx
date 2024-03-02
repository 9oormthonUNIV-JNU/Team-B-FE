import React from "react";
import styled from "styled-components";

const Label = styled.label`
  /* border-radius: 12px; */
`;

const Input = styled.input`
  /* appearance: none; */
`;

const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  return (
    <Label>
      <Input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};

export default Radio;
