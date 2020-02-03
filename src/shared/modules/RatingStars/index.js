import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

function RatingStars({ rating, ...props }) {
  return (
    <Styles.Container {...props}>
      <Styles.Background />
      <Styles.Progress style={{ width: `${rating * 20}%` }} />
      <Styles.Stars src={'/assets/img/stars.png'} />
    </Styles.Container>
  );
}
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default RatingStars;
