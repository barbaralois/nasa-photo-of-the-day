import React, { useState, useEffect } from 'react';
import Featured from './Featured';
import axios from 'axios';
import { BASE_URL, API_KEY, DATE_LIST } from './constants';
import Gallery from './Gallery';
import './App.css';

function App() {
  //there's a better way to do this but I don't know how, this prevents the "undefined" map issue
  let emptyStrings = {
    date: '',
    explanation: '',
    hdurl: '',
    title: '',
  };

  //I push all the axios data into the apodList, the goal is to change the index in currentAPOD state and have everything in Featured update
  const apodList = [];
  const [currentAPOD, setCurrentAPOD] = useState(emptyStrings);

  const setAPOD = (index) => {
    setCurrentAPOD(apodList[index]);
  };

  const addAPOD = (data) => {
    apodList.push(data);
  };

  //My attempts to make the 5 calls to the API to get data, first one is set as currentAPOD and displayed in the Featured component

  //Other issues include that these don't consistently load in order so the dates are scrambled. All the data IS making it to apodList though.
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        addAPOD(res.data);
        setAPOD(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&${DATE_LIST[0]}`)
      .then((res) => {
        addAPOD(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&${DATE_LIST[1]}`)
      .then((res) => {
        addAPOD(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&${DATE_LIST[2]}`)
      .then((res) => {
        addAPOD(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&${DATE_LIST[3]}`)
      .then((res) => {
        addAPOD(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //First, this logs a full array with the 5 sets of data, and then later logs an empty array so not sure what's going on here
  console.log(apodList);

  return (
    <div className="App">
      <div className="title-block">
        <h1>NASA's Astronomy Picture of the Day</h1>
      </div>
      {/* 
      Featured receives the current APOD (AKA the State) which is currently hardwired in to be index 0 in apodList. I haven't made the onClick handlers yet.
      
      Gallery receives the apodList of all 5 recent apod calls as props so it can then pass the photo URL and date on to Photo
      */}
      <Featured currentAPOD={currentAPOD} />
      <Gallery apodData={apodList} />
    </div>
  );
}

export default App;
