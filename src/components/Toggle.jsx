import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;

  > .toggle-container {
    height: 32px;
    width: 200px;
    border-radius: 9999px;
    box-shadow: 0 0 0 1px #ff7a00 inset;
    text-align: center;
    display: flex;
    align-items: center;
  }

  > .toggle-circle {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 32px;
    border-radius: 9999px;
    background-color: #ff7a00;
    z-index: -1;
    transition: 0.5s;
  }

  > .toggle--checked {
    left: 100px;
    transition: 0.5s;
  }
`;

const Label = styled.div`
  color: ${(props) => props.color};
  width: 100px;
  font-weight: 700;
  transition: 0.5s;
`;

const Toggle = ({ option1, option2 }) => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn && "toggle--checked"}`}>
          <Label color={isOn ? "#FF7a00" : "#ffffff"}>{option1}</Label>
          <Label color={isOn ? "#ffffff" : "#FF7a00"}>{option2}</Label>
        </div>
        <div className={`toggle-circle ${isOn && "toggle--checked"}`} />
      </ToggleContainer>
    </>
  );
};

export default Toggle;
