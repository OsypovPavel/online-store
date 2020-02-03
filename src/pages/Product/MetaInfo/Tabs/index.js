import React from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';

function Tabs({ current, onChange, reviews }) {
  const tabs = [
    'Характеристики',
    'Описание',
    `Отзывы и вопросы (${reviews})`,
    'Видеообзоры и статьи',
    'Сертификаты',
  ];
  const changeTab = (index) => () => {
    onChange(index);
  };
  return (
    <Styles.Container>
      {tabs.map((item, index) => (
        <Styles.Tab
          onClick={changeTab(index)}
          key={`meta-info-tab_${index}`}
          active={current === index}>
          {item}
        </Styles.Tab>
      ))}
    </Styles.Container>
  );
}
Tabs.propTypes = {
  current: PropsTypes.number.isRequired,
  onChange: PropsTypes.func.isRequired,
  reviews: PropsTypes.number.isRequired,
};
export default Tabs;
