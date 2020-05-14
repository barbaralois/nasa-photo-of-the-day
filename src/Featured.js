import React from 'react';
import './Featured.css';

export default function Featured(props) {
  return (
    <div className="featured">
      <div className="APOD-img">
        <img src={props.currentAPOD.hdurl} alt={props.currentAPOD.date} />
      </div>
      <div className="APOD-info">
        <div className="APOD-titles">
          <h2>{props.currentAPOD.title}</h2>
          <h3>{props.currentAPOD.date}</h3>
        </div>
        <p>{props.currentAPOD.explanation}</p>
      </div>
    </div>
  );
}
