import {
  CardContainer,
  CloseBtn,
  AliveStatusBar,
  NameSpan,
  DetailsWrapper,
  NameStatusWrapper,
} from "./styled/CardStyles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeOneCharacter, toggleOneFavourite } from "../redux/actions";

export default function Card(props) {
  const { name, species, gender, image, status, id, isFav } = props.chara;
  const bgStyle = { backgroundImage: `url(${image})` };
  const dispatcher = useDispatch();

  const closeHandler = () => {
    // console.log("Clossing ", id);
    dispatcher(removeOneCharacter(id));
  };

  const imgClickHandler = (e) => {
    e.target.src = "/filled-heart.svg";
    // console.log(id);
    // add them to the favourite global state
    dispatcher(toggleOneFavourite(id));
    // update the global state isFav prop
    // dispatcher(updateFavourites(id));
  };

  return (
    <CardContainer>
      <CloseBtn onClick={closeHandler}>X</CloseBtn>
      <img
        className="fav-svg"
        src={isFav ? "/filled-heart.svg" : "/empty-heart.svg"}
        alt="empty heart, meaning it's not in favourites"
        onClick={imgClickHandler}
      />

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
