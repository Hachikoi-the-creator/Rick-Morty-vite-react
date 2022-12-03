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
  const { name, species, gender, image, status, id } = props.chara;

  return (
    <CardContainer>
      <CloseBtn onClick={() => props.closeHandler(id)}>X</CloseBtn>
      <ImageBg imgSrc={image}></ImageBg>

      <NameStatusWrapper>
        <NameSpan>{name}</NameSpan>
        <AliveStatusBar isAlive={status}></AliveStatusBar>
      </NameStatusWrapper>

      <DetailsWrapper>
        <span>{species}</span>
        <span>{gender}</span>
      </DetailsWrapper>
    </CardContainer>
  );
}
