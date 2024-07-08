import React from "react";
import { Home, Cart } from "../pages";

type Route = {
  path: string;
  element: React.ReactNode | any;
};

const mainRoutes: Route[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default mainRoutes;
