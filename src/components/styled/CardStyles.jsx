import styled from "styled-components";
// --normal-radius: 0.5rem;
// --big-radius: 1rem;

const CardContainer = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: var(--normal-radius);

  a {
    width: 100%;
    height: 250px;
    border-radius: var(--normal-radius);
    background-image: ${(props) => `url(${props.imgSrc})`};
    background-position: center;
    background-size: cover;
    animation: scale ease-in-out 2s;

    &:hover {
      cursor: pointer;
      scale: 1.06;
    }
  }
`;

const CloseBtn = styled.button`
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

const NameStatusWrapper = styled.div`
  position: absolute;
  bottom: 3.3rem;
  display: flex;
  justify-content: space-around;
  width: 95%;
  gap: 7px;
  align-items: center;
  box-shadow: none;
`;

const NameSpan = styled.span`
  text-align: center;
  background-color: rgba(188, 255, 245, 0.757);
  border-radius: var(--normal-radius);
  text-shadow: 0 0 10px #ffffff, 2px 2px 2px rgba(111, 229, 255, 0);
  width: 100%;
`;

const AliveStatusBar = styled.div`
  background-color: ${(props) => (props.isAlive ? "yellowgreen" : "red")};
  box-shadow: ${(props) =>
    props.isAlive
      ? "-1px 3px 46px 2px rgb(44, 244, 18)"
      : "-1px 3px 46px 2px rgba(244,18,18,1)"};
  height: 20px;
  border-radius: var(--normal-radius);
  width: 55%;
`;

const ImageStyle = styled.img`
  border-radius: var(--normal-radius);
`;

const DetailsWrapper = styled.div`
  text-shadow: 0 0 10px #ffffff, 2px 2px 2px rgba(111, 229, 255, 0);
  margin-bottom: 0.5rem;
  background-color: #5fffb291;
  width: 100%;
  border-radius: var(--normal-radius);
  display: flex;
  justify-content: space-around;
`;

export {
  DetailsWrapper,
  ImageStyle,
  AliveStatusBar,
  NameSpan,
  NameStatusWrapper,
  CardContainer,
  CloseBtn,
};
