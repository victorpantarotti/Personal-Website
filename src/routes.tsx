import { RouteObject } from "react-router-dom";

import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
];

export default routes;