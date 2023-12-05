// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CalculatorIcon from "@mui/icons-material/Calculate";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportsIcon from "@mui/icons-material/Report";
import OperationsIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";

import { Route, Routes, Link } from "react-router-dom"

import {  Home, Error, SignIn, Calculator } from './pages'

// import { API_URL } from './Constants';


// function App() {

//   const [songs, setSongs] = useState([])

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then(data => setSongs(data.data))
//     }, [])
  
//   return (
//     <div className="App">
//       <ul className="list-group list-group-flush border-top-0">
//           {
//             songs.map(song => (
//               <li key={song.pk} className='list-group d-flex'>
//                 <span>asdf</span>
//               </li>
//             ))
//           }
//       </ul>
//     </div>
//   );
// }

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
            <Menu>
                <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
                    <h2>Enerjeet</h2>
                </MenuItem>
                <MenuItem
                    component={<Link to="/calculator" className="link" />}
                    icon={<CalculatorIcon />}
                > 
                    Calculator 
                </MenuItem>
                <MenuItem
                    component={<Link to="/home" className="link" />}
                    icon={<DashboardIcon />}
                > 
                    Dashboard
                </MenuItem>
                <MenuItem icon={<ReportsIcon />}> Reports </MenuItem>
                <MenuItem icon={<OperationsIcon />}> Operations </MenuItem>
                <MenuItem icon={<SettingsIcon />}> Settings </MenuItem>
                {/* <SubMenu label="Charts">
                    <MenuItem> Timeline Chart </MenuItem>
                    <MenuItem> Bubble Chart </MenuItem>
                </SubMenu> */}
            </Menu>
        </Sidebar>

        <section>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </section>

    </div>
)
}


export default App;
