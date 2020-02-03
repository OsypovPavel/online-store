import styled from 'styled-components';
import { setSize, setWidth, flexCenter } from '@assets/style/tools/mixin';
import { variables } from '@assets/style/tools/variables';

const Styles = {
  Wrap: styled.div`
    ${setWidth('49%')};
    display: flex;
    flex-wrap: wrap;
  `,
};
const Grid = {
  List: styled.div`
    display: grid;
    grid-template-columns: 66px 66px;
    grid-auto-rows: 66px;
    grid-gap: 10px;
    ${setWidth('142px')};
  `,
  Item: styled.div`
    border: 1px solid ${(props) => (props.active ? variables.yellow : '#e9eaeb')};
    cursor: pointer;
    ${setSize('100%')};
    ${flexCenter()};
    &:hover {
      border-color: ${variables.yellow};
    }
  `,
  Img: styled.img`
    display: block;
    max-height: 90%;
    max-width: 90%;
  `,
};
const Picture = {
  Wrap: styled.div`
    ${flexCenter()};
    flex: 1;
  `,
  Img: styled.img`
    display: block;
    max-width: 80%;
    max-height: 400px;
  `,
};
export { Styles, Grid, Picture };
