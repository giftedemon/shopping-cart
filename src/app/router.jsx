import { createBrowserRouter } from "react-router-dom";
import Homepage from "src/app/pages/Homepage/Homepage.jsx";
import Products from "src/app/pages/Products/Products.jsx";
import ErrorPage from "src/app/pages/ErrorPage/ErrorPage.jsx";
import Cart from "src/app/pages/Cart/Cart.jsx";
import Layout from "src/components/Layout/Layout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

export default router;
