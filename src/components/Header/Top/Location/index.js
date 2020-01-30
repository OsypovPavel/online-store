import React from 'react';
import PropTypes from 'prop-types';
import clickOutside from '@shared/hoc/clickOutside';
import { Cities } from './cities';
import Styles from './styles';

function Location({ open, setOpen, setRef }) {
  const [city, changeCity] = React.useState(Cities[0]);
  const onSelect = (item) => () => {
    changeCity(item);
    setOpen(false);
  };
  return (
    <Styles.Wrap>
      <Styles.Title>Ваш город:</Styles.Title>
      <Styles.ListWrap ref={setRef}>
        <Styles.Current onClick={() => setOpen(!open)}>
          {city.name}
          <Styles.Arrow />
        </Styles.Current>
        <Styles.List open={open}>
          {Cities.map(
            (item) =>
              city.id !== item.id && (
                <Styles.City key={`header_top_city_item${item.id}`} onClick={onSelect(item)}>
                  {item.name}
                </Styles.City>
              ),
          )}
        </Styles.List>
      </Styles.ListWrap>
    </Styles.Wrap>
  );
}
Location.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setRef: PropTypes.object.isRequired,
};
export default clickOutside(Location);
