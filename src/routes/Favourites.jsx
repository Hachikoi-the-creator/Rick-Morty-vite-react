import React from "react";
import CardsList from "../components/CardsList";
import { useSelector } from "react-redux";

export default function Favourites() {
  const charaData = useSelector((data) => data.myFavourites);

  return (
    <>
      <CardsList {...{ charaData }} />
    </>
  );
}
