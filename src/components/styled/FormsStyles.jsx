import styled from "styled-components";
import { greenButton } from "./Mixins";

const FormWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  background: linear-gradient(220deg, var(--grad-purple), var(--grad-blue));
  margin-top: 2rem;
  border-radius: 7px;
  padding: 2rem;
  color: white;
`;

const FormTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 2rem 1rem;
  gap: 1rem;

  img {
    width: 30px;
  }

  h2 {
    font-weight: 900;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 2rem;

  .label {
    position: relative;

    &__span {
      background-color: transparent;
      border-radius: 7px;
      position: absolute;
      left: 3px;
      top: -3px;
      padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
      margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
      white-space: nowrap;
      transform: translate(0, 0);
      transform-origin: 0 0;
      transition: transform 120ms ease-in;
      font-weight: bold;
      line-height: 1.2;
    }

    &__field {
      box-sizing: border-box;
      display: block;
      width: 100%;
      border: 3px solid #85ff5bab;
      padding: calc(0.5rem * 1.5) 0.5rem;
      color: currentColor;
      background: transparent;
      border-radius: 7px;

      &:focus,
      &:not(:placeholder-shown) {
        & + .label__span {
          background: linear-gradient(
            30deg,
            rgba(140, 0, 255, 0.9),
            rgba(0, 15, 131, 0.9)
          );
          /* transform: translateY(13px); */
          transform: translate(0.5rem, -90%) scale(0.9);
          color: #4aff50;
        }
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  ${greenButton}
`;

export { ButtonGroup, InputWrapper, FormTitle, FormWrapper };
