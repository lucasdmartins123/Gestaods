import styled from "styled-components";

import { VscChromeClose } from "react-icons/vsc";

//estilização do modal do botão de excluir
export const ModalButtonContainer = styled.div`
  button {
    font-size: 14px;
    color: #656565;
    padding: 10px 16px;
  }
  button:hover {
    background-color: #edf3fc;
    color: #136cdc;
  }
`;

//estilização da parte superior do modal de excluir
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.75em;
    color: #510972;
  }
`;

//estilização do botão de voltar do modal de excluir
export const CloseIcon = styled(VscChromeClose)`
  color: #656565;
  font-size: 24px;
`;

//estilização do meio do modal de excluir que incluir a figura e as duas mensagens
export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 150px;
    padding-bottom: 16px;
  }
  span:first-child {
    padding: 16px;
    font-family: serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
  span:last-child {
    padding: 10px 10px 30px 10px;
    font-family: serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #565656;
  }
`;

//estilização da parte inferior do modal de excluir que incluir os botões de cancelar e excluir
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  gap: 15px;
  button:first-child {
    background-color: #ffffff;
    color: #136cdc;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #136cdc;
    cursor: pointer;
  }
  button:first-child:hover {
    background-color: #b2cdee;
  }
  button:last-child {
    background-color: #c52525;
    color: #ffffff;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #fff;
    cursor: pointer;
  }

  button:last-child:hover {
    background-color: #c65b5b;
  }
`;
