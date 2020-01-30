import React from 'react';
import Styles from './styles';
import { links } from './links';

function Meta() {
  return (
    <Styles.Wrap>
      {links.map((item) => (
        <Styles.Item key={`header_middle_meta_item${item.url}`} href={`/${item.url}`}>
          <Styles.IconWrap>
            <Styles.Icon name={item.icon} />
            {item.count > 0 && <Styles.Count>{item.count}</Styles.Count>}
          </Styles.IconWrap>
          <Styles.Name>{item.name}</Styles.Name>
        </Styles.Item>
      ))}
    </Styles.Wrap>
  );
}

export default Meta;
