import figure from "../../assets/figure.svg";
import { styled } from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import usePatients from "../../hooks/usePatients";

const ModalButtonStyled = styled.button`
  font-size: 14px;
  color: #656565;

  :hover {
    background-color: #edf3fc;
    color: #136cdc;
  }
`;

const TopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.75em;
    color: #510972;
  }
`;

const StyledX = styled(VscChromeClose)`
  color: #656565;
  font-size: 24px;
`;

const MiddleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 150px;
  }
  span:first-child {
    font-family: serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
  span:last-child {
    font-family: serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #565656;
  }
`;

const EndStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  gap: 10px;
  button:first-child {
    background-color: #ffffff;
    color: #136cdc;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #136cdc;
    cursor: pointer;
  }
  button:last-child {
    background-color: #c52525;
    color: #ffffff;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #fff;
    cursor: pointer;
  }
`;

export default function PatientDelete({ patient }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deletePatient } = usePatients();

  const handleSaveInfo = (e) => {
    e.preventDefault();
    deletePatient(patient.id);
    localStorage.removeItem("patientData");
  };
  return (
    <>
      <ModalButtonStyled onClick={onOpen}>Excluir</ModalButtonStyled>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ minWidth: "600px" }}>
          <ModalBody>
            <form onSubmit={handleSaveInfo}>
              <TopStyled>
                <h1>Excluir paciente?</h1>
                <StyledX>
                  <VscChromeClose />.
                </StyledX>
              </TopStyled>
              <hr />
              <MiddleStyled>
                <img src={figure} alt="imagem de figura" />
                <span>
                  Tem certeza que deseja excluir o paciente selecionado?
                </span>
                <span>Essa ação não poderá ser desfeita.</span>
              </MiddleStyled>
              <hr />
              <EndStyled>
                <button>Cancelar</button>
                <button type="submit">Excluir</button>
              </EndStyled>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
