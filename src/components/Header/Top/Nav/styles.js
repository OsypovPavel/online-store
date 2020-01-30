import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';

const Styles = {
  Wrap: styled.nav`
    display: flex;
    align-items: center;
    max-width: max-content;
    height: 44px;
  `,
  Link: styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 18px;
    border-bottom: 2px solid transparent;
    transition: 0.1s ease-out;
    color: inherit;
    &:hover {
      border-width: 2px;
      border-color: ${variables.red};
      transition: 0.2s ease-out;
      color: ${variables.fontGreyHover};
    }
    &:first-child {
      margin-left: -18px;
    }
  `,
};
export default Styles;
