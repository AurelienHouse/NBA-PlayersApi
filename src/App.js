import './App.css';
import { useEffect, useState } from 'react';
import Accueil from './components/Accueil';
import NavBar from './components/NavBar';
import Logo from './components/Logo';

function App() {

const [playersList, setPlayersList] = useState([]);

const retrieveData = async() =>
{
  const response = await fetch("https://www.balldontlie.io/api/v1/players")
  const playersList = await response.json();
  console.log(playersList)
}
useEffect(()=>{
  retrieveData();
},[])



return (
  <div className="App">
    <header>
      
      <NavBar />
    </header>
      
    <Accueil />
  </div>
);

}

export default App;
