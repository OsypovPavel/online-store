import React from 'react';
import PropTypes from 'prop-types';
import clickOutside from '@shared/hoc/clickOutside';
import { PhoneList } from './phoneList';
import Styles from './styles';

function Phones({ setRef, setOpen, open }) {
  const [phone, changePhone] = React.useState(PhoneList[0]);
  const onSelect = (item) => () => {
    changePhone(item);
    setOpen(false);
  };
  return (
    <Styles.Wrap ref={setRef}>
      <Styles.Current onClick={() => setOpen(!open)}>
        {phone.name}
        <Styles.Arrow />
      </Styles.Current>
      <Styles.List open={open}>
        {PhoneList.map(
          (item) =>
            phone.id !== item.id && (
              <Styles.Phone key={`header_top_phone_item${item.id}`} onClick={onSelect(item)}>
                {item.name}
              </Styles.Phone>
            ),
        )}
      </Styles.List>
    </Styles.Wrap>
  );
}
Phones.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setRef: PropTypes.object.isRequired,
};
export default clickOutside(Phones);
