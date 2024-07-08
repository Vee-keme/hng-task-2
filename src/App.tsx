// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import mainRoutes from "./routes/mainRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: mainRoutes,
      errorElement: "",
    },
  ]);
  return <RouterProvider router={router} />;

  // return (
  //   <>
  //     <Navbar />
  //     <main className="bg-primaryGray text-white min-h-screen flex flex-col items-center justify-center"></main>
  //     <Footer />
  //   </>
  // );
}

export default App;
