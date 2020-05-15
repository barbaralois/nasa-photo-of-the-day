import React from 'react';
import { LittlePic } from './styled-components';

export default function Photo(props) {
  const { setAPOD } = props;

  const clickHandler = (event) => {
    setAPOD(props.index);
  };

  return (
    <LittlePic src={props.imgSrc} alt={props.date} onClick={clickHandler} />
  );
}
