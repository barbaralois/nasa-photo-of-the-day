import React from 'react';
import './Featured.css';
import { Container } from './styled-components';

export default function Featured(props) {
  return (
    <div className="featured">
      <Container className="APOD-img">
        <img src={props.currentAPOD.hdurl} alt={props.currentAPOD.date} />
      </Container>
      <Container className="APOD-info" column>
        <div className="APOD-titles">
          <h2>{props.currentAPOD.title}</h2>
          <h3>{props.currentAPOD.date}</h3>
        </div>
        <p>{props.currentAPOD.explanation}</p>
      </Container>
    </div>
  );
}
