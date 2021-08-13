import React, { useState } from "react";
import './App.css';
import CovidData from "./CovidData";

function App() {
  let [currDate, setCurrDate] = useState(new Date().toLocaleDateString());
  let [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  const update = () => {
    setCurrDate(new Date().toLocaleDateString());
    setCurrTime(new Date().toLocaleTimeString());
  }

  setInterval(update, 1000);


  return (
    <>
      <div className="App">
        <div className="date-time">
          <p>{currDate}</p>
          <p>{currTime}</p>
        </div>
        <div className="live-div">
          <h3 className="live">🔴 Live</h3>
        </div>
        <h2>COVID-19 TRACKER</h2>
        <CovidData />
      </div>
    </>
  );
}

export default App;
