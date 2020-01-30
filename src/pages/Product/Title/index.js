import React from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';

function Title({ title, code }) {
  return (
    <Styles.Wrap>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Code>Код товара : {code}</Styles.Code>
    </Styles.Wrap>
  );
}
Title.propTypes = {
  title: PropsTypes.string.isRequired,
  code: PropsTypes.string.isRequired,
};
export default Title;
