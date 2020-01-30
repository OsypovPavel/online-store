import React from 'react';
import Styles from './styles';
import Search from './Search';
import Phones from './Phones';
import Feedback from './Feedback';
import Meta from './Meta';

function Middle() {
  return (
    <Styles.Wrap>
      <Styles.Container className="container">
        <Styles.Logo src={'/assets/img/logo.png'} alt={'Logo auto-base'} />
        <Search />
        <Phones />
        <Feedback />
        <Meta />
      </Styles.Container>
    </Styles.Wrap>
  );
}

export default Middle;
