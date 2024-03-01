import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const CloseButton = styled.img`
  position: absolute;
  right: 20px;
`;

const Modal = ({ isOpen, title, children, handleClick }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      display: "grid",
      gap: "16px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "max-content",
      borderRadius: "12px",
      boxShadow:
        "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClick} style={modalStyle}>
      <Title>
        {title}
        <CloseButton
          src="/assets/Modal/Close.svg"
          alt="닫기 버튼"
          onClick={handleClick}
        />
      </Title>
      {children}
    </ReactModal>
  );
};

export default Modal;
