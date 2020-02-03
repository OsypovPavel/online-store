import React from 'react';
import clickOutside from '@shared/hoc/clickOutside';
import Icon from '@icons';
import PropsTypes from 'prop-types';
import Styles from './styles';

function Select({ open, setRef, setOpen }) {
  const list = ['Volkswagen Golf, 1.9', 'Volkswagen, 2.9', 'BMW 3, 1.9', 'Mercedes-Benz, 1.9'];
  const [current, onSelectElement] = React.useState(list[0]);
  const onSelect = (item) => () => {
    onSelectElement(item);
    setOpen(false);
  };
  return (
    <Styles.Select.Container>
      <Styles.Select.Title>
        <span className={'check'}>✓</span>Товар подходит к вашему авто:
      </Styles.Select.Title>
      <Styles.Dropdown.Wrap ref={setRef}>
        <Styles.Dropdown.Current onClick={() => setOpen(true)}>
          <span>{current}</span>
          <Icon name={'ArrowDown'} />
        </Styles.Dropdown.Current>
        <Styles.Dropdown.List open={open}>
          {list.map((item, index) => (
            <Styles.Dropdown.Item
              key={`product-metainfo-sidebar-list-item_${index}`}
              onClick={onSelect(item)}>
              {item}
            </Styles.Dropdown.Item>
          ))}
        </Styles.Dropdown.List>
      </Styles.Dropdown.Wrap>
    </Styles.Select.Container>
  );
}
Select.propTypes = {
  open: PropsTypes.bool.isRequired,
  setRef: PropsTypes.object.isRequired,
  setOpen: PropsTypes.func.isRequired,
};
export default clickOutside(Select);
