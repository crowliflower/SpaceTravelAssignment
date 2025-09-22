import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.container}>
            <Link to="/" className={styles.link}>
                Home
            </Link>
            <Link to="Planets" className={styles.link}>
                Planets
            </Link>
            <Link to="Spacecrafts" className={styles.link}>
                Spacecraft
            </Link>
        </nav>
    );
}

export default NavBar;