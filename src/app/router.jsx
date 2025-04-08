import { createBrowserRouter } from "react-router-dom";
import Homepage from "src/app/pages/Homepage/Homepage";
import Layout from "src/components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
        ],
    },
]);

export default router;
