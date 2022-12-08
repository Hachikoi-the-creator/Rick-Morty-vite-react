import styled from "styled-components";

const NavbarWrapper = styled.ul`
  li {
    position: relative;
  }

  .hidden {
    display: none;
    position: absolute;
    top: 2.5rem;
    left: 7px;
    background-color: #77ff77ac;
    border-radius: var(--normal-radius);
    padding: 2px;
  }

  li:hover .hidden {
    display: inline;
  }

  display: flex;
  list-style: none;
  /* justify-content: space-evenly; */
  align-items: center;
  height: fit-content;
  padding: 0 1rem;
  background-color: #6500b5b5;
  border-radius: 0 0 1rem 1rem;
  width: 100%;

  & li:first-child {
    margin-right: auto;
  }

  a {
    color: black;
    img {
      width: 4rem;
    }

    text-decoration: none;
  }
`;

export { NavbarWrapper };
