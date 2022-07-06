import { useState } from "react";
import './Styles/App.css'
import Selector from "./Components/Selector";
import Team from "./Components/Team";

function App() {
  // Array of pokemons selected
  const [team, setTeam] = useState([])

  return (
    <div className="App">
      {console.log(team)}
      <Team team={team}/>
      <Selector setTeam={setTeam}/>
    </div>
  );
}

export default App;
