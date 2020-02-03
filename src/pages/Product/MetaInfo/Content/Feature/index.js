import React from 'react';
import PropsTypes from 'prop-types';
import Icon from '@icons';
import Styles from './styles';

function Feature({ feature, description }) {
  const [showAll, changeStatusShowAll] = React.useState(false);
  const [showItems, changeShowItems] = React.useState(7);
  const onClickShowAll = () => {
    changeStatusShowAll(true);
    changeShowItems(feature.length);
  };
  return (
    <React.Fragment>
      <Styles.Title>Характеристики товара</Styles.Title>
      <Styles.Table.Wrap>
        {feature.slice(0, showItems).map((item, index) => (
          <Styles.Table.Row key={`feature-product_${index}`}>
            <Styles.Table.Column>{item.title}</Styles.Table.Column>
            <Styles.Table.Column>{item.value}</Styles.Table.Column>
          </Styles.Table.Row>
        ))}
      </Styles.Table.Wrap>
      {!showAll && (
        <Styles.ShowAll onClick={onClickShowAll}>
          <Icon name={'ArrowDown'} />
          Показать все характеристики
        </Styles.ShowAll>
      )}
      <Styles.Title>Описание товара</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
    </React.Fragment>
  );
}
Feature.propTypes = {
  feature: PropsTypes.array.isRequired,
  description: PropsTypes.string.isRequired,
};
export default Feature;
