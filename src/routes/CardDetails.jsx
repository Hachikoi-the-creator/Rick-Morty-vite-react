import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExtraCharaInfo from "../components/ExtraCharaInfo";

export default function CardDetails() {
  const id = useParams().id;
  const [chara, setChara] = useState(null);

  useEffect(() => {
    (async () => {
      const linkWithId = `https://rickandmortyapi.com/api/character/${id}`;
      const res = await fetch(linkWithId).then((data) => data.json());

      const extraOriginLink = res.origin.url;
      const resPlus = await fetch(extraOriginLink).then((res) => res.json());

      const characterCompleteInfo = { ...res, origin: resPlus };

      setChara(characterCompleteInfo);
    })();
  }, []);

  return (
    <>
      <ExtraCharaInfo {...{ chara }} />
    </>
  );
}
