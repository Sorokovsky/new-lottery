import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';

const HomePage = lazy(() => import("../components/pages/Home/Home"))

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    }
]);