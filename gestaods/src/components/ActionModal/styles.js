import styled from "styled-components";
import { VscEllipsis } from "react-icons/vsc";

export const ModalBtn = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DotIcon = styled(VscEllipsis)`
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Modal = styled.div.attrs((props) => ({
  style: {
    display: props.open ? "block" : "none",
    ...(props.open && {
      boxShadow: "0px 1px 15px 0px rgba(14, 30, 47, 0.1)",
      borderRadius: "5px",
      position: "absolute",
      top: "-25px",
      right: "-110px",
      background: "white",
    }),
  },
}))`
  @media (max-width: 768px) {
    right: 80px !important;
  }
  @media (max-width: 480px) {
    right: 30px !important;
  }
`;
