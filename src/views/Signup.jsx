import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Simulate login (replace with real auth logic if needed)
    if (username === "user" && password === "password") {
      signup();
      navigate(from, { replace: true });
    } else {
      alert(
        "Invalid credentials. Use Username: 'User' and Password: 'password'"
      );
    }

    setIsLoading(false);
  };

  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center py-5">
      <div className="row w-50 mx-auto justify-content-center">
        <div className="col-12 col-md-12 col-lg-12 col-sm-12">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-success text-white text-center py-4 rounded-top-3">
              <h2 className="h3 mb-0 fw-bold">
                <i className="bi bi-person-circle me-2"></i>
                SignUp
              </h2>
              <p className="mb-0 opacity-75 mt-2">
                Welcome back! Please sign up.
              </p>
            </div>

            <div className="card-body p-4 p-md-5">
              {/* Demo credentials alert */}
              <div
                className="alert alert-success d-flex align-items-center mb-4"
                role="alert"
              >
                <i className="bi bi-info-circle-fill me-2"></i>
                {/* <div>
                  <small className="fw-bold">Demo Credentials:</small>
                  <br />
                  <small>Username: <strong>user</strong></small>
                  <br />
                  <small>Password: <strong>password</strong></small>
                </div> */}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <i className="fa fa-user me-1"></i>
                    Email
                  </label>
                  <div className="input-group">
                    {/* <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-person text-muted"></i>
                    </span> */}
                    <input
                      id="username"
                      type="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="form-control border-success "
                      placeholder="Enter your Email Address"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* FirstName Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="fa fa-unlock-alt me-1"></i>
                    First Name
                  </label>
                  <div className="input-group">
                    {/* <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-key "></i>
                    </span> */}
                    <input
                      id="FirstName"
                      type="text"
                      value={firstname}
                      // onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control border-success"
                      placeholder="Enter your FirstName"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* LastName Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="fa fa-unlock-alt me-1"></i>
                    Last Name
                  </label>
                  <div className="input-group">
                    {/* <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-key "></i>
                    </span> */}
                    <input
                      id="LastName"
                      type="text"
                      value={lastname}
                      // onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control border-success"
                      placeholder="Enter your LastName"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="fa fa-unlock-alt me-1"></i>
                    Password
                  </label>
                  <div className="input-group">
                    {/* <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-key "></i>
                    </span> */}
                    <input
                      id="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control border-success"
                      placeholder="Enter your Password"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* ConfirmPassword Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="fa fa-unlock-alt me-1"></i>
                    Confirm Your Password
                  </label>
                  <div className="input-group">
                    {/* <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-key "></i></span> */}
                    <input
                      id="Password"
                      type="password"
                      value={password}
                      onChangeb={(e) => setPassword(e.target.value)}
                      required
                      className="form-control border-success"
                      placeholder="Enter your Password"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label small" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="small text-decoration-none text-success">
                    Forgot password?
                  </a>
                </div> */}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-semibold rounded-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm  me-2"
                        role="status"
                      ></span>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Sign In
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
