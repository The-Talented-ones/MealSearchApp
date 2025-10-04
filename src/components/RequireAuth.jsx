import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";



const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login"  />;
  }
  return children;
};

export default RequireAuth;