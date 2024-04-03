import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./component/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./component/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>,
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* AuthProvider er bhitore jetai thakouk na keno take amra children hisebe paite pari */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
