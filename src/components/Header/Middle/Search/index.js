import React from 'react';
import Styles from './styles';

function Search() {
  return (
    <Styles.Wrap>
      <Styles.Input placeholder={'Поиск по названию, коду, категории товара'} />
      <Styles.Icon />
    </Styles.Wrap>
  );
}

export default Search;
