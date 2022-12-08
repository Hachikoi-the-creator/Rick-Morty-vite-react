import {
  ImageWrapper,
  InnerContainer,
  Wrapper,
  StatusDiv,
  InfoWrapper,
} from "./styled/ExtraCharaInfoStyles";

export default function ExtraCharaInfo(props) {
  const {
    status,
    species,
    name,
    image,
    gender,
    episode: episodesAppeareances,
    location,
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
            <p className="after">Gender: {gender}</p>
            <span className="rndSpan"></span>
            <div className="after">
              Appears in {episodesAppeareances.length} Episodes
            </div>
          </div>

          <div className="right">
            <p>Specie: {species}</p>
            <span className="rndSpan"></span>
            <div>
              <p>Lives in:</p>
              <p>{location.name}</p>
            </div>
          </div>
        </InfoWrapper>
      </InnerContainer>
    </Wrapper>
  );
}
