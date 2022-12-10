import {
  CardContainer,
  CloseBtn,
  NameSpan,
  DetailsWrapper,
  NameStatusWrapper,
} from "./styled/CardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeOneCharacter, toggleOneFavourite } from "../redux/actions";

export default function Card(props) {
  const { name, species, gender, image, id, isFav } = props.chara;
  const bgStyle = { backgroundImage: `url(${image})` };
  const dispatcher = useDispatch();

  const closeHandler = () => {
    dispatcher(removeOneCharacter(id));
  };

  const imgClickHandler = (e) => {
    dispatcher(toggleOneFavourite(id));
  };

  return (
    <CardContainer>
      {props.canRemove && <CloseBtn onClick={closeHandler}>X</CloseBtn>}
      <img
        className="fav-svg"
        src={isFav ? "/svg/filled-heart.svg" : "/svg/empty-heart.svg"}
        alt="empty heart, meaning it's not in favourites"
        onClick={imgClickHandler}
      />

      <Link to={`/character/${id}`} style={bgStyle}></Link>

      <NameStatusWrapper>
        <NameSpan>{name}</NameSpan>
      </NameStatusWrapper>

      <DetailsWrapper>
        <span>{species}</span>
        <span>{gender}</span>
      </DetailsWrapper>
    </CardContainer>
  );
}
