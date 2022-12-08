import React from "react";
import CardsList from "../components/CardsList";
import { useSelector } from "react-redux";
import { IncompleteWrapper } from "../components/styled/IncompleteStyles";

export default function Favourites() {
  const charaData = useSelector((data) => data.myFavourites);

  if (!charaData.length)
    return (
      <IncompleteWrapper>
        <h2>You have not selected any favourite character</h2>
        <img
          src="/look-not-favs.jpg"
          alt="Even whit both eyes wide open I can't see any favourite character"
        />
      </IncompleteWrapper>
    );

  return (
    <>
      <CardsList {...{ charaData }} />
    </>
  );
}
