import api from "../../axios/config";
import { useEffect, useState } from "react";
import usePatients from "../../hooks/usePatients";
import user from "../../assets/user.png";
import { styled } from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  position,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";

const ModalContainerStyled = styled.div`
  padding: 16px 0px;
`;

const OptionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const LogoStyled = styled.div`
  padding: 20px 10px;
`;

const InputContainerStyled = styled.div`
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

const InfosStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 16px;
  column-gap: 48px;
`;

const ButtonContainerStyled = styled.div`
  width: 100%;
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonStyled = styled.button`
  background-color: #136cdc;
  color: #ffffff;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #fff;
  cursor: pointer;
`;

const StyledPlus = styled(GoPlus)`
  color: #fff;
  left: 5px;
  font-size: 25px;
  position: absolute;
`;

export default function PatientAdd() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showInfo, setShowInfo] = useState(true);
  const [data, setData] = useState({
    patient: "",
    nickname: "",
    nationality: "",
    birth: "",
    cpf: "",
    rg: "",
    gender: "",
    civilState: "",
    addtionalObersavations: "",
    cep: "",
    city: "",
    uf: "",
    address: "",
    number: "",
    neighborhood: "",
    complement: "",
  });

  const { addPatient, loading } = usePatients();

  const handleSaveInfo = (e) => {
    e.preventDefault();
    addPatient(data);
    localStorage.removeItem("patientData");
  };

  const toogleInfoState = () => {
    setShowInfo((prev) => !prev);
  };

  const saveDataOnLocalStorage = () => {
    localStorage.setItem("patientData", JSON.stringify(data));
  };

  const changeToContact = () => {
    toogleInfoState();
    saveDataOnLocalStorage();
  };

  const handleCep = async (cep) => {
    setData((prev) => ({ ...prev, cep }));
    if (cep.length < 8) {
      return;
    }
    try {
      const cepData = await api.get(`${cep}/json`);
      if (cepData.status === 200) {
        setData((prev) => ({
          ...prev,
          city: cepData.data.localidade,
          uf: cepData.data.uf,
          address: cepData.data.logradouro,
          neighborhood: cepData.data.bairro,
          complement: cepData.data.complemento,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storageData = localStorage.getItem("patientData");
    if (storageData) {
      setData(JSON.parse(storageData));
    }
  }, []);

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        style={{ position: "relative" }}
      >
        <StyledPlus>
          <GoPlus />
        </StyledPlus>
        <span style={{ marginLeft: "25px" }}>Adicionar Paciente</span>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ minWidth: "800px" }}>
          <ModalBody>
            <ModalContainerStyled>
              <OptionsStyled>
                <button
                  className={`${showInfo && "active"}`}
                  onClick={toogleInfoState}
                >
                  Informações básicas
                </button>
                <button
                  className={`${!showInfo && "active"}`}
                  onClick={toogleInfoState}
                >
                  Contato
                </button>
              </OptionsStyled>
              {showInfo ? (
                <form>
                  <LogoStyled>
                    <img src={user} alt="logo gestãoDs" />
                  </LogoStyled>

                  <InfosStyled>
                    <InputContainerStyled>
                      <label>Paciente:</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            patient: e.target.value,
                          }))
                        }
                        value={data.patient}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Apelido</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            nickname: e.target.value,
                          }))
                        }
                        value={data.nickname}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Nacionalidade</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            nationality: e.target.value,
                          }))
                        }
                        value={data.nationality}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Nascimento</label>
                      <input
                        type="date"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            birth: e.target.value,
                          }))
                        }
                        value={data.birth}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>CPF</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, cpf: e.target.value }))
                        }
                        value={data.cpf}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>RG</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, rg: e.target.value }))
                        }
                        value={data.rg}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Gênero </label>
                      <select
                        value={data.gender}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }))
                        }
                      >
                        <option value="select">Sem Filtro</option>
                        <option value="male">Homem</option>
                        <option value="woman">Mulher</option>
                        <option value="Other">Outro</option>
                      </select>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Estado Civil </label>
                      <select
                        value={data.civilState}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            civilState: e.target.value,
                          }))
                        }
                      >
                        <option value="select">Sem Filtro</option>
                        <option value="single">Solteiro</option>
                        <option value="married">Casado</option>
                        <option value="divorced">Divorciado</option>
                        <option value="widow">Viuvo</option>
                      </select>
                    </InputContainerStyled>
                  </InfosStyled>
                  <InputContainerStyled>
                    <label>Observações adicionais</label>
                    <input
                      type="text"
                      placeholder="Digite"
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          addtionalObersavations: e.target.value,
                        }))
                      }
                      value={data.addtionalObersavations}
                    ></input>
                  </InputContainerStyled>
                  <ButtonContainerStyled>
                    <ButtonStyled onClick={changeToContact} type="button">
                      Próximo
                    </ButtonStyled>
                  </ButtonContainerStyled>
                </form>
              ) : (
                <form onSubmit={handleSaveInfo}>
                  <InfosStyled>
                    <InputContainerStyled>
                      <label>CEP:</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) => handleCep(e.target.value)}
                        value={data.cep}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Cidade</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, city: e.target.value }))
                        }
                        value={data.city}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>UF</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, uf: e.target.value }))
                        }
                        value={data.uf}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Endereço</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                        value={data.address}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Número</label>
                      <input
                        type="number"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            number: e.target.value,
                          }))
                        }
                        value={data.number}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Bairro</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            neighborhood: e.target.value,
                          }))
                        }
                        value={data.neighborhood}
                      ></input>
                    </InputContainerStyled>
                    <InputContainerStyled>
                      <label>Complemento</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            complement: e.target.value,
                          }))
                        }
                        value={data.complement}
                      ></input>
                    </InputContainerStyled>
                  </InfosStyled>
                  <ButtonContainerStyled>
                    {loading ? (
                      <span>Carregando</span>
                    ) : (
                      <ButtonStyled type="submit">Salvar</ButtonStyled>
                    )}
                  </ButtonContainerStyled>
                </form>
              )}
            </ModalContainerStyled>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
