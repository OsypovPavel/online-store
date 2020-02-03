import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from './styles';

function GridWrap({ list, current, onChange }) {
  const changeEl = (el) => () => {
    onChange(el);
  };
  return (
    <Grid.List>
      {list.map((item, index) => (
        <Grid.Item
          key={`product-presentation-img-${index}`}
          active={item === current}
          onClick={changeEl(item)}>
          <Grid.Img src={item} />
        </Grid.Item>
      ))}
    </Grid.List>
  );
}
GridWrap.propTypes = {
  list: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default GridWrap;
