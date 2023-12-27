import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import PatientEdit from "../../pages/PatientEdit";
import PatientDelete from "../../pages/PatientDelete";
import { styled } from "styled-components";

const ModalOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ActionModal({ patient }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>...</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ModalOptionsStyled>
              <PatientEdit patient={patient} />
              <PatientDelete patient={patient} />
              {/* <PatientDelete /> */}
            </ModalOptionsStyled>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
