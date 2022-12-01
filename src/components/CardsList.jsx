import Card from "./Card";
import data from "../utils/provisionalData";
import { Wrapper } from "./styled/CardsListStyles";

export default function CardsList() {
  // Object[name, gender, ...etc]
  return (
    <>
      <Wrapper>
        {data.map((e) => (
          <Card key={e.name} chara={e} />
        ))}
      </Wrapper>
    </>
  );
}
