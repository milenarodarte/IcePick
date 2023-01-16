import { Navigate, Outlet } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

export const ProtectedRoutes = () => {
  const { user, loadingPage } = useUsers()

  if (loadingPage) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/"} />;
};