import { useRef } from "react";
import { SearchComponent, Header } from "./styled/SearchBarStyles";
import { searchHandler, addRndCharacter } from "../utils/handlers";

export default function SearchBar(props) {
  const { data, setData } = props;
  const searchInput = useRef("");

  return (
    <>
      <Header>
        <h1>
          <img src="/rick-title.png" alt="animated title of rick&morty" />
        </h1>
      </Header>
      <SearchComponent>
        <div>
          <input
            type="text"
            ref={searchInput}
            placeholder="Add by name (one string)"
          />
          <button onClick={() => searchHandler(searchInput, data, setData)}>
            Agregar
          </button>
          <button onClick={() => addRndCharacter(data, setData)}>
            Add random
          </button>
        </div>
      </SearchComponent>
    </>
  );
}
