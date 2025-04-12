import { createBrowserRouter } from "react-router-dom";
import Homepage from "src/app/pages/Homepage/Homepage";
import Products from "src/app/pages/Products/Products";
import ErrorPage from "src/app/pages/ErrorPage/ErrorPage";
import Layout from "src/components/Layout/Layout";

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
        ],
    },
]);

export default router;
