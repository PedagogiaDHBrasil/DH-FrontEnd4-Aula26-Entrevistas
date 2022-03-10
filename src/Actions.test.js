import { Types, Creators } from "./actions/products.js";

describe("Actions Creators", () => {
  test("Filter Products Start", () => {
    expect(Creators.filterProductsStart()).toEqual({
      type: Types.FILTER_PRODUCTS_START,
    });
  });
  test("Fetch Products Start", () => {
    expect(Creators.fetchProductsStart()).toEqual({
      type: Types.FETCH_PRODUCTS_START,
    });
  });
  test("Fetch Products Success", () => {
    expect(Creators.fetchProductsSuccess()).toEqual({
      type: Types.FETCH_PRODUCTS_SUCCESS,
    });
  });
  test("Fetch Products Error", () => {
    expect(Creators.fetchProductsError()).toEqual({
      type: Types.FETCH_PRODUCTS_ERROR,
    });
  });
});
