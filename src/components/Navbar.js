import '../css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink>
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/product/">Detail</Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/contact/">Contact</Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/cart/">Cart</Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/checkout/">Checkout</Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/login/">Login</Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink>
                <Link className="nav-link" to="/register/">Register</Link>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}