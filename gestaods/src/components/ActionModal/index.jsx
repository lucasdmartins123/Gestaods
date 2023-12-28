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
import { VscEllipsis } from "react-icons/vsc";

const ModalOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledEllipsis = styled(VscEllipsis)`
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
    color: red;
  }
`;

export default function ActionModal({ patient }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <StyledEllipsis />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            width: "max-content",
            position: "absolute",
            top: "40%",
            right: "10%",
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <ModalBody style={{ padding: "0px", overflow: "hidden" }}>
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
