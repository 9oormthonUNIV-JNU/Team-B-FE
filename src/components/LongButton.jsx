import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  font-size: 16px;
  font-weight: 700;
  background-color: #ff7a00;
  border-radius: 9999px;
  color: #ffffff;
  appearance: none;

  &:disabled {
    background-color: #8c8c8c;
  }

  &:active {
    filter: brightness(75%);
  }
`;

const LongButton = ({ label, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {label}
    </StyledButton>
  );
};

export default LongButton;
