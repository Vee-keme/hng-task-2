import React from "react";
import { Home, Cart } from "../pages";
import Checkout from "../pages/Checkout";

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
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

export default mainRoutes;
