import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/Error";
import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/Expenses";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };
  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    {
      path: "/expense",
      element: (
        <RequireAuth>
          <ExpensesPage />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;