import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.content}>Copyright © 2025 giftedemon</h3>
            <a href="https://github.com/giftedemon" target="_blank" id="icon">
                <FaGithub size={25} />
            </a>
        </footer>
    );
}

export default Footer;
