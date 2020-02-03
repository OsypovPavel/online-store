import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { transition } from '@assets/style/tools/mixin';

const Styles = {
  Container: styled.section`
    display: flex;
    margin-bottom: 40px;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${variables.border};
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  `,
  Tab: styled.span`
    display: block;
    flex: 1;
    max-width: max-content;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => (props.active ? variables.red : variables.fontGrey)};
    cursor: pointer;
    padding: 20px 0;
    border-bottom: 2px solid ${(props) => (props.active ? variables.red : 'transparent')};
    ${transition('.1s')};
    position: relative;
    z-index: 2;
    &:hover {
      color: ${variables.red};
      border-color: ${variables.red};
    }
    &:not(:last-child) {
      margin-right: 70px;
    }
  `,
};
export default Styles;
