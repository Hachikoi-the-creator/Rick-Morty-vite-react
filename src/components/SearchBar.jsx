import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOneCharacter, fetchRandomCharacter } from "../redux/actions";
import { SearchComponent, Header } from "./styled/SearchBarStyles";
import { InputWrapper } from "./styled/FormsStyles";

export default function SearchBar() {
  const [validInput, setValidInput] = useState(true);
  const searchInput = useRef("");
  const dispatcher = useDispatch();

  const inputBlurHandler = () => {
    // verify the ref value is not a number, if it is, stop the onClick event, show an alert & change styles of input
    const value = searchInput.current.value;

    // if it's not a number I bet is a string
    if (isNaN(+value)) {
      // check if the string only has one name (no spaces)
      !value.includes(" ") && setValidInput(true);
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

  // todo: change these logs for a modal
  const addBtnClickHandler = () => {
    // avoid adding one w/empty field on load
    if (!searchInput.current.value) {
      console.log("not valid input, baka, not send empty field, plx");
      setValidInput(false);
      return;
    }

    if (!validInput) {
      console.log("not valid input, baka");
      return;
    }

    dispatcher(fetchOneCharacter(searchInput.current.value));
  };

  const rndBtnHandler = () => {
    dispatcher(fetchRandomCharacter());
  };

  return (
    <>
      <Header>
        <h1>
          <img src="/img/rick-title.png" alt="animated title of rick&morty" />
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

          <button onClick={addBtnClickHandler}>Agregar</button>
          <button onClick={rndBtnHandler}>Add random</button>
        </div>
      </SearchComponent>
    </>
  );
}
