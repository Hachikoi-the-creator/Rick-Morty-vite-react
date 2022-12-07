import styled from "styled-components";

const Navbar = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  padding: 1rem;
  background-color: #6500b5b5;
  border-radius: 0 0 1rem 1rem;
  width: 100%;

  /* <= 500 */
  @media (max-width: 500px) {
    flex-direction: column;
  }

  /* cooler animation */
  a,
  a::after,
  a::before {
    border-radius: var(--normal-radius);
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem;
    color: #ffffff;
    font-weight: 400;
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
      height: 100%;
      width: 100%;
    }

    &::after {
      background-color: var(--dark-green);
      height: 100%;
      z-index: -2;
    }

    &::before {
      width: 0%;
      height: 0%;
      background-color: var(--light-green);
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover {
      color: black;
      border: none;

      &::before {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export { Navbar };
