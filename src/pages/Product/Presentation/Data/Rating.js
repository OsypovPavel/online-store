import React from 'react';
import Icon from '@icons';
import PropTypes from 'prop-types';
import Styles from './styles';

function Rating({ reviews, question, stock, rating }) {
  return (
    <Styles.Rating.Wrap>
      <Styles.Rating.Stock>{stock ? 'Есть в наличии' : 'Нет в наличии'}</Styles.Rating.Stock>
      <Styles.Rating.Stars rating={rating} />
      <Styles.Rating.Extra>
        <Icon name={'Comment'} /> {reviews.length} отзыва
      </Styles.Rating.Extra>
      <Styles.Rating.Extra>
        <Icon name={'Question'} /> {question} вопроса
      </Styles.Rating.Extra>
    </Styles.Rating.Wrap>
  );
}
Rating.propTypes = {
  reviews: PropTypes.array.isRequired,
  question: PropTypes.number.isRequired,
  stock: PropTypes.bool.isRequired,
};
export default Rating;
