import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@icons';
import Styles from './styles';

function CardProduct({
  price,
  description,
  stock,
  img,
  discount,
  code,
  reviews,
  rating,
  withBtnBuy,
  withReviews,
}) {
  return (
    <Styles.Container>
      {!!discount && <Styles.Discount>Скидка -{discount}%</Styles.Discount>}
      <Styles.ImgWrap>
        <Styles.Img src={img} />
      </Styles.ImgWrap>
      <Styles.StockWrap>
        <Styles.Code>Код товара : {code}</Styles.Code>
        <Styles.Stock stock={stock} align={code ? 'right' : 'left'}>
          {stock ? '✓ В наличии' : 'Нет в наличии'}
        </Styles.Stock>
      </Styles.StockWrap>
      <Styles.Description>{description}</Styles.Description>
      <Styles.PriceGroup>
        <Styles.Price>
          {discount ? Math.floor(price - (price * discount) / 100) : price}{' '}
          <span className="currency">грн</span>
        </Styles.Price>
        {discount && <Styles.OldPrice>{price} грн</Styles.OldPrice>}
      </Styles.PriceGroup>
      {withBtnBuy && (
        <Styles.SaleButtonGroup className="d-flex al-center">
          <Styles.SaleButton>Купить</Styles.SaleButton>
          <Styles.Compare onClick={() => console.warn('Do something!')}>
            <Icon name={'Compare'} className={'icon'} />
          </Styles.Compare>
        </Styles.SaleButtonGroup>
      )}
      {withReviews && (
        <Styles.ReviewGroup>
          <Styles.Stars rating={rating} />
          <Styles.Reviews>
            <Icon name={'Comment'} />
            <span>{reviews} отзыва</span>
          </Styles.Reviews>
        </Styles.ReviewGroup>
      )}
    </Styles.Container>
  );
}
CardProduct.propTypes = {
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.bool.isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  img: PropTypes.string.isRequired,
  discount: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  withBtnBuy: PropTypes.bool,
  withReviews: PropTypes.bool,
  reviews: PropTypes.number.isRequired,
};
export default CardProduct;
