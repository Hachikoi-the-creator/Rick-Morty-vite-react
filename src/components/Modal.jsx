import React from "react";
import { ModalBackground, ModalBody } from "./styled/ModalStyled";

export default function Modal({ title, msg, setShowModal }) {
  return (
    <ModalBackground onClick={() => setShowModal(false)}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowModal(false)}>X</button>
        <h3>{title}</h3>
        <p>{msg}</p>
      </ModalBody>
    </ModalBackground>
  );
}
