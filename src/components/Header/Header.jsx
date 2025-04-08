import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
    return (
        <header className={styles.header}>
            <h1>My App</h1>
        </header>
    );
}

export default Header;
