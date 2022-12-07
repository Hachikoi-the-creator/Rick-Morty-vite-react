import IncompleteDetails from "./IncompleteDetails";
import {
  ImageWrapper,
  InnerContainer,
  Wrapper,
  StatusDiv,
  InfoWrapper,
} from "./styled/ExtraCharaInfoStyles";

export default function ExtraCharaInfo(props) {
  if (!props.chara) return <IncompleteDetails />;

  const {
    status,
    species,
    origin,
    name,
    image,
    gender,
    episode: episodesAppeareances,
  } = props.chara;

  return (
    <Wrapper>
      <InnerContainer>
        <h2>{name}'s details</h2>
        <StatusDiv status={status}></StatusDiv>
        <ImageWrapper imgSrc={image}>
          <div></div>
          <h3>{name}</h3>
        </ImageWrapper>

        <InfoWrapper>
          <div className="left">
            <p className="after">{gender}</p>
            <span className="rndSpan"></span>
            <p>{species}</p>
          </div>

          <div className="right">
            {episodesAppeareances.length === 1 ? (
              <div className="after">
                Appears in {episodesAppeareances.length} Episode
              </div>
            ) : (
              <div className="after">
                Appears in {episodesAppeareances.length} Episodes
              </div>
            )}
            <span className="rndSpan"></span>
            <div>
              <p>{origin.type}:</p>
              <p>{origin.name}.</p>
            </div>
          </div>
        </InfoWrapper>
      </InnerContainer>
    </Wrapper>
  );
}
