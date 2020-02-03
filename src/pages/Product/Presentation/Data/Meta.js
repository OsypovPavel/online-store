import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

function Meta({ price, stock, description }) {
  return (
    <Styles.Meta.Wrap>
      <Styles.Meta.Price>
        {price} <span className="currency">грн</span>
      </Styles.Meta.Price>
      {!stock && <Styles.Meta.StockMessage>Сообщить о поступлении</Styles.Meta.StockMessage>}
      <Styles.Meta.Description>{description}</Styles.Meta.Description>
      <Styles.Meta.BtnGroup>
        <Styles.Meta.Button>
          <Styles.Meta.ButtonIcon name={'Share'} />
          <span>Поделиться</span>
        </Styles.Meta.Button>
        <Styles.Meta.Button>
          <Styles.Meta.ButtonIcon name={'Compare'} />
          <span>Сравнить</span>
        </Styles.Meta.Button>
      </Styles.Meta.BtnGroup>
    </Styles.Meta.Wrap>
  );
}
Meta.propTypes = {
  price: PropTypes.number.isRequired,
  stock: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};
export default Meta;
