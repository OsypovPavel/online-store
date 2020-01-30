import React from 'react';
import { links } from './links';
import Styles from './styles';

function Nav() {
  return (
    <Styles.Wrap>
      {links.map((item) => (
        <Styles.Link key={`header_top_nav_link${item.name}`} href={`/${item.url}`}>
          {item.name}
        </Styles.Link>
      ))}
    </Styles.Wrap>
  );
}
export default Nav;
