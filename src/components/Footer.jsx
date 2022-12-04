import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <h1>I AM A FOOTER</h1>
      <Link to={"/login"}>Go LOGIN PAGE</Link>
      <Link to={"/contact"}>Go CONTACT PAGE</Link>
      <Link to={"/"}>Go HOME PAGE</Link>
    </>
  );
}
