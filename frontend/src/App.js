// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import { API_URL } from './Constants';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios
      .get(API_URL)
      .then(data => setSongs(data.data))
    }, [])
  
  return (
    <div className="App">
      <ul className="list-group list-group-flush border-top-0">
          {
            songs.map(song => (
              <li key={song.pk} className='list-group d-flex'>
                <span>asdf</span>
              </li>
            ))
          }
      </ul>
    </div>
  );
}

export default App;
