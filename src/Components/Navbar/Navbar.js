import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-top">
      <Link to="/">Accueil</Link>
      <Link to="/produits">Produits</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
