import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchProductsSuccess, fetchProductsError } from '../actions/products';

function* fetchProductsSaga() {
  try {
    const response = yield call(fetch, `http://localhost:3001/products`);
    const products = yield response.json();

    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError(error.message));
  }
}

function* filterProductsSaga({ payload }) {
  try {
    const response = yield call(fetch, `http://localhost:3001/products?title_like=${payload}`);
    const products = yield response.json();

    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError(error.message));
  }
}

export default function* sagas() {
  yield takeLatest('FETCH_PRODUCTS_START', fetchProductsSaga);
  yield takeLatest('FILTER_PRODUCTS_START', filterProductsSaga);
}