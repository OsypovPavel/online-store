import React from 'react';
import PropsTypes from 'prop-types';
import CardProduct from '@modules/CardProduct';
import ItemsCarousel from 'react-items-carousel';
import Icon from '@assets/Icons';
import Styles from './styles';

function SimilarProducts({ similar }) {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  return (
    <Styles.Container className={'find-slider'}>
      <Styles.Title>Похожие товары</Styles.Title>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={0}
        leftChevron={<Icon name={'ArrowLeft'} />}
        rightChevron={<Icon name={'ArrowRight'} />}
        outsideChevron
        alwaysShowChevrons
        chevronWidth={0}>
        {similar.map((item, index) => (
          <CardProduct {...item} withBtnBuy withReviews key={`similar-products-${index}`} />
        ))}
      </ItemsCarousel>
    </Styles.Container>
  );
}
SimilarProducts.propTypes = {
  similar: PropsTypes.array.isRequired,
};
export default SimilarProducts;
