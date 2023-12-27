import { useEffect, useState } from "react";
import usePatients from "../../hooks/usePatients";
import logo from "../../assets/logo.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { VscEllipsis } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { LuArrowUpDown } from "react-icons/lu";
import PatientAdd from "../PatientAdd";
import ActionModal from "../../components/ActionModal";

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainerStyled = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f6f6f6;
  padding: 25px;
`;

const MidlePageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
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
  }
  ::placeholder {
    padding: 0 30px;
  }
`;

const StyledSearch = styled(IoIosSearch)`
  color: #136cdc;
  font-size: 24px;
  position: absolute;
`;

const StyledArrow = styled(LuArrowUpDown)`
  color: #136cdc;
  font-size: 18px;
`;

const StyledEllipsis = styled(VscEllipsis)`
  color: #000000;
  font-size: 24px;
`;

const TextStyleed = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

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
    width: 15%;
  }
  div:nth-child(3) {
    width: 19%;
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
`;

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
    width: 15%;
  }
  p:nth-child(3) {
    width: 19%;
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
`;

export default function PatientsPage() {
  const { search, setSearch } = useState("");
  const { loadPatients, patients } = usePatients();
  const [showState, setShowState] = useState(false);
  console.log(patients);
  useEffect(() => {
    loadPatients();
  }, []);

  const toogleState = () => {
    setShowState((prev) => !prev);
  };

  return (
    <div>
      <LogoStyled>
        <img src={logo} alt="logo gestãoDs" />
      </LogoStyled>
      <HomeContainerStyled>
        <MidlePageStyled>
          <h2>Listagem de pacientes</h2>
          <div>
            <div style={{ position: "relative" }}>
              <StyledSearch>
                <IoIosSearch />
              </StyledSearch>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar"
              />
            </div>

            <PatientAdd />
            {/* <button>Adicionar paciente</button> */}
          </div>
        </MidlePageStyled>
        <div>
          <TitleListStyled>
            <TextStyleed>
              <p>Nome</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
            <TextStyleed>
              <p>CPF</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
            <TextStyleed>
              <p>Data de nascimento</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
            <TextStyleed>
              <p>E-mail</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
            <TextStyleed>
              <p>Cidade</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
            <TextStyleed>
              <p>Ações</p>
              <StyledArrow>
                <LuArrowUpDown />
              </StyledArrow>
            </TextStyleed>
          </TitleListStyled>
          {patients?.map((patient, index) => (
            <PatientListStyled key={index}>
              <p>{patient.patient}</p>
              <p>{patient.cpf}</p>
              <p>{patient.birth}</p>
              <p>{`${patient.patient.toLowerCase()}@gestaods.com.br`}</p>
              <p>{patient.city}</p>
              <ActionModal patient={patient} />
              {/* <VscEllipsis onClick={toogleState} />
              {showState ? (
                <>
                  <ButtonsListStyled>
                    <button>
                      <Link to={`/edit/${patient.id}`}>Editar</Link>
                    </button>
                    <button>
                      <Link to={`/excluir`}>Excluir</Link>
                    </button>
                  </ButtonsListStyled>
                </>
              ) : (
                <></>
              )} */}
            </PatientListStyled>
          ))}
        </div>
      </HomeContainerStyled>
    </div>
  );
}
