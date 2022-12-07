import { useRef, useState } from "react";
import { SearchComponent, Header } from "./styled/SearchBarStyles";
import { InputWrapper } from "./styled/FormsStyles";
import { searchHandler, addRndCharacter } from "../utils/fetchHandlers";

export default function SearchBar(props) {
  const { data, setData } = props;
  const [validInput, setValidInput] = useState(true);
  const searchInput = useRef("");

  const inputBlurHandler = () => {
    // verify the ref value is not a number, if it is, stop the on click event, show an alert & change styles of input
    const value = searchInput.current.value;

    // if it's not a number I bet is a string
    if (isNaN(+value)) {
      // check if the string only has one name (no spaces)
      const validNameRegex = /^[a-z0-9]+$/gi;

      validNameRegex.test(value) && setValidInput(true);
    }
    // must be a number then
    else {
      setValidInput(false);
      // alert is too annoying for UX
      console.log(
        "- Invalid input, write down the name of the caracter instead \n - Input no es valido, ingresa el nombre del personaje"
      );
    }
  };

  return (
    <>
      <Header>
        <h1>
          <img src="/rick-title.png" alt="animated title of rick&morty" />
        </h1>
      </Header>
      <SearchComponent>
        <div>
          <InputWrapper>
            <label className="label">
              <input
                type="text"
                ref={searchInput}
                placeholder=" "
                onBlur={inputBlurHandler}
                className={`label__field  ${!validInput && "invalid-input"}`}
                name="search input"
              />
              <span className="label__span">Add by name (one string)</span>
              {!validInput && <span className="error__span"></span>}
            </label>
          </InputWrapper>

          <button
            onClick={() =>
              searchHandler(searchInput, data, setData, validInput)
            }
          >
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
