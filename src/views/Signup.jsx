import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Save credentials to localStorage
    const newUser = { username, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Signup successful! You can now log in.");
    navigate("/login");
    setIsLoading(false);
  };

  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center py-5">
      <div className="row w-50 mx-auto justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-success text-white text-center py-4 rounded-top-3">
              <h2 className="h3 mb-0 fw-bold">
                <i className="bi bi-person-plus-fill me-2"></i>
                Create Account
              </h2>
              <p className="mb-0 opacity-75 mt-2">Join us to start exploring meals!</p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSignup}>
                {/* Username Field */}
                <div className="mb-4">
                  <label htmlFor="username" className="form-label fw-semibold">
                    <i className="fa fa-user me-1"></i>
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="form-control border-success"
                    placeholder="Choose a username"
                    disabled={isLoading}
                  />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="fa fa-unlock-alt me-1"></i>
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control border-success"
                    placeholder="Create a password"
                    disabled={isLoading}
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label fw-semibold">
                    <i className="fa fa-check-circle me-1"></i>
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-control border-success"
                    placeholder="Re-enter your password"
                    disabled={isLoading}
                  />
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-semibold rounded-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Creating account...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-person-check-fill me-2"></i>
                      Sign Up
                    </>
                  )}
                </button>
              </form>

              {/* Redirect to Login */}
              <div className="text-center mt-3">
                <small>
                  Already have an account?{" "}
                  <button
                    className="btn btn-link p-0 text-success text-decoration-none fw-semibold"
                    onClick={() => navigate("/login")}
                  >
                    Login here
                  </button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
