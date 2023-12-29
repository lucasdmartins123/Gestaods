import styled from "styled-components";

export const OpenButtonContainer = styled.div`
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

//estilização do container do modal
export const ModalContainer = styled.div`
  padding: 16px 0px;
`;

//estilização do container das opções do modal
export const ModalOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebeef1;

  button {
    color: #656565;
    background-color: #fff;
    border: none;
  }
  .active {
    position: relative;
    color: #4f1368;
  }
  .active::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #4f1368;
    box-sizing: border-box;
  }
`;

//estilização do logo do modal
export const LogoContainer = styled.div`
  padding: 27px 10px 0 10px;
`;

//estilização do container das informações do modal
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 16px;
  column-gap: 48px;
  padding-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    column-gap: 12px;
  }
`;

//estilização do container dos inputs do modal
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  overflow: hidden;
  width: 100%;

  input {
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    padding: 10px 15px;
    max-width: 100%;
    width: 100%;
    outline: none;
  }
  select {
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    padding: 10px 15px;
    width: 100%;
  }
`;

//estilização do container das observações adicionais
export const ObservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  overflow: hidden;
  width: 100%;
  label {
    padding-top: 15px;
  }
  textarea {
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    padding: 10px 15px;
    max-width: 100%;
    width: 100%;
    height: 73px;
    max-height: 100%;
    outline: none;
    resize: none;
  }
`;
//estilização do container do botão do modal
export const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button:hover {
    background-color: #3c89e7;
  }
`;

//estilização do botão do modal
export const ModalButton = styled.button`
  background-color: #136cdc;
  color: #ffffff;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #fff;
  cursor: pointer;
`;
