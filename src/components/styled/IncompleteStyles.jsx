import styled from "styled-components";

const IncompleteWrapper = styled.div`
  margin: 2rem 1rem;
  text-align: center;
  color: white;

  h2 {
    width: fit-content;
    padding: 1rem;
    margin: 0 auto;
    text-decoration: underline;
    background-color: #0000737e;
    border-radius: var(--normal-radius);
  }

  img {
    border-radius: var(--big-radius);
    -webkit-box-shadow: 2px 2px 18px 0px rgba(28, 255, 58, 1);
    -moz-box-shadow: 2px 2px 18px 0px rgba(28, 255, 58, 1);
    box-shadow: 2px 2px 18px 0px rgba(28, 255, 58, 1);
    width: 80%;
    margin: 0 10%;
    margin-top: 4rem;
  }
`;

export { IncompleteWrapper };
