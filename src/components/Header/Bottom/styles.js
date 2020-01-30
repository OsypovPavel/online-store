import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';

const Styles = {
  Wrap: styled.section`
    width: 100%;
    background-color: #333333;
    color: ${variables.fontGrey};
    font-size: 13px;
    height: 54px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
export default Styles;
