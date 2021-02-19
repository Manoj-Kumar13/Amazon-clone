export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "remove_from_basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "empty_basket":
      return {
        ...state,
        basket: [],
      };

    case "set_user":
      return {
        ...state,
        user: action.user,
      };

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
