import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCharacter, fetchDefaultCharacters } from "../redux/actions";

const s = {
  color: "white",
  fontSize: "3rem",
};

export default function Test() {
  const dispatcher = useDispatch();
  const num = useSelector((state) => state.count);
  const charas = useSelector((state) => state.charas);

  useEffect(() => {
    dispatcher(fetchDefaultCharacters());
    console.log("got charas succesfully :D", charas);
  }, []);

  return (
    <div style={s}>
      <h1>test</h1>
      <p>{num}</p>
      {charas.map((e) => {
        <p key={e.id}>{e.name}</p>;
      })}
    </div>
  );
}
