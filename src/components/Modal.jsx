import React from "react";
import { useState } from "react";
import { ModalBackground, ModalBody } from "./styled/ModalStyled";

export default function Modal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>SHOW ASS-ETS</button>
      {shouldShow && (
        <ModalBackground onClick={(e) => e.stopPropagation()}>
          <ModalBody onClick={() => setShouldShow(false)}>
            <button onClick={() => setShouldShow(false)}>EXIT</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}
