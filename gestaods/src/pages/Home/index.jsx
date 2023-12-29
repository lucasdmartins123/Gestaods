import { useContext, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import {
  MainContainer,
  Logo,
  Container,
  MainContent,
  SearchIcon,
  ArrowIcon,
  TitleLabel,
  ListHeader,
  ListBody,
  ListContainer,
} from "./styles";

import PatientAdd from "../../components/AddPatient";
import ActionModal from "../../components/ActionModal";
import { PatientsContext } from "../../Context/PatientsContext";

export default function Home() {
  const [search, setSearch] = useState("");

  const mainRef = useRef();

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
    <MainContainer ref={mainRef}>
      <Logo>
        <img src={logo} alt="logo gestãoDs" />
      </Logo>
      <Container>
        <MainContent>
          <h2>Listagem de pacientes</h2>
          <div>
            <div style={{ position: "relative" }}>
              <SearchIcon onClick={() => handleSearchPatients(search)} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Pesquisar"
              />
            </div>
            <PatientAdd />
          </div>
        </MainContent>
        <ListContainer>
          <ListHeader>
            <TitleLabel>
              <p>Nome</p>

              <ArrowIcon />
            </TitleLabel>
            <TitleLabel>
              <p>CPF</p>

              <ArrowIcon />
            </TitleLabel>
            <TitleLabel>
              <p>Data de nascimento</p>

              <ArrowIcon />
            </TitleLabel>
            <TitleLabel>
              <p>E-mail</p>

              <ArrowIcon />
            </TitleLabel>
            <TitleLabel>
              <p>Cidade</p>

              <ArrowIcon />
            </TitleLabel>
            <TitleLabel>
              <p>Ações</p>

              <ArrowIcon />
            </TitleLabel>
          </ListHeader>
          {searchPatients.length === 0 &&
            patients.map((patient, index) => (
              <ListBody key={index}>
                <p>{patient.patient}</p>
                <p>{formatCpf(patient.cpf)}</p>
                <p>{formatDate(patient.birth)}</p>
                <p>{`${patient.patient.toLowerCase()}@gestaods.com.br`}</p>
                <p>{patient.city}</p>
                <ActionModal patient={patient} mainRef={mainRef} />
              </ListBody>
            ))}
          {searchPatients.length > 0 &&
            searchPatients?.map((patient, index) => (
              <ListBody key={index}>
                <p>{patient.patient}</p>
                <p>{formatCpf(patient.cpf)}</p>
                <p>{formatDate(patient.birth)}</p>
                <p>{`${patient.patient.toLowerCase()}@gestaods.com.br`}</p>
                <p>{patient.city}</p>
                <div className="modal-btn-container">
                  <ActionModal patient={patient} mainRef={mainRef} />
                </div>
              </ListBody>
            ))}
        </ListContainer>
      </Container>
    </MainContainer>
  );
}
