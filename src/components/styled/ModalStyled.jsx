import styled from "styled-components";
import { closeButton } from "./Mixins";

export const ModalBackground = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #00000094;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;

export const ModalBody = styled.div`
  background-color: #8aa9ff;
  padding: 2rem;
  border-radius: var(--big-radius);
  width: 60%;
  min-width: 350px;
  height: fit-content;
  position: relative;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }

  button {
    ${closeButton}
  }
`;
