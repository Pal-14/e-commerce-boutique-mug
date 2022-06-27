import { Link } from "react-router-dom";
import "./FloatingCart.css";
import { useSelector } from "react-redux";

// Image
import cartIcon from "./shopping-cart.svg";

export default function FloatingCart() {

  const shoppingCart = useSelector( state => state)
  console.log(shoppingCart);


// Affichage du nombre d'item dans le panier de base à 0 
  let totalItems = 0;
  for(const item of shoppingCart.cart){
    totalItems += item.quantity
  }

  return (
    <Link to="/panier">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icone caddie" />
          <span className="notif">{totalItems}</span>
        </div>
      </div>
    </Link>
  );
}
