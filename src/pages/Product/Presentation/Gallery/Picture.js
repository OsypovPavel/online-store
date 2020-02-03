import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from './styles';

function PictureWrap({ current }) {
  return (
    <Picture.Wrap>
      <Picture.Img src={current} />
    </Picture.Wrap>
  );
}
PictureWrap.propTypes = {
  current: PropTypes.string.isRequired,
};
export default PictureWrap;
