import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import "./ShoppingCart.css";

export default function ShoppingCart() {
  const storeState = useSelector((state) => state);

  const dispatch = useDispatch();

  //
  const handleChange = (e, id) => {
    const indexItem = storeState.cart.findIndex((obj) => obj.id === id);

    const objUpdate = {
      ...storeState.cart[indexItem],
      quantity: Number(e.target.value),
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdate,
    });
  };

  let totalPrice = 0;

  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  return (
    <div className="global-container">
      <p className="heading-cart">Votre Panier: </p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt="image du panier"
            />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Prix: {item.price}</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input
                type="number"
                min={0}
                id="quantityInput"
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {/* toFixed = pour choisir le nombre de décimal après la virgule pour tester retirer le toFixed et tester jusqu'a avoir plein de décimal après la virgule */}
      <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  );
}
