import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AlphaTeam } from "./Data";
import TeamList from "./Components/TeamList";
import Create from "./Components/Create";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [team] = useState(AlphaTeam);

  return (
      <div>
        <h1>React Team</h1>
        <div>
          <Create/>
          <TeamList data={team}/>
        </div>
      </div>
  );
};

export default App;
