import {
  CardContainer,
  CloseBtn,
  AliveStatusBar,
  NameSpan,
  DetailsWrapper,
  ImageBg,
  NameStatusWrapper,
} from "./styled/CardStyles";

export default function Card(props) {
  const { onClose, name, species, gender, image } = props.chara;
  const alive = true;

  const imgBgStyle = {
    backgroundImage: `url(${image})`,
  };

  const aliveStatus = {
    backgroundColor: alive ? "greenyellow" : "red",
    boxShadow: alive
      ? "-1px 3px 46px 2px rgb(44, 244, 18);"
      : "-1px 3px 46px 2px rgba(244,18,18,1);",
  };

  return (
    <CardContainer>
      <CloseBtn onClick={onClose}>X</CloseBtn>
      <ImageBg style={imgBgStyle}></ImageBg>

      <NameStatusWrapper>
        <NameSpan>{name}</NameSpan>
        <AliveStatusBar style={aliveStatus}></AliveStatusBar>
      </NameStatusWrapper>

      <DetailsWrapper>
        <span>{species}</span>
        <span>{gender}</span>
      </DetailsWrapper>
    </CardContainer>
  );
}
