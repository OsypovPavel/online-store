import React from 'react';
import { Picture } from './styles';

function PictureWrap() {
  return (
    <Picture.Wrap>
      <Picture.Img src={'/assets/img/oil.png'} />
    </Picture.Wrap>
  );
}

export default PictureWrap;
