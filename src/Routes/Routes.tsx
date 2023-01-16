import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes/protectedRoutes";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
