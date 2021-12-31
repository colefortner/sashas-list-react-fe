import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul class={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"#"}>Account</NavLink>
      </li>
      <li>
        <NavLink to="#">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="#">Login/SignUp</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
