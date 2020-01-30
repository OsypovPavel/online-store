import React from 'react';
import { Styles } from './styles';
import GridWrap from './Grid';
import Picture from './Picture';

function Gallery() {
  return (
    <Styles.Wrap>
      <GridWrap />
      <Picture />
    </Styles.Wrap>
  );
}

export default Gallery;
