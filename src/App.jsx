import React, { useContext } from "react";
import { Context } from "./context/Contex";
import { ToastContainer } from "react-toastify";
import routes from "./routes/router";
import { ContextProvider } from "./context/Contex";
import { RouterProvider } from "react-router-dom";
export default function App() {
  const { user } = useContext(Context);
  const router = routes(user);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  );
}
