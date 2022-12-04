import { Link } from "react-router-dom";
import { Navbar } from "./styled/HeaderStyles";

export default function Header() {
  return (
    <Navbar>
      <li>
        <Link to={"/login"}>LOGIN PAGE</Link>
      </li>
      <li>
        <Link to={"/contact"}>CONTACT PAGE</Link>
      </li>
      <li>
        <Link to={"/"}>HOME PAGE</Link>
      </li>
    </Navbar>
  );
}
