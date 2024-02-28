import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #ff7a00;
  border-radius: 9999px;
  color: #ffffff;
`;

const LongButton = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default LongButton;
