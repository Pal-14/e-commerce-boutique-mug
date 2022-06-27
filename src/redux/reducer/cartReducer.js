// initiliser le reducer

const INITIAL_STATE = {
  cart: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      console.log("ADDITEM");

      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      console.log(indexItemAdd);

      if (indexItemAdd !== -1) {

        const updatedQuantity = {
            ...state.cart[indexItemAdd],
            quantity: state.cart[indexItemAdd].quantity + action.payload.quantity
        }
        const newArr = [...state.cart]
        newArr.splice(indexItemAdd, 1, updatedQuantity)
        console.log(newArr);

        return {
            cart: newArr
        }

      }
      // je créer un nouveau tableau avec le state du panier et je rajoute mon action(nbMugs)
      else {
        const newArr = [...state.cart];
        newArr.push(action.payload);

        // et enfin je retourne le nouveau state du panier
        return {
          cart: newArr,
        };
      }

    case "UPDATEITEM":

    const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id)
    
    const newArr = [...state.cart];
    newArr.splice(indexItemUpdate, 1, action.payload)

          return {
            cart: newArr,
          };
  }

  return state;
}
