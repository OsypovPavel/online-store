import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import Rating from './Rating';
import Meta from './Meta';
import Similar from './Similar';

function Data({ similar, ...props }) {
  return (
    <Styles.Wrap>
      <Rating {...props} />
      <div className={'d-flex al-start'}>
        <Meta {...props} />
        <Similar {...similar[Math.floor(Math.random() * Math.floor(similar.length - 1))]} />
      </div>
    </Styles.Wrap>
  );
}
Data.propTypes = {
  similar: PropTypes.array.isRequired,
};
export default Data;
