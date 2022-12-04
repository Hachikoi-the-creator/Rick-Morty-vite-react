import styled from "styled-components";

export const Navbar = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  padding: 1rem;
  background-color: #6500b5b5;
  border-radius: 0 0 1rem 1rem;

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem;
    background-color: #1b4a1b;
    border: 1px solid #092909;
    border-radius: 1rem;
    animation: border-color 1s ease-in-out;
    animation: background-color 1s ease-in-out;

    &:hover {
      background-color: #2e732e;
      border: 1px solid #33eb33;
    }
  }
`;
