import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layout/Main";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import AllToys from "./components/AllToys/AllToys";
import AddToy from "./components/AddToy/AddToy";
import App from "./App";
import NotFound from "./pages/404Page/NotFound";
import MyToysPage from "./components/MyToysPage/MyToysPage";
import SingleToy from "./components/SingelToy/SingelToy";
import BlogPage from "./pages/BlogPage/BlogPage";
import UpdateToy from "./components/UpdateToy/UpdateToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/home",
        element: <App></App>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://assignment-11-server-side-weld.vercel.app/addedtoy/"),
      },

      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/singeltoy/:id",
        element: <SingleToy></SingleToy>,
      },
      {
        path: "/blogpage",
        element:<BlogPage></BlogPage>
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) =>
          fetch(`https://assignment-11-server-side-weld.vercel.app/addedtoy/${params.id}`),
      },

      {
        path: "/mytoy",
        element: <MyToysPage></MyToysPage>,
        loader: () =>
          fetch("https://assignment-11-server-side-weld.vercel.app/addedtoy"),
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
