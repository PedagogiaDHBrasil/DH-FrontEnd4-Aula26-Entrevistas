import { useEffect, useState } from 'react';

import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProductsStart, filterProductsStart } from './actions/products';

function App({ products, fetchProductsStart, filterProductsStart }) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => fetchProductsStart(), [fetchProductsStart]);

  function changeSearchText(event) {
    setSearchText(event.target.value);
  }

  function filterProducts() {
    if (!searchText) {
      fetchProductsStart();
    } else {
      filterProductsStart(searchText);
    }
  }

  return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={searchText} onChange={changeSearchText} />
          <button type="button" onClick={filterProducts}>Buscar</button>
        </header>
        <main>
          {products.isFetching ? (
            <span>Carregando...</span>
          ) : (
            <ul>
              {products.products.map(product => (
                <li key={product.id}>
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProductsStart, filterProductsStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
