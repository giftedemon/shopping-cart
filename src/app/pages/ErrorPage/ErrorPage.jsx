import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className={styles.error_page}>
            <h1 className={styles.title}>Oops!</h1>
            <p className={styles.description}>Sorry, an unexpected error has occurred.</p>
            <p className={styles.error}>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className={styles.homepage}>
                Go to homepage
            </Link>
        </div>
    );
}
