import styled from "styled-components";
import { greenButton } from "./Mixins";

const Header = styled.header`
  min-height: 20vw;
  padding: 13px;
  display: flex;
  justify-content: center;

  img {
    animation: titleAnimation infinite ease-in-out 3s;
  }

  /* <= 500 */
  @media (max-width: 500px) {
    img {
      width: 80%;
      margin: 0 10%;
    }
  }

  @keyframes titleAnimation {
    0% {
      transform: scale(1) rotateZ(0deg);
      filter: drop-shadow(0 0 0 rgba(61, 4, 0, 255)) brightness(1);
    }
    50% {
      transform: scale(1.2) rotateZ(3deg);
      filter: drop-shadow(16px 16px 20px rgb(61 255 215)) brightness(1.4);
    }
    100% {
      transform: scale(1) rotateZ(0deg);
      filter: drop-shadow(0 0 0 #005f95) brightness(1);
    }
  }
`;

const SearchComponent = styled.div`
  .label {
    position: relative;
    bottom: -12px;

    &__span {
      top: 2px;
    }
  }

  z-index: 1;
  width: 100%;
  color: white;

  .wrong-input {
    border: 3px solid red;
    background-color: rgb(62 4 0 / 63%);
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.7rem;
    width: 60%;
    max-width: 450px;
    margin: 0 auto;
    background: linear-gradient(220deg, var(--grad-purple), var(--grad-blue));
    padding: 5% 7%;
    border-radius: 13px;
    border: 3px solid yellowgreen;

    input,
    button {
      border-radius: var(--normal-radius);
    }

    input {
      /* resets */
      outline: none;
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      /* styles */
      font-size: 1.3rem;
      padding: 7px;
      text-align: center;
      background-color: transparent;
      border-bottom: 2px solid red;
      margin-bottom: 0.5rem;
    }

    ${greenButton}
  }
`;

export { Header, SearchComponent };
