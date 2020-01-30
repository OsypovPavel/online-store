import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { setHeight, setSize } from '@assets/style/tools/mixin';

const Styles = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${variables.fontGreyHover};
    margin-bottom: 30px;
  `,
  Title: styled.h1`
    flex: 1;
    display: block;
    margin-right: 15px;
    font-size: 34px;
    font-weight: bold;
  `,
  Code: styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 13px;
    max-width: max-content;
    padding: 0 10px 0 15px;
    ${setHeight('34px')};
    background-color: ${variables.yellow};
    &::before {
      content: '';
      ${setSize('14px')};
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background-color: white;
    }
  `,
};
export default Styles;
