import { css } from "styled-components";

const greenButton = css`
  button,
  button::after,
  button::before {
    border-radius: var(--normal-radius);
  }

  button {
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid var(--light-green);
    border-left: 2px solid var(--light-green);
    display: inline-block;
    padding: 0.5rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::after,
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      /* width: 100%; */
      width: 0%;
    }

    &::after {
      height: 100%;
      width: 100%;
      background-color: var(--dark-green);
      z-index: -2;
    }

    &::before {
      height: 0%;
      width: 0%;
      background-color: var(--light-green);
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover {
      color: #1a1a1a;
      border: none;

      &::before {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

const closeButton = css`
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: 0.7rem;
  right: 0.3rem;
  width: 4ch;
  height: 4ch;
  border-radius: 4ch;
  background-color: rgb(186, 0, 0);
  box-shadow: 1px 1px 26px 1px rgb(244 18 18);

  &:hover {
    transform: rotate(180deg);
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: closeButtonHover 2s ease-in-out infinite;
  }

  @keyframes closeButtonHover {
    0% {
      box-shadow: 1px 1px 26px 1px rgb(244 18 18);
      /* -webkit-box-shadow: 1px 3px 27px 3px rgba(0, 0, 0, 0.48);
      -moz-box-shadow: 1px 3px 27px 3px rgba(0, 0, 0, 0.48); */
      scale: 0.9;
    }
    50% {
      box-shadow: 1px 1px 26px 1px #ff2323;
      scale: 1;
    }
    100% {
      box-shadow: 1px 1px 26px 1px rgb(244 18 18);
      scale: 0.9;
    }
  }
`;

export { greenButton, closeButton };
