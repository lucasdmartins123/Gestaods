import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
`;

//estilização da logo GestaoDs
export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

//estilização do container da página
export const Container = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f6f6f6;
  padding: 25px;
  overflow: hidden;
`;

//estilização do meio da página que inclui a mensagem, o input de pesquisao e o botão de adicionar paciente
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: sans-serif;
    color: black;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding: 0 16px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    background-color: #136cdc;
    color: #ffffff;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  input {
    border-radius: 5px;
    padding: 10px 15px;
    border: 1px solid #136cdc;
    margin-left: -15px;
    padding-left: 50px;
    outline: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h2 {
      padding-bottom: 10px;
    }
    div {
      flex-direction: column;
    }
    input {
      margin-left: 6px;
      padding: 10px 20px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      padding-bottom: 5px;
    }
    input {
      padding-left: 30px;
      margin-left: 8px;
      padding: 5px 15px;
    }
  }
`;

//estilização da lupa na barra de pesquisa
export const SearchIcon = styled(IoIosSearch)`
  color: #136cdc;
  font-size: 24px;
  position: absolute;
  @media (max-width: 768px) {
    left: 8px;
    top: 11px;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    left: 10px;
    top: 8px;
  }
`;

//estilização do icone de setas
export const ArrowIcon = styled(LuArrowUpDown)`
  color: #136cdc;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

//estilização para agrupamento
export const TitleLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ListContainer = styled.div`
  min-width: 1032px;
  overflow-x: scroll;
`;

//estilização para nome, cpf, data de nascimento, email, cidade e ações
export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  padding: 16px 0;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
  }
  div:nth-child(1) {
    width: 18%;
  }
  div:nth-child(2) {
    width: 16%;
  }
  div:nth-child(3) {
    width: 19%;
  }
  div:nth-child(4) {
    width: 23%;
  }
  div:nth-child(5) {
    width: 15%;
  }
  div:nth-child(6) {
    width: 9%;
  }
  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 480px) {
    p {
      font-size: 10px;
    }
  }
`;

//estilização da lista de pacientes
export const ListBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 0px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  p:nth-child(1) {
    width: 18%;
  }
  p:nth-child(2) {
    width: 16%;
  }
  p:nth-child(3) {
    width: 19%;
  }
  p:nth-child(4) {
    width: 23%;
  }
  p:nth-child(5) {
    width: 15%;
  }
  .modal-btn-container {
    width: 9%;
  }
  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 480px) {
    p {
      font-size: 10px;
    }
  }
`;
