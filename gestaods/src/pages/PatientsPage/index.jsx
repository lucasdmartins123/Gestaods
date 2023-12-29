//pagina princpal que vai aparecer as informações dos pacientes,usar o modal de adicionar paciente e pesquisar paciente

import { useContext, useEffect, useState } from "react";
import usePatients from "../../hooks/usePatients";
import logo from "../../assets/logo.png";
import { styled } from "styled-components";
import { VscEllipsis } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import PatientAdd from "../AddPatient";
import ActionModal from "../../components/ActionModal";
import { PatientsContext } from "../../Context/PatientsContext";

//estilização da logo GestaoDs
const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
`;

//estilização do container da página
const HomeContainerStyled = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f6f6f6;
  padding: 25px;
`;

//estilização do meio da página que inclui a mensagem, o input de pesquisao e o botão de adicionar paciente
const MidlePageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
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
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const InputAddPatientStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }
  input {
    padding-left: 30px;
    margin-left: -5px;
  }
`;

//estilização da lupa na barra de pesquisa
const SearchStyled = styled(IoIosSearch)`
  color: #136cdc;
  font-size: 24px;
  position: absolute;
`;

//estilização do icone de setas
const ArrowStyled = styled(LuArrowUpDown)`
  color: #136cdc;
  font-size: 18px;
`;

//estilização para agrupamento
const TextStyleed = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

//estilização para nome, cpf, data de nascimento, email, cidade e ações
const TitleListStyled = styled.div`
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
    width: 20%;
  }
  div:nth-child(2) {
    width: 16%;
  }
  div:nth-child(3) {
    width: 18%;
  }
  div:nth-child(4) {
    width: 25%;
  }
  div:nth-child(5) {
    width: 15%;
  }
  div:nth-child(6) {
    width: 6%;
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
const PatientListStyled = styled.div`
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
    width: 20%;
  }
  p:nth-child(2) {
    width: 16%;
  }
  p:nth-child(3) {
    width: 18%;
  }
  p:nth-child(4) {
    width: 25%;
  }
  p:nth-child(5) {
    width: 15%;
  }
  button {
    width: 6%;
  }
  @media (max-width: 768px) {
    p {
      font-size: 12px;
    }
  }
`;

export default function PatientsPage() {
  const [search, setSearch] = useState("");
  const { patients, handleSearchPatients, searchPatients } =
    useContext(PatientsContext);

  //função para formatar a data
  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };

  const formatCpf = (cpf) => {
    cpf = cpf.replace(/\D/g, "");

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpf;
  };

  return (
    <div>
      <LogoStyled>
        <img src={logo} alt="logo gestãoDs" />
      </LogoStyled>
      <HomeContainerStyled>
        <MidlePageStyled>
          <h2>Listagem de pacientes</h2>
          <InputAddPatientStyled>
            <div style={{ position: "relative" }}>
              <SearchStyled onClick={() => handleSearchPatients(search)}>
                <IoIosSearch />
              </SearchStyled>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar"
              />
            </div>
            <PatientAdd />
          </InputAddPatientStyled>
        </MidlePageStyled>
        <div>
          <TitleListStyled>
            <TextStyleed>
              <p>Nome</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
            <TextStyleed>
              <p>CPF</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
            <TextStyleed>
              <p>Data de nascimento</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
            <TextStyleed>
              <p>E-mail</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
            <TextStyleed>
              <p>Cidade</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
            <TextStyleed>
              <p>Ações</p>
              <ArrowStyled>
                <LuArrowUpDown />
              </ArrowStyled>
            </TextStyleed>
          </TitleListStyled>
          {searchPatients.length === 0 &&
            patients.map((patient, index) => (
              <PatientListStyled key={index}>
                <p>{patient.patient}</p>
                <p>{formatCpf(patient.cpf)}</p>
                <p>{formatDate(patient.birth)}</p>
                <p>{`${patient.patient.toLowerCase()}@gestaods.com.br`}</p>
                <p>{patient.city}</p>
                <ActionModal patient={patient} />
              </PatientListStyled>
            ))}
          {searchPatients.length > 0 &&
            searchPatients?.map((patient, index) => (
              <PatientListStyled key={index}>
                <p>{patient.patient}</p>
                <p>{formatCpf(patient.cpf)}</p>
                <p>{formatDate(patient.birth)}</p>
                <p>{`${patient.patient.toLowerCase()}@gestaods.com.br`}</p>
                <p>{patient.city}</p>
                <ActionModal patient={patient} />
              </PatientListStyled>
            ))}
        </div>
      </HomeContainerStyled>
    </div>
  );
}
