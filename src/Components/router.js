import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import Statistics from "./Statistics";
import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Topics />, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
            { path: '/topics', element: <Topics />, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
            { path: '/statistics', element: <Statistics /> },
            { path: '/blog', element: <Blog /> },
        ]
    }
]);