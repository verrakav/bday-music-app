import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//functional
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
//actually see
import HomePage from "./pages/HomePage";
import NewUserPage from "./pages/NewUserPage";
import ExistingUser from "./pages/ExistingUser";

//defining routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <HomePage />, errorElement: <ErrorPage />},
      {
        path: "/new_user",
        element: <NewUserPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/existing_user",
        element: <ExistingUser />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

//tfytfyfttf

export default App;
