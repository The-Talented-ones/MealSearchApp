import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success ">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand text-white text-white"
          style={{ fontWeight: "bold" }}
          
        >
          Meal Search App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-black p-2"
                    : "nav-link text-white p-2"
                }
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/ingredients"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-black p-2"
                    : "nav-link text-white p-2"
                }
              >
                Ingredients
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text text-white">
            Welcome to Meal Search App!
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
