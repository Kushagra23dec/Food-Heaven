import React from "react";
import ReactDOM from "react-dom/client.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import CardDetails from "./components/CardDetails";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import GitHubCard from "./components/GitHubCard";
import Error from "./components/Error.js";
const AppLayout = () => {
    return (
        <div className="h-full flex flex-col">
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

const appRoute = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Body />,

        },
        {
            path: "/about",
            element: <About />,

        },
        {
            path: "/cart",
            element: <Cart />,

        },
        {
            path: "/contact",
            element: <Contact />,

        },
        {
            path: "/carddetail/:id",
            element: <CardDetails />,

        },
        {
            path: "/github",
            element: <GitHubCard />,

        },
    ]
}]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />)

