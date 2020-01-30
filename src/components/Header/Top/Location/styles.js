import styled from 'styled-components';
import ArrowDown from '@icons/ArrowDown';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, simpleIcon } from '@assets/style/tools/mixin';

const Styles = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    height: 44px;
  `,
  Title: styled.span`
    display: flex;
    align-items: center;
    color: ${variables.fontGrey2};
    margin-right: 18px;
  `,
  ListWrap: styled.div`
    display: flex;
    align-items: center;
    color: ${variables.fontGrey2};
    height: 100%;
    position: relative;
  `,
  Current: styled.span`
    display: flex;
    align-items: center;
    color: ${variables.fontGreyHover};
    cursor: pointer;
    padding: 0 15px;
    max-width: max-content;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
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
    width: 100px;
    background-color: white;
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.16);
    padding: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.open ? 'block' : 'none')};
  `,
  City: styled.li`
    padding: 8px 5px;
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
