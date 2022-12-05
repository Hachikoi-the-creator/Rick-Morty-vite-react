import { css } from "styled-components";

const greenButton = css`
  button,
  button::after,
  button::before {
    border-radius: 7px;
  }

  button {
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid var(--light-green);
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
      width: 100%;
    }

    &::after {
      height: 100%;
      background-color: var(--dark-green);
      z-index: -2;
    }

    &::before {
      height: 0%;
      background-color: var(--light-green);
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover {
      color: #1a1a1a;
      border: none;

      &::before {
        height: 100%;
      }
    }
  }
`;

const greenAchor = `

`;
export { greenButton };
