import styles from "./Header.module.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Ayan Store</h1>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/products">All products</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <Icon className={styles.cart} path={mdiCartOutline} size={1.2} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
