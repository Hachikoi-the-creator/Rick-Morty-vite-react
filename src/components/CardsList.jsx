import Card from "./Card";
import { Wrapper } from "./styled/CardsListStyles";
import { useSelector } from "react-redux";

export default function CardsList({ charaData, canRemove }) {
  // Object[name, gender, ...etc]
  return (
    <>
      <Wrapper>
        {charaData.map((e) => (
          <Card key={e.id} chara={e} {...{ canRemove }} />
        ))}
      </Wrapper>
    </>
  );
}
