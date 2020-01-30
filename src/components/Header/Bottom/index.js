import React from 'react';
import Nav from './Nav';
import Styles from './styles';
// import Catalog from './Catalog';

function Bottom() {
  return (
    <Styles.Wrap>
      <Styles.Container className="container">
        <Nav />
        {/*<Catalog />*/}
      </Styles.Container>
    </Styles.Wrap>
  );
}

export default Bottom;
