import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewUserPage from "./pages/NewUserPage";
// import ExistingUser from "./pages/ExistingUser";

import Root from "./routes/Root";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import ExistingUser from "./pages/ExistingUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/new_user",
        element: <NewUserPage />,
        errorElement: <ErrorPage />
      },
      {path: "/existing_user", element: <ExistingUser />}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
