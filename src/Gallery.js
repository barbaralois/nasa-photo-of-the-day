import React from 'react';
import Photo from './Photo';
import './Gallery.css';

export default function Gallery(props) {
  console.log(props);
  // Props make it to here but then I can't figure out how to reference in the return statement below, used temporary dummy data just to get the Photo props wired up properly. Will sub in the gallery props when I can get them working

  let dummyData = [
    {
      img: 'https://apod.nasa.gov/apod/image/2005/SWAN1_perrot.jpg',
      date: '05-14-2020',
    },
    {
      img: 'https://apod.nasa.gov/apod/image/2005/Lyrids_Horalek_1221.jpg',
      date: '05-12-2020',
    },
    {
      img: 'https://apod.nasa.gov/apod/image/2005/betelgeuse_block_2662.jpg',
      date: '05-11-2020',
    },
    {
      img: 'https://apod.nasa.gov/apod/image/2005/JupiterIR_Gemini_1400.jpg',
      date: '05-13-2020',
    },
    {
      img:
        'https://apod.nasa.gov/apod/image/2005/PorpoiseGalaxy_HubbleFraile_1300.jpg',
      date: '05-10-2020',
    },
  ];

  if (!props) return <h3>Loading</h3>;

  return (
    <div className="photo-list">
      {dummyData.map((photo, index) => {
        return <Photo imgSrc={photo.img} date={photo.date} key={index} />;
      })}
    </div>
  );
}
