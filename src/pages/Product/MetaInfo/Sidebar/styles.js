import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, setSize, simpleIcon } from '@assets/style/tools/mixin';

const Styles = {
  Container: styled.aside`
    display: block;
    flex: 0 320px;
  `,
  Card: {
    Container: styled.div`
      display: block;
      font-size: 13px;
      padding: 15px 45px 20px;
      color: ${variables.fontGrey};
      position: relative;
      border: 1px solid ${variables.border};
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
      margin-bottom: 15px;
      font-size: 12px;
    `,
    Stock: styled.span`
      display: block;
      flex: 1;
      max-width: max-content;
      font-size: 13px;
      text-align: ${(props) => props.align || 'left'};
      color: ${(props) => (props.stock ? variables.green : variables.fontGreyHover)};
    `,
    Code: styled.span`
      display: block;
      flex: 1;
    `,
    Title: styled.span`
      display: block;
      white-space: pre-wrap;
      margin-top: 10px;
      font-size: 15px;
    `,
    PriceGroup: styled.div`
      display: flex;
      align-items: flex-end;
      margin-top: 15px;
    `,
    Price: styled.span`
      display: block;
      font-weight: bold;
      font-size: 30px;
      color: ${variables.fontGrey};
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
    SaleButton: styled.span`
      border: 2px solid ${variables.red};
      cursor: pointer;
      font-size: 14px;
      color: ${variables.fontGreyHover};
      font-weight: bold;
      text-align: center;
      margin-right: 15px;
      ${flexCenter()};
      ${setSize('156px', '38px')};
      &:active {
        box-shadow: inset 3px 3px 3px 0 rgba(0, 0, 0, 0.16);
      }
      &:hover {
        background-color: ${variables.red};
        color: white;
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
    ShowAll: styled.div`
      display: table;
      margin-top: 20px;
      text-align: center;
      font-size: 13px;
      border-bottom: 1px dashed ${variables.fontGrey};
      cursor: pointer;
      &:hover {
        color: ${variables.red};
        border-color: ${variables.red};
      }
    `,
  },
  Select: {
    Container: styled.div`
      display: block;
      width: 100%;
      background-color: rgba(87, 174, 133, 0.2);
      padding: 30px;
      margin-top: 30px;
    `,
    Title: styled.span`
      display: block;
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      color: ${variables.fontGreyHover};
      margin-bottom: 15px;
      .check {
        display: inline-block;
        font-size: 18px;
        color: #57ae85;
        font-weight: bold;
        margin-right: 5px;
        transform: translateY(2px);
      }
    `,
  },
  Dropdown: {
    Wrap: styled.div`
      ${setSize('260px', '54px')};
      background-color: white;
      position: relative;
    `,
    Current: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      font-size: 14px;
      height: 100%;
      color: ${variables.fontGrey};
      cursor: pointer;
      svg {
        ${simpleIcon('12px')};
        path {
          fill: ${variables.fontGrey};
        }
      }
    `,
    List: styled.ul`
      display: ${(props) => (props.open ? 'block' : 'none')};
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      max-height: 160px;
      overflow: auto;
      padding: 10px 0;
      background-color: white;
      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
      border-top: 1px solid ${variables.border};
    `,
    Item: styled.li`
      display: block;
      padding: 12px 15px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid ${variables.border};
      cursor: pointer;
      &:hover {
        background-color: #fcfcfc;
      }
    `,
  },
};
export default Styles;
