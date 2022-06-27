// useParams pour utiliser les parametres de l'url(élément dans la route produits/:id)
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./ProductShowcase.css";
import inventory from "../../data/inventory";
import { useDispatch } from "react-redux";

export default function ProductShowCase() {
  const [nbMugs, setNbMugs] = useState(1);

  // initialisation du dispatch
  const dispatch = useDispatch();

  // Pour retrouver le id de l'url => retourne l'élément selectionner dans le shop et ammène à la page de celui-ci
  const { id } = useParams();
  // console.log(id);

  // Pour chaque article(obj) quand on clique dessus on récupère son title et avec (===id) = l'id correspondant au title
  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );
  // console.log(productClicked);

  // Fonction ajout Mugs
  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };

  // Fonctions Update Panier (onSubmit du formulaire)

  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbMugs,
    };

    //Quand on ajoute un item = (type) alors on prend la const itemAdded = (payload) qui fait un nouveau tableau avec les obj ajout(nbMugs)
    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });
    // quand on ajoute au panier texte d'ajout
    addingInfo.current.innerText = "Ajouté au Panier";

    // timeout pour retirer le texte
    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 2000);
    }
  };

  // Fonction clean du setTimeOut à mettre car si on quitte la page sans la clean up fonction alors il y aura une erreur sur la page à la fin du setTimeOut (test mettre en commentaire le useEffect et ajouter au panier puis quitter la page === erreur ) sinon avec le useEffect mêm opération === Bon

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);

  // Message pour l'ajout au panier
  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        {/*  dans l'img la source est env Public et l'image de l'inventaire de quoi ? du produit qui a été cliquer */}
        <img
          className="img-showcase"
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt="produit"
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix: {inventory[productClicked].price} </p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité</label>
          <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Ajouter au Panier</button>
          <span ref={addingInfo} className="adding-info"></span>
        </form>
      </div>
    </div>
  );
}
