import { useState } from "react";
import InputComp from "./InputComp";
import { FormTitle, ButtonGroup, FormWrapper } from "./styled/FormsStyles";
// import { validate } from "../utils/fromHandlers";

export default function Form() {
  const [inputStates, setInputStates] = useState({
    name: "",
    nameValid: true,
    email: "",
    emailValid: true,
    psw: "",
    pswValid: true,
  });

  function submitHandler(event, inputs) {
    event.preventDefault();
    // check if there's any error, after we check again, since starts whit no errors
    if (validate("all")) {
      // setInputStates();
      console.log("All inputs are valid, reset them later");
    }
    // sendDataToDB()
  }
  return (
    <>
      <FormWrapper onSubmit={submitHandler}>
        <FormTitle>
          <img src="/ufo.png" alt="litle red ufo icon" />
          <h2>Login</h2>
        </FormTitle>

        <InputComp
          {...{ setInputStates }}
          type="text"
          label="Enter your name"
          name="name"
        />
        <InputComp
          {...{ setInputStates }}
          type="text"
          label="Enter your email"
          name="email"
        />
        <InputComp
          {...{ setInputStates }}
          type="password"
          label="Enter your password"
          name="psw"
        />

        <ButtonGroup>
          <button>Send</button>
          <button type="reset">Reset</button>
        </ButtonGroup>
      </FormWrapper>
    </>
  );
}
