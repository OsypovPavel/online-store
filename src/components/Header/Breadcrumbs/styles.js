import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import ArrowRight from '@icons/ArrowRight';
import { simpleIcon } from '@assets/style/tools/mixin';

const Styles = {
  Wrap: styled.section`
    width: 100%;
    color: ${variables.fontGrey};
    font-size: 13px;
  `,
  List: styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px auto;
  `,
  Item: styled.a`
    display: flex;
    align-items: center;
    &:hover:not(:last-child) {
      color: ${variables.red};
      text-decoration: underline;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  `,
  Arrow: styled(ArrowRight)`
    ${simpleIcon('6px')};
    margin-left: 10px;
  `,
};
export default Styles;
