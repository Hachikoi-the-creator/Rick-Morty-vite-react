import Input from "./Input";
import {
  FormTitle,
  InputWrapper,
  ButtonGroup,
  FormWrapper,
} from "./styled/FormsStyles";

export default function Form() {
  return (
    <>
      <FormWrapper>
        <FormTitle>
          <img src="/ufo.png" alt="litle red ufo icon" />
          <h2>Login</h2>
        </FormTitle>

        <InputWrapper>
          <label className="label">
            <input className="label__field" type="text" placeholder=" " />
            <span className="label__span">Some Fancy Label</span>
          </label>
        </InputWrapper>

        <ButtonGroup>
          <button>Send</button>
          <button type="reset">Reset</button>
        </ButtonGroup>
      </FormWrapper>
    </>
  );
}
