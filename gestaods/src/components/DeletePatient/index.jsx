import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import usePatients from "../../hooks/usePatients";

import {
  ModalButtonContainer,
  ModalHeader,
  CloseIcon,
  ModalMain,
  ModalFooter,
} from "./styles";

import figure from "../../assets/figure.svg";

export default function DeletePatient({ patient }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deletePatient } = usePatients();

  //função que exclui o paciente selecionado
  const handleSaveInfo = (e) => {
    e.preventDefault();

    deletePatient(patient.id);
    localStorage.removeItem("patientData");
    onClose();
  };

  return (
    <>
      <ModalButtonContainer>
        <button onClick={onOpen}>Excluir</button>
      </ModalButtonContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="delete_modal">
          <ModalBody>
            <form onSubmit={handleSaveInfo}>
              <ModalHeader>
                <h1>Excluir paciente?</h1>
                <button type="button" onClick={onClose}>
                  <CloseIcon />
                </button>
              </ModalHeader>
              <hr />
              <ModalMain>
                <img src={figure} alt="imagem de figura" />
                <span>
                  Tem certeza que deseja excluir o paciente selecionado?
                </span>
                <span>Essa ação não poderá ser desfeita.</span>
              </ModalMain>
              <hr />
              <ModalFooter>
                <button type="button" onClick={onClose}>
                  Cancelar
                </button>
                <button type="submit">Excluir</button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
