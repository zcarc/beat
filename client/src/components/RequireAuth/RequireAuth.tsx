import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLoadingValid, validData } = useAuth();

  if (isLoadingValid) {
    return <></>;
  }

  if (!validData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
