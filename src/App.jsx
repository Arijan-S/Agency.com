import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CUSTOM_ROUTES } from "./constants/custom-routes";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Layout from "./layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Service from "./pages/Service/Service";
import Portfolio from "./pages/Portfolio/Portfolio";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";

const router = createBrowserRouter([
  {
    path: CUSTOM_ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: CUSTOM_ROUTES.ABOUT.slice(1),
        element: <About />,
      },
      {
        path: CUSTOM_ROUTES.PORTFOLIO.slice(1),
        element: <Portfolio />,
      },
      {
        path: `${CUSTOM_ROUTES.PORTFOLIO.slice(1)}/:id`,
        element: <PortfolioDetails />,
      },
      {
        path: CUSTOM_ROUTES.SERVICES.slice(1),
        element: <Service />,
      },
      {
        path: CUSTOM_ROUTES.BLOG.slice(1),
        element: <Blog />,
      },
      {
        path: `${CUSTOM_ROUTES.BLOG.slice(1)}/:id`,
        element: <BlogDetails />,
      },
      {
        path: CUSTOM_ROUTES.CONTACT.slice(1),
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
