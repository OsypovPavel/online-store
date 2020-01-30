import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, setSize, appearanceNone, transition } from '@assets/style/tools/mixin';

const Styles = {
  Button: styled.button`
    ${flexCenter()};
    ${setSize('150px', '34px')};
    border: 2px solid ${variables.yellow};
    background-color: white;
    cursor: pointer;
    ${appearanceNone()};
    outline: none !important;
    &:hover {
      background-color: ${variables.yellow};
      border-color: ${variables.yellowHover};
      color: white;
    }
    &:active {
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.16);
      transition: none;
    }
    ${transition('.2s')};
  `,
};
export default Styles;
