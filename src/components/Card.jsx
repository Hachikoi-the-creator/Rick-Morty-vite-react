import {
  CardContainer,
  CloseBtn,
  AliveStatusBar,
  NameSpan,
  DetailsWrapper,
  NameStatusWrapper,
} from "./styled/CardStyles";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, species, gender, image, status, id } = props.chara;
  const bgStyle = { backgroundImage: `url(${image})` };

  return (
    <CardContainer>
      <CloseBtn onClick={() => props.closeHandler(id)}>X</CloseBtn>
      {/* <ImageBg imgSrc={image}></ImageBg> */}
      <Link to={`/character/${id}`} style={bgStyle}></Link>

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
