import styled from 'styled-components';
import Lock from '@icons/Lock';
import { variables } from '@assets/style/tools/variables';
import { simpleIcon } from '@assets/style/tools/mixin';

const icon = `
    ${simpleIcon('16px')};
    margin-right: 8px;
  `;
const Styles = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    height: 44px;
  `,
  Item: styled.a`
    display: flex;
    align-items: center;
    max-width: max-content;
    color: inherit;
    &:first-child {
      margin-right: 36px;
    }
    &:hover,
    &.active {
      color: ${variables.red};
      .icon path {
        fill: ${variables.red};
      }
    }
  `,
  ItemIconLock: styled(Lock)`
    ${icon};
  `,
  ItemName: styled.span`
    display: block;
  `,
};
export default Styles;
