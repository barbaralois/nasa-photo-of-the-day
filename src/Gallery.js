import React from 'react';
import Photo from './Photo';
import './Gallery.css';

export default function Gallery(props) {
  return (
    <div className="photo-list">
      {props.apodData.map((photo, index) => {
        return (
          <Photo
            imgSrc={photo.hdurl}
            date={photo.date}
            key={index}
            index={index}
            setAPOD={props.setAPOD}
          />
        );
      })}
    </div>
  );
}
