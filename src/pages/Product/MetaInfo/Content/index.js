import React from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';
import Feature from './Feature';

function Content({ current, ...data }) {
  const components = [<Feature {...data} />, 2, 3, 4, 5];
  return <Styles.Container>{components[current]}</Styles.Container>;
}
Content.propTypes = {
  current: PropsTypes.number.isRequired,
};
export default Content;
