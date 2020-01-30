import React from 'react';
import Styles from './styles';
import { links } from './links';

function Nav() {
  return (
    <Styles.Wrap>
      <Styles.Item href={`#`} catalog>
        Каталог товаров
        <Styles.Icon name={'ListRight'} />
      </Styles.Item>
      {links.map((item) => (
        <Styles.Item key={`header-bottom-nav-item-${item.name}`} href={`/${item.url}`}>
          <Styles.Icon name={item.icon} />
          {item.name}
        </Styles.Item>
      ))}
    </Styles.Wrap>
  );
}
export default Nav;
