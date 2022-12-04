import Input from "./Input";
// import { Container, FormTitle } from "./styled/FormsStyles";

export default function Form() {
  return (
    <>
      <div className="card card--inverted">
        <div className="form-title">
          <img src="/ufo.png" alt="litle red ufo icon" />
          <h2>Login</h2>
        </div>

        <label className="input">
          <input className="input__field" type="text" placeholder=" " />
          <span className="input__label">Some Fancy Label</span>
        </label>

        <div className="button-group">
          <button>Send</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </>
  );
}
