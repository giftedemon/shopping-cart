import { Outlet } from "react-router-dom";

import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    );
}

export default Layout;
