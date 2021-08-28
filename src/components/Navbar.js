import '../css/bootstrap.min.css';
import {
  Nav,
  NavLink,
} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

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
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/product/">Detail</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact/">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/cart/">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/checkout/">Checkout</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login/">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}