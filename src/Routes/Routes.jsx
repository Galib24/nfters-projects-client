import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AllCollceciton from "../Pages/All Collection/AllCollceciton";

export const router = createBrowserRouter([
    // ------------ ---------------------------- setup Routes -------------------------
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'collections',
                element: <AllCollceciton></AllCollceciton>
            }
        ]
    },
]);