import React from 'react';
import { InputForms } from './styles';

function Inputs(props) {
  return <InputForms width={props.width} placeholder={props.placeholder} type={props.type} height={props.height} />;
}

export default Inputs;
