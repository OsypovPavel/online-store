import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, simpleIcon } from '@assets/style/tools/mixin';
import ArrowDown from '@icons/ArrowDown';

const Styles = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    color: ${variables.fontGrey2};
    position: relative;
    margin-right: 16px;
  `,
  Current: styled.span`
    display: flex;
    align-items: center;
    min-width: 160px;
    color: ${variables.fontGreyHover};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  `,
  Arrow: styled(ArrowDown)`
    ${simpleIcon('10px')};
    margin-left: 10px;
  `,
  List: styled.ul`
    position: absolute;
    z-index: 2;
    right: 0;
    top: 100%;
    width: max-content;
    background-color: white;
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.16);
    padding: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.open ? 'block' : 'none')};
  `,
  Phone: styled.li`
    padding: 8px 15px;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease-out;
    ${flexCenter()};
    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &:hover {
      background-color: ${variables.red};
      color: white;
    }
  `,
};
export default Styles;
