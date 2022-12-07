import { useState } from "react";
import InputComp from "../components/InputComp";
import {
  FormTitle,
  ButtonGroup,
  FormWrapper,
} from "../components/styled/FormsStyles";
import { validate } from "../utils/fromHandlers";
import { useNavigate } from "react-router-dom";

// variable to map over and create all inputs easily
const inputsText = [
  { type: "text", name: "name" },
  { type: "email", name: "email" },
  { type: "password", name: "psw" },
];

export default function Login() {
  const [inputStates, setInputStates] = useState({
    name: "",
    nameValid: true,
    email: "",
    emailValid: true,
    psw: "",
    pswValid: true,
  });

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    // need to update the state, since starts whit valid inputs
    const allDataIsValid = validate(
      "all",
      inputStates.name,
      inputStates.email,
      inputStates.psw
    );

    // reset all inputs
    // after close button on modal is clicked, send user to home page
    if (allDataIsValid) {
      handleReset();
      window.alert("All data has bee sent succesfully :D");
      navigate("/");
    } else {
      window.alert("Not all fields have been filled or are valid :D");
    }
    // if all is okay, show succes modal //todo:
    // showModal()
  };

  const handleReset = () => {
    for (const key in inputStates) {
      const element = inputStates[key];

      // if it's not boolean, it's the inputs value
      if (!typeof element === "boolean") {
        inputStates[key] = "";
      }
    }
  };

  return (
    <>
      <FormWrapper onSubmit={submitHandler}>
        <FormTitle>
          <img src="/ufo.png" alt="litle red ufo icon" />
          <h2>Login</h2>
        </FormTitle>

        {inputsText.map((inp) => (
          <InputComp
            key={inp.name}
            {...{ setInputStates }}
            {...{ inputStates }}
            type={inp.type}
            label={`Enter your ${inp.name}`}
            name={inp.name}
          />
        ))}

        <ButtonGroup>
          <button type="submit">Send</button>
          <button onClick={handleReset} type="reset">
            Reset
          </button>
        </ButtonGroup>
      </FormWrapper>
    </>
  );
}
