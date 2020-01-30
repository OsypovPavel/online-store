import styled from 'styled-components';
import { variables } from '@assets/style/tools/variables';
import { flexCenter, setSize } from '@assets/style/tools/mixin';
import Icon from '@icons';

const Styles = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    margin-right: -10px;
  `,
  Item: styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
    flex: 1;
    max-width: max-content;
    color: ${variables.fontGrey2};
    &:hover {
      color: ${variables.red};
    }
  `,
  IconWrap: styled.div`
    ${flexCenter()};
    position: relative;
    margin-bottom: 12px;
  `,
  Icon: styled(Icon)`
    display: block;
    min-width: 26px;
    max-width: 32px;
    min-height: 26px;
    max-height: 32px;
  `,
  Count: styled.span`
    ${flexCenter()};
    ${setSize('16px')};
    font-size: 10px;
    color: white;
    background-color: ${variables.red};
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -30%);
  `,
  Name: styled.span`
    display: block;
    text-align: center;
    width: 100%;
    font-size: 12px;
  `,
};
export default Styles;
