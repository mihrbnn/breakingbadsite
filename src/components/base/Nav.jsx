import { Link } from "react-router-dom";
import routes from "../../routes";
import "../base/style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark d-flex align-items-center justify-content-around">
      <Link className="navbar-brand text-white" to="#">
        <h2>BB</h2>
      </Link>
      <div className="d-flex flex-row" id="navbarSupportedContent">
        <ul className="navbar-nav flex flex-sm-row">
          {routes.filter(item=>item.isNav).map((item, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link text-white me-4" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
