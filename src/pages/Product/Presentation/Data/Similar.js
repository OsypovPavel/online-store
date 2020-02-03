import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

function Similar({ price, description, stock, img }) {
  return (
    <Styles.Similar.Wrap>
      <Styles.Similar.Title>Похожий товар</Styles.Similar.Title>
      <Styles.Similar.Img src={img} />
      <Styles.Similar.Stock stock={stock}>{stock ? 'В наличии' : 'Нет в наличии'}</Styles.Similar.Stock>
      <Styles.Similar.Description>{description}</Styles.Similar.Description>
      <Styles.Similar.Price>
        {price} <span className="currency">грн</span>
      </Styles.Similar.Price>
      <Styles.Similar.LinkAnother>Показать все похожие товары</Styles.Similar.LinkAnother>
    </Styles.Similar.Wrap>
  );
}
Similar.propTypes = {
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
};
export default Similar;
