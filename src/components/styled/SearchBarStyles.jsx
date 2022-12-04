import styled from "styled-components";

export const Header = styled.header`
  min-height: 20vw;
  padding: 13px;
  display: flex;
  justify-content: center;

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

  img {
    animation: titleAnimation infinite ease-in-out 3s;
  }
`;

export const SearchComponent = styled.div`
  z-index: 1;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.7rem;
    width: 60%;
    max-width: 450px;
    margin: 0 auto;
    background-color: rgba(164, 255, 28, 0.611);
    padding: 5% 7%;
    border-radius: 13px;
    border: 3px solid yellowgreen;

    input,
    button {
      border-radius: 7px;
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

    button,
    button::after,
    button::before {
      /* border-radius: 17px; */
    }

    button {
      color: black;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
      border: none;
      border-bottom: 2px solid #9f0000;
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
        background-color: #ff5f5f;
        z-index: -2;
      }

      &::before {
        height: 0%;
        background-color: #9f0000;
        transition: all 0.3s;
        z-index: -1;
      }

      &:hover {
        color: #fff;
        border: none;

        &::before {
          height: 100%;
        }
      }
    }
  }
`;
