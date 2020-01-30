import React from 'react';
import { links } from './links';
import Styles from './styles';

function Language() {
  const currentLang = 'ru';
  return (
    <Styles.Wrap>
      {links.map((item) => (
        <Styles.Link
          key={`header_top_lang_link${item.name}`}
          href={`/${item.code}`}
          className={currentLang === item.code ? 'is--active' : ''}>
          {item.name}
        </Styles.Link>
      ))}
    </Styles.Wrap>
  );
}

export default Language;
