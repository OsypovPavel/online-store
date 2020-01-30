import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import {
  transition,
  appearanceNone,
  focusPlaceholder,
  setHeight,
  simpleIcon,
} from '@assets/style/tools/mixin';
import Loupe from '@icons/Loupe';

const Styles = {
  Wrap: styled.form`
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 348px;
    min-width: 120px;
    margin-right: 30px;
    ${setHeight('46px')};
    background-color: white;
    position: relative;
  `,
  Input: styled.input`
    display: block;
    position: relative;
    z-index: 1;
    font-size: 13px;
    height: 100%;
    background-color: transparent;
    color: ${variables.fontGreyHover};
    flex: 1;
    border: 1px solid rgba(54, 54, 54, 0.3);
    border-radius: 100px;
    padding: 0 50px 0 18px;
    ${appearanceNone()};
    ${focusPlaceholder()};
    ${transition()};
    &:focus {
      border-color: ${variables.fontGreyHover};
      & + svg {
        path {
          fill: ${variables.red};
        }
      }
    }
  `,
  Icon: styled(Loupe)`
    position: absolute;
    z-index: 2;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    ${simpleIcon('20px')};
  `,
};
export default Styles;
