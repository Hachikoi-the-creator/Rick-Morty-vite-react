import { useRef } from "react";
import { SearchComponent } from "./styled/SearchBarStyles";

export default function SearchBar(props) {
  const searchInput = useRef(null);

  return (
    <SearchComponent>
      <div>
        <input type="search" ref={searchInput} />
        <button onClick={() => props.searchHandler(searchInput)}>
          Agregar
        </button>
      </div>
    </SearchComponent>
  );
}
