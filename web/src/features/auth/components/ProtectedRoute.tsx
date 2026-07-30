import { Navigate, Outlet } from "react-router";
import { useAuthStore, selectIsAuthenticated } from "../store/auth.store";

export function ProtectedRoute() {
  const authenticated = useAuthStore(selectIsAuthenticated);
  return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
