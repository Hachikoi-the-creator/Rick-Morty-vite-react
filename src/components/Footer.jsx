import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <h1>I AM A FOOTER</h1>
      <Link to={"/login"}>Go login cumsack</Link>
      <Link to={"/contact"}>Contact me babe</Link>
      <Link to={"/"}>Contact me babe</Link>
    </>
  );
}
