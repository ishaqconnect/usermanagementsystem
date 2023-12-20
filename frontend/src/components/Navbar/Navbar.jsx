import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.centered}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeStyle : styles.inActiveStyle
            }
          >
            User Management System
          </NavLink>
        </div>
      </nav>
      <div className={styles.separator}></div>
    </>
  );
}

export default Navbar;
