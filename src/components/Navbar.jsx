import { Link } from "react-router-dom";
import { NavbarWrapper } from "./styled/NavbarStyles.jsx";

const linksMappingArray = [
  { desc: "Home", to: "/" },
  { desc: "Contact", to: "/contact" },
  { desc: "Favourites", to: "/favourites" },
  { desc: "Login", to: "/login" },
];

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        {linksMappingArray.map((e) => (
          <li key={e.desc}>
            <Link to={e.to}>
              <span className="hidden">{e.desc.slice(0, 8)}</span>
              <img src={`/svg/${e.desc.toLowerCase()}.svg`} alt="home link" />
            </Link>
          </li>
        ))}
      </NavbarWrapper>
    </>
  );
}
