import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Planets from './pages/Planets';
import Spacecrafts from './pages/Spacecrafts';

import SpaceTravelApi from './services/SpaceTravelApi.js';


import styles from "./App.module.css";



function App() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const api = new SpaceTravelApi();

  useEffect(() => {
    console.log('anybody there?');
    const getPlanets = async () => {
      try {
        const response = await SpaceTravelApi.getPlanets()
        setPlanets(response.data);
        console.log('getPlanets test', planets);
      } catch(error) {
        console.error("Error fetching planets", error)
      }
    }
    getPlanets();
  }, []);

  useEffect(() => {
    const getSpacecrafts = async () => {
      try {
        const response = await SpaceTravelApi.getSpacecrafts()
        setSpacecrafts(response.data);
        console.log('getSpacecraft test', spacecrafts)
      } catch(error) {
        console.error("Error fetching spacecrafts", error)
      }
    }
    getSpacecrafts();
  }, []);



  return (
    <div className={styles.main}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/Planets' element={<Planets planets={planets}/>}/>
          <Route path='/Spacecrafts' element={<Spacecrafts spacecrafts={spacecrafts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
