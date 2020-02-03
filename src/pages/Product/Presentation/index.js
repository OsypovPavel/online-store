import React from 'react';
import Gallery from './Gallery';
import Data from './Data';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
`;
function Presentation(props) {
  return (
    <Container>
      <Gallery {...props} />
      <Data {...props} />
    </Container>
  );
}
export default Presentation;
