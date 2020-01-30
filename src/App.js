import React from 'react';
import GlobalStyles from '@assets/style/tools/globalStyles';
import Header from '@components/Header';
import Product from '@pages/Product';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Product />
    </React.Fragment>
  );
}

export default App;
