import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';

const Styles = {
  Wrap: styled.section`
    width: 100%;
    height: 44px;
    background-color: #eff0f3;
    color: ${variables.fontGrey};
    font-size: 13px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
export default Styles;
