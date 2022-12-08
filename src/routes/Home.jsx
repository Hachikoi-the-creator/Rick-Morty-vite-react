import SearchBar from "../components/SearchBar";
import CardsList from "../components/CardsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefaultCharacters } from "../redux/actions";

export default function Home() {
  const charaData = useSelector((data) => data.charaList);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchDefaultCharacters());
  }, []);

  return (
    <>
      <SearchBar />
      <CardsList {...{ charaData }} />
    </>
  );
}
