import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';

const HomePage = lazy(() => import("../components/pages/Home/Home"));
const LotteryPage = lazy(() => import("../components/pages/Lottery/LotteryPage"));
export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    },
    {
        path: "/lottery",
        Component: LotteryPage
    }
]);