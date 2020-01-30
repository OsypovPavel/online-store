import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import Icon from '@icons';
import { flexCenter } from '@assets/style/tools/mixin';
import { setWidth } from '../../../../assets/style/tools/mixin';

const Styles = {
  Wrap: styled.nav`
    display: flex;
    align-items: center;
    height: 54px;
    width: 100%;
  `,
  Item: styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 ${(props) => (props.catalog ? '20px' : '10px')};
    font-size: ${(props) => (props.catalog ? '16px' : '13px')};
    flex: 1;
    color: white;
    transition: 0.2s ease-out;
    ${(props) =>
      props.catalog
        ? `
            justify-content: space-between;
            ${setWidth('234px')};
            background-color: ${variables.red};
            svg path{
              fill: white;
            }
    `
        : `border-right: 1px solid rgba(255, 255, 255, 0.2);
            justify-content: center;
            text-transform: uppercase;
`}
    &:hover {
      background-color: ${variables.red};
      svg {
        path {
          fill: white;
        }
      }
    }
  `,
  Icon: styled(Icon)`
    display: block;
    min-width: 22px;
    max-width: 28px;
    min-height: 22px;
    max-height: 28px;
    margin-right: 10px;
    path {
      fill: ${variables.yellow};
    }
    &:hover {
      svg {
        path {
          fill: white;
        }
      }
    }
  `,
};
export default Styles;
