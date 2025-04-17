import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <Link to="/">Jojo Store</Link>
            </h1>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/products">All products</Link>
                    </li>
                    <li id="icon">
                        <Link to="/cart">
                            <MdOutlineShoppingCart size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
