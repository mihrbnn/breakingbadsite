import { Link } from "react-router-dom";
import routes from "../../routes";
import "../base/style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white ms-md-4 ps-md-4" to="#">
          <h2>BB</h2>
        </Link>
        <div className="collapse navbar-collapse d-md-flex justify-content-end">
          <ul className="navbar-nav mb-2 mb-md-0">
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active text-white me-md-4"
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
