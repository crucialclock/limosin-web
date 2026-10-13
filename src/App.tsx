import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "servicos",
                    element: <Services />,
                },
                {
                    path: "sobre",
                    element: <About />,
                },
                {
                    path: "projetos",
                    element: <Projects />,
                },
                {
                    path: "contato",
                    element: <Contact />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ],
    {
        basename: routerBasename,
    },
);

export default function App() {
    return <RouterProvider router={router} />;
}
