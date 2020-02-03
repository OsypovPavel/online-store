import styled from 'styled-components';
import {
  simpleIcon,
  appearanceNone,
  flexCenter,
  setSize,
} from '@assets/style/tools/mixin';
import { variables } from '@assets/style/tools/variables';
import RatingStars from '../RatingStars';

const Styles = {
  Container: styled.article`
    display: block;
    flex: 1;
    max-width: 245px;
    font-size: 13px;
    padding-top: 10px;
    padding-right: 15px;
    color: ${variables.fontGrey};
    position: relative;
  `,
  Discount: styled.span`
    display: block;
    max-width: max-content;
    padding: 10px 15px;
    font-size: 12px;
    color: white;
    background-color: ${variables.orange};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    border-radius: 3px;
  `,
  ImgWrap: styled.div`
    ${flexCenter};
    height: 160px;
    width: 100%;
    margin: 0 auto 20px;
  `,
  Img: styled.img`
    display: block;
    max-height: 100%;
    max-width: 100%;
  `,
  StockWrap: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 12px;
  `,
  Stock: styled.span`
    display: block;
    flex: 1;
    max-width: max-content;
    text-align: ${(props) => props.align || 'left'};
    color: ${(props) => (props.stock ? variables.green : variables.red)};
  `,
  Code: styled.span`
    display: block;
    flex: 1;
  `,
  Description: styled.span`
    display: block;
    white-space: pre-wrap;
    margin-top: 10px;
  `,
  PriceGroup: styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
  `,
  Price: styled.span`
    display: block;
    font-weight: bold;
    font-size: 20px;
    color: ${variables.fontGrey2};
    .currency {
      display: inline-block;
      font-size: 16px;
    }
  `,
  OldPrice: styled.span`
    display: block;
    padding: 0 5px;
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
    color: ${variables.orange};
    position: relative;
    &::before {
      content: '';
      background-color: ${variables.orange};
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
    }
  `,
  SaleButtonGroup: styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
  `,
  SaleButton: styled.button`
    background-color: ${variables.red};
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    color: white;
    margin-right: 15px;
    border: none;
    outline: none;
    ${flexCenter()};
    ${setSize('120px', '40px')};
    ${appearanceNone()};
    &:active {
      box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 0.16);
    }
  `,
  Compare: styled.div`
    ${flexCenter()};
    ${setSize('40px')};
    cursor: pointer;
    &:hover {
      svg path {
        fill: ${variables.red};
      }
    }
    svg {
      ${simpleIcon('30px', '20px')};
    }
  `,
  Stars: styled(RatingStars)`
    margin-right: 20px;
  `,
  ReviewGroup: styled.div`
    display: flex;
    align-items: center;
    margin-top: 23px;
  `,
  Reviews: styled.a`
    display: flex;
    align-items: center;
    text-decoration: underline;
    font-size: 13px;
    svg {
      path {
        fill: ${variables.fontGrey};
      }
    }
  `,
};

export default Styles;
