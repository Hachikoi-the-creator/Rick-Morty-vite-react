import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardsList from "../components/CardsList";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,5,6,7,8,9]")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <SearchBar {...{ data }} {...{ setData }} />
      <CardsList {...{ data }} {...{ setData }} />
    </>
  );
}
