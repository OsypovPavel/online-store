import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { setWidth } from '@assets/style/tools/mixin';

const Styles = {
  Wrap: styled.section`
    width: 100%;
    background-color: white;
    color: ${variables.fontGrey};
    font-size: 13px;
    margin-right: 30px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.img`
    display: block;
    ${setWidth('234px')};
    margin-right: 10px;
  `,
};
export default Styles;
