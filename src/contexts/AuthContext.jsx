import { createContext, useContext, useState, ReactNode } from "react";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const signup = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  
  return useContext(AuthContext);
}; 