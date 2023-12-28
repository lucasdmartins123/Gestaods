import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";
import DeletePatient from "../../pages/DeletePatient";
import UpdatePatient from "../../pages/UpdatePatient";

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
              <UpdatePatient patient={patient} />
              <DeletePatient patient={patient} />
            </ModalOptionsStyled>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
