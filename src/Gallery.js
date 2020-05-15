import React from 'react';
import Photo from './Photo';
import { GalleryContainer } from './styled-components';

export default function Gallery(props) {
  return (
    <GalleryContainer className="photo-list">
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
    </GalleryContainer>
  );
}
