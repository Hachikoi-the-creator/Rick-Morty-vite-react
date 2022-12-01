import styled from "styled-components";

export const SearchComponent = styled.div`
  z-index: 1;
  position: fixed;
  top: 20px;
  width: 100vw;

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(173, 255, 47, 0.31);
    padding: 5% 20%;
    border-radius: 13px;

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
      background-color: transparent;
      border-bottom: 1px solid red;
      margin-bottom: 0.5rem;
    }

    button,
    button::after,
    button::before {
      border-radius: 17px;
    }

    button {
      color: black;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
      border: none;
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
        height: 100%;
      }

      &::after {
        width: 100%;
        background-color: #ff5f5f;
        z-index: -2;
      }

      &::before {
        width: 0%;
        background-color: #9f0000;
        transition: all 0.3s;
        z-index: -1;
      }

      &:hover {
        color: #fff;

        &::before {
          width: 100%;
        }
      }
    }
  }
`;
