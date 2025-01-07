import { NavLink } from "react-router";
import { SCIENCES_AND_TECHNOLOGIES } from "../../router/constant";
import "./index.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={SCIENCES_AND_TECHNOLOGIES}>
          Sciences et Technologies
        </NavLink>
        <li></li>
      </nav>
    </header>
  );
};

export default Header;
