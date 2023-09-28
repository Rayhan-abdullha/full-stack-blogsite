import React, { useContext } from "react";
import { Context } from "./context/Contex";
import { ToastContainer } from "react-toastify";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const { user } = useContext(Context);
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
}
