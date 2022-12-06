import { useRef } from "react";
import { InputWrapper } from "./styled/FormsStyles";
import { validate } from "../utils/fromHandlers";

export default function InputComp(props) {
  const { type, name, label, setInputStates } = props;
  const inputRef = useRef(null);

  const updateState = () => {
    const invalidKey = `${name}Valid`;
    const value = inputRef.current.value;

    // if input is invalid, update state, and add invalid
    // if input is VALID, update state, and add valid
    const isInputValid = validate(name, inputRef.current.value);
    setInputStates((prev) => ({
      ...prev,
      [invalidKey]: isInputValid,
      [name]: value,
    }));
  };

  return (
    <InputWrapper>
      <label className="label">
        <input
          className="label__field"
          type={type}
          name={name}
          placeholder=" "
          ref={inputRef}
          onBlur={updateState}
        />
        <span className="label__span">{label}</span>
      </label>
    </InputWrapper>
  );
}
