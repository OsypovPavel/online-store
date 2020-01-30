import React from 'react';
import { Grid } from './styles';

const list = [1, 2, 3, 4, 5];

function GridWrap() {
  return (
    <Grid.List>
      {list.map((item) => (
        <Grid.Item key={`product-presentation-img-${item}`} active={item === 1}>
          <Grid.Img src={'/assets/img/favicon.ico'} />
        </Grid.Item>
      ))}
    </Grid.List>
  );
}

export default GridWrap;
