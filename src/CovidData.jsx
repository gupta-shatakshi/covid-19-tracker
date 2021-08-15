import React, { useEffect, useState } from "react";
// import axios from "axios";


const CovidData = () => {

  const [data, setData] = useState([]);    
  
  const getData = async () => {
    try{
        // let res = await fetch("https://api.covid19india.org/data.json");
        let res = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        
        // let res = await axios.get("https://api.covid19india.org/data.json");
        //let res = await axios.get("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        //let res = await axios.get("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json");
        res = await res.json();
        console.log(res[93]);
        setData(res[93]);
        //console.log(res.statewise);
        //console.log(res.statewise[0].active);
    } catch (err){
        console.log(err);
    }
    
    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    
    <div className="container">
       
        <div className="main-card" style={{backgroundColor: "rgb(216, 174, 34)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`OUR `}</span>COUNTRY</p>
                    <p className="data">INDIA</p>
                </div>
            </li>
        </ul>
        </div>
        <div className="main-card" style={{backgroundColor: "rgb(45, 48, 192)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`TOTAL `}</span>TESTS</p>
                    <p className="data">{data.tests}</p>
                </div>
            </li>
        </ul>
        </div>
        <div className="main-card" style={{backgroundColor: "rgb(56, 199, 204)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`TOTAL `}</span>CASES</p>
                    <p className="data">{data.cases}</p>
                </div>
            </li>
        </ul>
        </div>
        <div className="main-card" style={{backgroundColor: "rgb(193, 80, 228)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`TOTAL `}</span>ACTIVE</p>
                    <p className="data">{data.active}</p>
                </div>
            </li>
        </ul>
        </div>
        <div className="main-card" style={{backgroundColor: "rgb(57, 168, 54)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`TOTAL `}</span>RECOVERED</p>
                    <p className="data">{data.recovered}</p>
                </div>
            </li>
        </ul>
        </div>
        <div className="main-card" style={{backgroundColor: "rgb(231, 94, 53)"}}>
        <ul>
            <li className="list">
                <div className="card">
                    <p className="heading"><span>{`TOTAL `}</span>DEATHS</p>
                    <p className="data">{data.deaths}</p>
                </div>
            </li>
        </ul>
        </div>
        
        
    </div>
    </>
  );
}

export default CovidData;
