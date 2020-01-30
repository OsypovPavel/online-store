import React from 'react';
import Title from './Title';
import Presentation from './Presentation';

function Product() {
  return (
    <main>
      <section className="container">
        <Title title={'Моторное масло MOBIL Super 3000 X1 5W-40, 4л'} code={'39207'} />
        <Presentation />
      </section>
    </main>
  );
}

export default Product;