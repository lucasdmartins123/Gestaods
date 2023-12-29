import { useEffect, useState } from "react";

import usePatients from "../../hooks/usePatients";
import api from "../../services/axios/config";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import {
  ModalContainer,
  AddIcon,
  ModalOptions,
  LogoContainer,
  InfoContainer,
  InputContainer,
  ObservationContainer,
  ButtonContainer,
  ModalButton,
} from "./styles";

import user from "../../assets/user.png";

export default function AddPatient() {
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

  //função que salva as informações do paciente no banco de dados
  const handleSaveInfo = (e) => {
    e.preventDefault();
    if (
      !data.patient ||
      !data.nickname ||
      !data.nationality ||
      !data.birth ||
      !data.cpf ||
      !data.rg ||
      !data.gender ||
      !data.civilState ||
      !data.addtionalObersavations ||
      !data.cep ||
      !data.city ||
      !data.uf ||
      !data.address ||
      !data.number ||
      !data.neighborhood ||
      !data.complement
    ) {
      return alert("preencha todos os campos");
    }
    if (data.cpf.length != 11) {
      return alert("CPF inválido, deve conter 11 dígitos");
    }

    if (data.rg.length != 10) {
      return alert("RG inválido, deve conter 10 dígitos");
    }

    const actualDate = new Date();
    if (new Date(data.birth).getFullYear() >= actualDate.getFullYear()) {
      return alert("Data de nascimento inválida");
    }

    addPatient(data);
    localStorage.removeItem("patientData");
    setData({
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
    setShowInfo(true);
    onClose();
  };

  //função para inverter a opção de informações básicas e contato
  const toogleInfoState = () => {
    setShowInfo((prev) => !prev);
  };

  //função que salva as informações do paciente no local storage
  const saveDataOnLocalStorage = () => {
    localStorage.setItem("patientData", JSON.stringify(data));
  };

  //função que alterna entre as opções de informações básicas e contato
  const changeToContact = () => {
    toogleInfoState();
    saveDataOnLocalStorage();
  };

  //função que busca o cep e preenche os campos de endereço
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

  //useEffect para carregar as informações do paciente do local storage
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
        style={{ position: "relative", width: "100%" }}
      >
        <AddIcon />
        <span style={{ marginLeft: "25px" }}>Adicionar Paciente</span>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="add_modal">
          <ModalBody>
            <ModalContainer>
              <ModalOptions>
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
              </ModalOptions>
              {showInfo ? (
                <form>
                  <LogoContainer>
                    <img src={user} alt="logo gestãoDs" />
                  </LogoContainer>

                  <InfoContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
                      <label>CPF</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, cpf: e.target.value }))
                        }
                        value={data.cpf}
                      ></input>
                    </InputContainer>
                    <InputContainer>
                      <label>RG</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, rg: e.target.value }))
                        }
                        value={data.rg}
                      ></input>
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                  </InfoContainer>
                  <ObservationContainer>
                    <label>Observações adicionais</label>
                    <textarea
                      placeholder="Digite"
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          addtionalObersavations: e.target.value,
                        }))
                      }
                      value={data.addtionalObersavations}
                    ></textarea>
                  </ObservationContainer>
                  <ButtonContainer>
                    <ModalButton onClick={changeToContact} type="button">
                      Próximo
                    </ModalButton>
                  </ButtonContainer>
                </form>
              ) : (
                <form onSubmit={handleSaveInfo}>
                  <InfoContainer>
                    <InputContainer>
                      <label>CEP:</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) => handleCep(e.target.value)}
                        value={data.cep}
                      ></input>
                    </InputContainer>
                    <InputContainer>
                      <label>Cidade</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, city: e.target.value }))
                        }
                        value={data.city}
                      ></input>
                    </InputContainer>
                    <InputContainer>
                      <label>UF</label>
                      <input
                        type="text"
                        placeholder="Digite"
                        onChange={(e) =>
                          setData((prev) => ({ ...prev, uf: e.target.value }))
                        }
                        value={data.uf}
                      ></input>
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                    <InputContainer>
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
                    </InputContainer>
                  </InfoContainer>
                  <ButtonContainer>
                    {loading ? (
                      <span>Carregando</span>
                    ) : (
                      <ModalButton type="submit">Salvar</ModalButton>
                    )}
                  </ButtonContainer>
                </form>
              )}
            </ModalContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
