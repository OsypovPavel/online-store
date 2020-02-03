import React from 'react';
import Styles from './styles';
import CardProduct from './CardProduct';
import Select from './Select';

function Sidebar(data) {
  return (
    <Styles.Container>
      <CardProduct {...data} />
      <Select {...data} />
    </Styles.Container>
  );
}

export default Sidebar;
