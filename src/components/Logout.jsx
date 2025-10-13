import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      
      <button onClick={handleLogout} className="btn btn-warning mt-3">
        Logout  <i class="fa fa-sign-out" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Home;
