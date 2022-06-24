import { Link } from "react-router-dom";
import "./FloatingCart.css";

// Image
import cartIcon from "./shopping-cart.svg";

export default function FloatingCart() {
  return (
    <Link to="panier">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icone caddie" />
          <span className="notif">0</span>
        </div>
      </div>
    </Link>
  );
}
