export function filterProductsStart(searchText) {
  return {
    type: "FILTER_PRODUCTS_START",
    payload: searchText,
  };
}

export function fetchProductsStart() {
  return {
    type: "FETCH_PRODUCTS_START",
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
}

export function fetchProductsError(error) {
  return {
    type: "FETCH_PRODUCTS_ERROR",
    payload: error,
  };
}

//Actions Types
export const Types = {
  FILTER_PRODUCTS_START: "FILTER_PRODUCTS_START",
  FETCH_PRODUCTS_START: "FETCH_PRODUCTS_START",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
};

//Actions Creators
export const Creators = {
  filterProductsStart: () => ({
    type: Types.FILTER_PRODUCTS_START,
  }),
  fetchProductsStart: () => ({
    type: Types.FETCH_PRODUCTS_START,
  }),
  fetchProductsSuccess: () => ({
    type: Types.FETCH_PRODUCTS_SUCCESS,
  }),
  fetchProductsError: () => ({
    type: Types.FETCH_PRODUCTS_ERROR,
  }),
};
