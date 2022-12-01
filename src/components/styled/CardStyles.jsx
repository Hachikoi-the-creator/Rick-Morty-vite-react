import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 7px;
`;

export const CloseBtn = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.7rem;
  right: 0.3rem;
  width: 4ch;
  height: 4ch;
  border-radius: 4ch;
  background-color: rgb(241, 27, 27);
  box-shadow: 0px 1px 1px 2px rgba(244, 18, 18, 1);

  &:hover {
    box-shadow: 0px 1px 0px 1px rgba(244, 18, 18, 1);
  }
`;

export const ImageBg = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 7px;
  background-position: center;
  background-size: cover;
`;

export const NameStatusWrapper = styled.div`
  position: absolute;
  bottom: 3.3rem;
  display: flex;
  justify-content: space-around;
  width: 95%;
  gap: 7px;
  align-items: center;
`;

export const NameSpan = styled.span`
  text-align: center;
  background-color: rgba(188, 255, 245, 0.757);
  border-radius: 7px;
  text-shadow: 0 0 10px #ffffff, 2px 2px 2px rgba(111, 229, 255, 0);
  width: 100%;
`;

export const AliveStatusBar = styled.div`
  height: 20px;
  border-radius: 7px;
  width: 55%;
`;

export const ImageStyle = styled.img`
  border-radius: 7px;
`;

export const DetailsWrapper = styled.div`
  text-shadow: 0 0 10px #ffffff, 2px 2px 2px rgba(111, 229, 255, 0);
  margin-bottom: 0.5rem;
  background-color: #5fffb291;
  width: 100%;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
`;
