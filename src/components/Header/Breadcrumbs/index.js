import React from 'react';
import Styles from './styles';
import { links } from './links';

function Breadcrumbs() {
  return (
    <Styles.Wrap>
      <Styles.List className={'container'}>
        {links.map((item) => (
          <Styles.Item href={item.url} key={`breadcrumbs-item-${item.name}`}>
            {item.name}
            <Styles.Arrow />
          </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Wrap>
  );
}

export default Breadcrumbs;
