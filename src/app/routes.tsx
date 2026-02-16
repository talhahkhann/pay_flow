import { RouteObject } from "react-router-dom";
import RegisterPage from "../features/auth/pages/RegisterPage";
import VerifyOtpPage from "../features/auth/pages/VerifyOtpPage";
import LoginPage from "../features/auth/pages/LoginPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
