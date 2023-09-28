import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import LogIn from "../pages/logIn/LogIn";
import Write from "../pages/write/Write";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import SinglePost from "../pages/singlePost/SinglePost";
import NotFound from "../pages/notFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

function routes(user = false) {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "contact", element: <Contact /> },
    {
      path: "write",
      element: user ? <Write /> : <LogIn />,
    },
    { path: "register", element: <Register /> },
    { path: "login", element: <LogIn /> },
    { path: "profile", element: user ? <Profile /> : <LogIn /> },
    { path: "post/:id", element: user ? <SinglePost /> : <LogIn /> },
    { path: "*", element: <NotFound /> },
  ]);
  return router;
}

export default routes;
