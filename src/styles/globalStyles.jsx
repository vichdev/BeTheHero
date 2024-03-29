import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: papayawhip;
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}
`;
