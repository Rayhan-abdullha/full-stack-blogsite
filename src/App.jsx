import React, { useContext } from "react";
import { Context } from "./context/Contex";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";

export default function App() {
  const { user } = useContext(Context);
  const router = routes(user);
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
}
