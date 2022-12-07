import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardsList from "../components/CardsList";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data[0]) {
      fetch("https://rickandmortyapi.com/api/character/[7,8,9]")
        .then((res) => res.json())
        .then((res) => {
          if (!data.length) setData(res);
        });
    }
  }, []);

  return (
    <>
      <SearchBar {...{ data }} {...{ setData }} />
      <CardsList {...{ data }} {...{ setData }} />
    </>
  );
}
