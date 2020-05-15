import React, { useState, useEffect } from 'react';
import Featured from './Featured';
import axios from 'axios';
import { BASE_URL, API_KEY, DATE_LIST } from './constants';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [apodList, setApodList] = useState([]);
  const [currentAPOD, setCurrentAPOD] = useState('');

  const setAPOD = (index) => {
    setCurrentAPOD(apodList[index]);
  };

  useEffect(() => {
    const arrayOfPromises = DATE_LIST.map((date) => {
      return axios.get(`${BASE_URL}?api_key=${API_KEY}&${date}`);
    });
    Promise.all(arrayOfPromises).then((arrayOfResolvedData) => {
      const allAPODS = arrayOfResolvedData.map((res) => {
        return res.data;
      });
      setApodList(allAPODS);
      setCurrentAPOD(allAPODS[0]);
    });
  }, []);

  return (
    <div className="App">
      <div className="title-block">
        <h1>NASA's Astronomy Picture of the Day</h1>
      </div>
      <Gallery apodData={apodList} setAPOD={setAPOD} />
      <Featured currentAPOD={currentAPOD} />
    </div>
  );
}

export default App;
