import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  return (
    <header>
      <Top />
      <Middle />
      <Bottom />
      <Breadcrumbs />
    </header>
  );
}
export default Header;
