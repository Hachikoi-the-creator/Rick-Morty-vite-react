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
  const loading = useSelector((state) => state.loading);
  const charas = useSelector((state) => state.charaList);

  useEffect(() => {
    dispatcher(fetchDefaultCharacters());
  }, []);

  if (loading) {
    return <h1>SEND HELP</h1>;
  }

  return (
    <div style={s}>
      <h1>test</h1>
      <p>Charas below?</p>

      {charas.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </div>
  );
}
