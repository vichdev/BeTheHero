import styled from 'styled-components';

export const InputForms = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  max-width: 400px;
  height: ${(props) => (props.height ? props.height : '3em')};
  margin-bottom: 0.5em;
  padding: 1.2em;
  text-decoration: none;
  border: 0;
  border-radius: 6px;
  box-shadow: 1px 1px 5px;
`;
