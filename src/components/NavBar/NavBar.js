import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="divNav">
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "#61dafb", fontSize: "64px" }}
      >
        ICESHOP
      </Link>
      <nav className="navFlex">
        <ul className="lista">
          <li className="nav-item dropdown">
            <h2
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </h2>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to="/category/buzos" className="dropdown-item">
                  Buzos
                </Link>
              </li>
              <li>
                <Link to="/category/remeras" className="dropdown-item">
                  Remeras
                </Link>
              </li>
              <li>
                <Link to="/category/bermudas" className="dropdown-item">
                  Bermudas
                </Link>
              </li>
              <li>
                <Link to="/category/joggers" className="dropdown-item">
                  Joggers
                </Link>
              </li>
              <li>
                <Link to="/category/conjuntos" className="dropdown-item">
                  Conjuntos
                </Link>
              </li>
              <li>
                <Link to="/category/accesorios" className="dropdown-item">
                  Accesorios
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to={"about"}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      color: "#61dafb",
                      textDecoration: "none",
                    }
                  : { color: "white", textDecoration: "none" }
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bold",
                      color: "#61dafb",
                      textDecoration: "none",
                    }
                  : { color: "white", textDecoration: "none" }
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
