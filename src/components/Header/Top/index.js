import React from 'react';
import Nav from './Nav';
import Styles from './styles';
import Language from './Language';
import Location from './Location';
import Auth from './Auth';

function Top() {
  return (
    <Styles.Wrap>
      <Styles.Container className="container">
        <Nav />
        <Language />
        <Location />
        <Auth />
      </Styles.Container>
    </Styles.Wrap>
  );
}

export default Top;
