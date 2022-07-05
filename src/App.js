import { useState } from "react";
import './Styles/App.css'
import Selector from "./Components/Selector";
import Team from "./Components/Team";

function App() {
  // Array of pokemons selected
  const [team, setTeam] = useState([])

  return (
    <div className="App">
      <Selector setTeam={setTeam}/>
      <Team team={team}/>
    </div>
  );
}

export default App;
