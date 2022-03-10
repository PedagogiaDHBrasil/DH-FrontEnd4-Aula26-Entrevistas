const initialState = {
  products: [],
  isFetching: false,
  errorMessage: undefined,
};

export function fetchProductsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FILTER_PRODUCTS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        errorMessage: undefined,
        isFetching: false,
        products: action.payload,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}