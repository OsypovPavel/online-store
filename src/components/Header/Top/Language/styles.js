import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';

const Styles = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    height: 44px;
  `,
  Link: styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 2px solid transparent;
    transition: 0.1s ease-out;
    color: inherit;
    &:hover,
    &.is--active {
      border-width: 2px;
      border-color: ${variables.red};
      transition: 0.2s ease-out;
      color: ${variables.fontGreyHover};
    }
    &:first-child {
      margin-right: 26px;
    }
  `,
};
export default Styles;
