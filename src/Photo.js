import React from 'react';
import './Photo.css';

export default function Photo(props) {
  const { setAPOD } = props;

  const clickHandler = (event) => {
    setAPOD(props.index);
  };

  return <img src={props.imgSrc} alt={props.date} onClick={clickHandler} />;
}
