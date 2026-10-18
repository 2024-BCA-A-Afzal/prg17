function cartReducer(state, action) {
  switch (action.type) {
    case "INCREASE": {
      const existing = state.find(
        (item) => item.id === action.payload
      );

      if (!existing) return state;

      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case "ADD_TO_CART": {
      const product = action.payload;
      const existing = state.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.id !== action.payload
      );

    default:
      return state;
  }
}

export default cartReducer;