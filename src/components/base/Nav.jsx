import { Link } from "react-router-dom";
import routes from "../../routes";
import "../base/style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="#">
          <h2>BB</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active text-white me-4"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
