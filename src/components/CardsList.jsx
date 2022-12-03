import Card from "./Card";
import { Wrapper } from "./styled/CardsListStyles";

export default function CardsList(props) {
  const { data, setData } = props;

  const closeHandler = (id) => {
    setData((prev) => {
      const removed = prev.filter((e) => e.id !== id);
      return removed;
    });
  };

  // Object[name, gender, ...etc]
  return (
    <>
      <Wrapper>
        {data.map((e) => (
          <Card key={e.id} chara={e} {...{ closeHandler }} />
        ))}
      </Wrapper>
    </>
  );
}
