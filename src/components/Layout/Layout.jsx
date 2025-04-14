import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./Layout.module.css";

import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

function Layout() {
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
}

export default Layout;
