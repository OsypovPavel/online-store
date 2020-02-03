import React from 'react';
import Styles from './styles';
import Icon from '@icons';

function CardProduct({ discount, gallery, code, stock, title, price }) {
  return (
    <Styles.Card.Container>
      {!!discount && <Styles.Card.Discount>Скидка -{discount}%</Styles.Card.Discount>}
      <Styles.Card.ImgWrap>
        <Styles.Card.Img src={gallery[0]} />
      </Styles.Card.ImgWrap>
      <Styles.Card.StockWrap>
        <Styles.Card.Stock stock={stock} align={code ? 'right' : 'left'}>
          {stock ? 'В наличии' : 'Нет в наличии'}
        </Styles.Card.Stock>
      </Styles.Card.StockWrap>
      <Styles.Card.Title>{title}</Styles.Card.Title>
      <Styles.Card.PriceGroup>
        <Styles.Card.Price>
          {discount ? Math.floor(price - (price * discount) / 100) : price}{' '}
          <span className="currency">грн</span>
        </Styles.Card.Price>
        {discount && <Styles.OldPrice>{price} грн</Styles.OldPrice>}
      </Styles.Card.PriceGroup>
      <Styles.Card.SaleButtonGroup className="d-flex al-center">
        <Styles.Card.SaleButton>Сообщить
          о поступлении</Styles.Card.SaleButton>
        <Styles.Card.Compare onClick={() => console.warn('Do something!')}>
          <Icon name={'Compare'} className={'icon'} />
        </Styles.Card.Compare>
      </Styles.Card.SaleButtonGroup>
      <Styles.Card.ShowAll>Показать все похожие товары</Styles.Card.ShowAll>
    </Styles.Card.Container>
  );
}

export default CardProduct;
