import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './styles';
import GridWrap from './Grid';
import Picture from './Picture';

function Gallery({ gallery }) {
  const [current, changePicked] = React.useState(gallery[0]);
  return (
    <Styles.Wrap>
      <GridWrap list={gallery} current={current} onChange={changePicked} />
      <Picture current={current} />
    </Styles.Wrap>
  );
}
Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Gallery;
