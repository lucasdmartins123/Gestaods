import { useEffect, useRef, useState } from "react";

import DeletePatient from "../DeletePatient";
import UpdatePatient from "../UpdatePatient";

import { Modal, ModalBtn, DotIcon } from "./styles";

export default function ActionModal({ patient, mainRef }) {
  const [openModal, setOpenModal] = useState(false);

  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mainRef.current &&
        mainRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        handleCloseModal();
      }
    };

    const handleCloseModal = () => {
      setOpenModal(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mainRef]);

  return (
    <ModalBtn onClick={() => setOpenModal(true)} ref={buttonRef}>
      <DotIcon />

      <Modal open={openModal}>
        <UpdatePatient patient={patient} />
        <DeletePatient patient={patient} />
      </Modal>
    </ModalBtn>
  );
}
