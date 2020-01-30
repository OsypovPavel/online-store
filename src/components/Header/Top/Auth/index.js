import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

function Auth() {
  return (
    <Styles.Wrap>
      <Styles.Item href={'/login'} className={'active'}>
        <Styles.ItemIconLock />
        <Styles.ItemName>Вход</Styles.ItemName>
      </Styles.Item>
      <Styles.Item href={'/register'}>
        <Styles.ItemName>Регистрация</Styles.ItemName>
      </Styles.Item>
    </Styles.Wrap>
  );
}
Location.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setRef: PropTypes.object.isRequired,
};
export default Auth;
