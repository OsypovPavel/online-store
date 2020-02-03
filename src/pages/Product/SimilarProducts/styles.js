import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, setSize, simpleIcon } from '@assets/style/tools/mixin';

const Styles = {
  Container: styled.section`
    width: 100%;
    margin-bottom: 50px;
    &.find-slider {
      & > div {
        & > div:nth-child(2) {
          ${setSize('40px')};
          right: 0;
          left: auto;
          top: -40px;
          bottom: auto;
          background-color: #474a4e;
          color: white;
          font-size: 30px;
          ${flexCenter()};
          svg{
            ${simpleIcon('14px')};
            path{
              fill: white;
            }
          }
          &:hover{
            background-color: #3c3f43;
          }
        }
        & > div:nth-child(3) {
          ${setSize('40px')};
          right: 40px;
          left: auto;
          top: -40px;
          bottom: auto;
          background-color: #474a4e;
          color: white;
          font-size: 30px;
          ${flexCenter()};
          svg{
            ${simpleIcon('14px')};
            path{
              fill: white;
            }
          }
          &:hover{
            background-color: #3c3f43;
          }
      }
    }
  `,
  Title: styled.span`
    display: block;
    width: 100%;
    margin-bottom: 30px;
    font-weight: bold;
    color: ${variables.fontGreyHover};
    font-size: 26px;
  `,
};
export default Styles;
