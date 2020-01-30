import styled from 'styled-components';
import { setSize, setWidth } from '@assets/style/tools/mixin';
import { variables } from '@assets/style/tools/variables';
import { flexCenter } from '../../../../assets/style/tools/mixin';

const Styles = {
  Wrap: styled.div`
    ${setWidth('50%')};
    margin-right: 15px;
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
    ${setSize('100%')};
    border: 1px solid ${(props) => (props.active ? variables.yellow : '#e9eaeb')};
    cursor: pointer;
    &:hover {
      border-color: ${variables.yellow};
    }
  `,
  Img: styled.img`
    display: block;
    ${setSize('100%')};
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
  `,
};
export { Styles, Grid, Picture };
