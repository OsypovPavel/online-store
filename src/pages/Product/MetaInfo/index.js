import React from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';
import Tabs from './Tabs';
import Content from './Content';
import Sidebar from './Sidebar';

const Container = styled.section`
  width: 100%;
  margin-bottom: 50px;
  padding-bottom: 100px;
`;

function MetaInfo(data) {
  const [tab, changeTab] = React.useState(0);
  return (
    <Container>
      <Tabs current={tab} onChange={changeTab} reviews={data.reviews.length} />
      <div className="d-flex">
        <Content {...data} current={tab} />
        <Sidebar {...data} />
      </div>
    </Container>
  );
}
MetaInfo.propTypes = {
  title: PropsTypes.string.isRequired,
  code: PropsTypes.string.isRequired,
};
export default MetaInfo;
