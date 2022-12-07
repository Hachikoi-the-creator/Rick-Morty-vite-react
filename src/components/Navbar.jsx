import { Link } from "react-router-dom";
import { NavbarWrapper } from "./styled/NavbarStyles.jsx";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <li>
          <span className="hidden">Home</span>
          <Link to={"/"}>
            <img src="/home.svg" alt="home link" />
          </Link>
        </li>
        <li>
          <span className="hidden">Contact</span>
          <Link to={"/contact"}>
            <img src="/contact.svg" alt="contact link" />
          </Link>
        </li>
        <li>
          <span className="hidden">Login</span>
          <Link to={"/login"}>
            <img src="/login.svg" alt="login link" />
          </Link>
        </li>
      </NavbarWrapper>
    </>
  );
}
