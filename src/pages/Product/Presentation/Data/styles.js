import styled from 'styled-components';
import { setWidth, simpleIcon, setHeight, transition } from '@assets/style/tools/mixin';
import { variables } from '@assets/style/tools/variables';
import Icon from '@icons';
import RatingStars from '@modules/RatingStars';

const Styles = {
  Wrap: styled.div`
    ${setWidth('51%')};
  `,
  Rating: {
    Wrap: styled.div`
      flex-basis: 100%;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 13px;
      color: ${variables.fontGrey};
    `,
    Stock: styled.span`
      display: block;
      max-width: max-content;
      margin-right: 26px;
    `,
    Stars: styled(RatingStars)`
      margin-right: 26px;
    `,
    Extra: styled.a`
      display: flex;
      align-items: center;
      max-width: max-content;
      margin-right: 26px;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: ${variables.red};
        svg path {
          fill: ${variables.red};
        }
      }
      svg {
        ${simpleIcon('12px')};
        margin-right: 5px;
        path {
          fill: ${variables.fontGrey};
        }
      }
    `,
  },
  Meta: {
    Wrap: styled.div`
      display: block;
      flex: 1;
      max-width: 360px;
      padding: 32px;
      background-color: #eff0f3;
    `,
    Price: styled.span`
      display: block;
      font-size: 40px;
      font-weight: bold;
      color: #999999;
      margin-bottom: 30px;
      .currency {
        font-size: 20px;
      }
    `,
    StockMessage: styled.span`
      display: block;
      font-size: 18px;
      font-weight: bold;
      color: ${variables.fontGreyHover};
      margin-bottom: 30px;
      border: 2px solid red;
      padding: 16px;
      text-align: center;
      ${transition()};
      cursor: pointer;
      &:hover {
        background-color: ${variables.red};
        color: white;
      }
    `,
    Description: styled.p`
      display: block;
      font-size: 12px;
      line-height: 1.2;
      color: ${variables.fontGrey};
      margin-bottom: 30px;
    `,
    BtnGroup: styled.div`
      display: flex;
      align-items: center;
    `,
    Button: styled.a`
      flex: 0 50%;
      display: flex;
      align-items: center;
      font-size: 13px;
      color: ${variables.fontGrey};
      cursor: pointer;
      &:hover {
        color: ${variables.red};
        text-decoration: underline;
        svg path {
          fill: ${variables.red};
        }
      }
    `,
    ButtonIcon: styled(Icon)`
      display: block;
      ${setWidth('30px')};
      ${setHeight('20px')};
      margin-right: 5px;
    `,
  },
  Similar: {
    Wrap: styled.div`
      display: block;
      flex: 1;
      max-width: 300px;
      padding: 0 45px;
      border: 1px solid ${variables.border};
      font-size: 13px;
      margin-left: 40px;
      max-height: max-content;
      color: ${variables.fontGrey};
    `,
    Title: styled.span`
      display: table;
      font-size: 22px;
      font-weight: bold;
      color: ${variables.fontGreyHover};
      text-align: center;
      margin: 0 auto 20px;
      padding: 0 15px;
      background-color: white;
      transform: translateY(-50%);
    `,
    Img: styled.img`
      display: block;
      max-height: 160px;
      max-width: 160px;
      margin: 0 auto 20px;
    `,
    Stock: styled.span`
      display: block;
      margin-bottom: 10px;
      color: ${(props) => (props.stock ? variables.green : variables.red)};
    `,
    Description: styled.span`
      display: block;
      margin-bottom: 10px;
      white-space: pre-wrap;
    `,
    Price: styled.span`
      display: block;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 16px;
      color: ${variables.fontGrey2};
      .currency {
        display: inline-block;
        font-size: 16px;
      }
    `,
    LinkAnother: styled.a`
      display: table;
      color: ${variables.red};
      text-align: center;
      background-color: white;
      transform: translateY(50%);
      text-decoration: underline;
      cursor: pointer;
      padding: 0 10px;
      margin: 0 auto;
    `,
  },
};

export default Styles;
