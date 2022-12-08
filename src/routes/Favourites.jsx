import React from "react";
import CardsList from "../components/CardsList";
import { useSelector } from "react-redux";

export default function Favourites() {
  const charaData = useSelector((data) => data.charaList);

  return (
    <>
      <CardsList {...{ charaData }} />
    </>
  );
}
