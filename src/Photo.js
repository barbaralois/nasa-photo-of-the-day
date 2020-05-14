import React from 'react';
import './Photo.css';

export default function Photo(props) {
  return <img src={props.imgSrc} alt={props.date} />;
}
