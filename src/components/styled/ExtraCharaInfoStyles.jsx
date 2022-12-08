import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  text-shadow: 0 0 10px #ffffff, 2px 2px 2px rgba(206, 89, 55, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InnerContainer = styled.div`
  width: 60%;
  background-color: #0000002c;
  border-radius: 23px;
  margin-top: 2rem;
  padding: 1rem 3rem;

  @media (max-width: 750px) {
    width: 80vw;
  }

  @media (max-width: 550px) {
    width: 90vw;
    padding: 0.7rem;
  }
`;

const StatusDiv = styled.div`
  width: 300px;
  height: 1rem;
  border-radius: 1.5rem;
  margin: 1rem auto;
  background-color: ${(props) => returnStatusColor(props)};
  box-shadow: ${(props) => `1px 0px 12px 5px${returnStatusColor(props)}`};
`;

function returnStatusColor({ status }) {
  switch (status) {
    case "Alive":
      return "#15ff5bdb";
    case "unknown":
      return "#5a5a5ac1";
    default:
      return "#b72222ce";
  }
}

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 1rem;
  }

  div {
    width: 100%;
    max-width: 350px;
    border-radius: 23px;
    background-image: ${(props) => `url(${props.imgSrc})`};
    min-height: 400px;
    background-position: center;
    background-size: cover;
    animation: scale ease-in-out 2s;

    &:hover {
      scale: 1.02;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;

  .left,
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    color: #4cc245;
    text-shadow: 0 0 10px #65ff5d, 2px 2px 2px rgba(206, 89, 55, 0);
    gap: 0.5rem;
  }

  .rndSpan {
    height: 2px;
    width: 20%;
    /* display: inline-block; */
    box-shadow: 1px 0 12px 5px red;
    background-color: red;
  }
`;

export { Wrapper, InnerContainer, StatusDiv, ImageWrapper, InfoWrapper };
