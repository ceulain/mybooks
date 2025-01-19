import { createHashRouter, RouterProvider } from "react-router";
import Main from "../../components/Main";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <p>Login</p>,
  },
  {
    path: "/register",
    element: <>Register</>,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
