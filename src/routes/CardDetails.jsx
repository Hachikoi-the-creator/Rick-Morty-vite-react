import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExtraCharaInfo from "../components/ExtraCharaInfo";
// import LoadingExtraInfo from "../components/LoadingExtraInfo";
import { IncompleteWrapper } from "../components/styled/IncompleteStyles";

export default function CardDetails() {
  const id = useParams().id;
  const [chara, setChara] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasExtraInfo, setHasExtraInfo] = useState(false);

  useEffect(() => {
    (async () => {
      const linkWithId = `https://rickandmortyapi.com/api/character/${id}`;
      const res = await fetch(linkWithId).then((data) => data.json());

      setChara(res);
      setLoading(false);
    })();
  }, []);

  if (loading)
    return (
      <IncompleteWrapper>
        <img src="/loading.svg" alt="dotted loading spinner" />
      </IncompleteWrapper>
    );

  return (
    <>
      <ExtraCharaInfo {...{ chara }} />
    </>
  );
}
