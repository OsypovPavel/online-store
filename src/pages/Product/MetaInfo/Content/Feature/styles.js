import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { simpleIcon } from '@assets/style/tools/mixin';

const Styles = {
  Title: styled.span`
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: ${variables.fontGreyHover};
    margin-bottom: 20px;
  `,
  Description: styled.p`
    display: block;
    font-size: 14px;
    line-height: 1.3;
    color: ${variables.fontGrey};
    margin-bottom: 20px;
  `,
  Table: {
    Wrap: styled.div`
      display: block;
      font-size: 13px;
      margin-bottom: 20px;
      color: ${variables.fontGrey};
    `,
    Row: styled.div`
      display: flex;
      padding: 14px 15px;
      &:nth-child(odd) {
        background-color: #eff0f3;
      }
    `,
    Column: styled.div`
      flex: 0 50%;
    `,
  },
  ShowAll: styled.span`
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-bottom: 70px;
    color: ${variables.fontGrey};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: ${variables.red};
    }
    svg {
      ${simpleIcon('12px')};
      margin-right: 6px;
      path {
        fill: ${variables.red};
      }
    }
  `,
};
export default Styles;
