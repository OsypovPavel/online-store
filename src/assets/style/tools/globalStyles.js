import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

const GlobalStyles = createGlobalStyle`
body,html{
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, strong, ol, ul, li, fieldset, form, label, article, aside, figure, figcaption, footer, header, menu, nav, section {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

input{
  border: none;
  outline: none;
}
p, a, span, li, h1, h2, h3, h4, h5, h6 {
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
a {
  text-decoration: none;
  outline: none!important;
  color: inherit;
}
article, aside, footer, header, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }
  @-ms-viewport {
  width: device-width;
}
html {
  -ms-overflow-style: scrollbar;
}
body {
  font-family: ${variables.font};
  font-size: 16px;
  line-height: 1;
  min-width: 340px;
  min-height: 100vh;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  *{
    -webkit-tap-highlight-color: transparent;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    -ms-box-sizing: inherit;
    box-sizing: inherit;
    &::before,
    &::after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      -ms-box-sizing: inherit;
      box-sizing: inherit;
    }
  }
}
#root{
  display: block;
  min-height: 99vh;
}
::-webkit-input-placeholder, ::-moz-placeholder, :-ms-input-placeholder, :-moz-placeholder {
  color: #a1a0a0;
  font-family: ${variables.font};
  font-weight: normal;
}
.container {
  width: 100%;
  max-width: 1320px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.d-flex{
  display: flex;
  flex-wrap: wrap;
}
.al{
  &-start{
    align-items: flex-start;
  }
  &-center{
    align-items: center;
  }
}
`;

export default GlobalStyles;
