import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link>LOGIN PAGE</Link>
        </li>
        <li>
          <Link>CONTACT PAGE</Link>
        </li>
        <li>
          <Link>HOME PAGE</Link>
        </li>
      </ul>
    </>
  );
}
