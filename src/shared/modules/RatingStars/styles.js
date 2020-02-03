import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { setWidth } from '@assets/style/tools/mixin';

const Styles = {
  Container: styled.div`
    ${setWidth('100px')};
    position: relative;
  `,
  Stars: styled.img`
    display: block;
    width: 100%;
    position: relative;
    z-index: 3;
  `,
  Background: styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: ${variables.border};
  `,
  Progress: styled.div`
    display: block;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: ${variables.gold};
  `,
};

export default Styles;
