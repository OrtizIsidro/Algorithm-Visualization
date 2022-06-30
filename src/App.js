import { useState } from "react";
import Visualizer from "./Visualizer";
function App() {
  const [algorithmID, setAlgorithmID] = useState(undefined);
  if (algorithmID !== undefined) return <Visualizer algID={algorithmID} />;
  return (
    <div className="App">
      <div>hola mundo</div>
      <select onChange={(e) => setAlgorithmID(e.target.value)}>
        <option value={undefined} defaultValue hidden={true}>
          Select an algorithm
        </option>
        <option value="0">Selection Sort algorithm</option>
        <option value="1">Bubble Sort algorithm</option>
        <option value="2">Merge Sort algorithm</option>
      </select>
    </div>
  );
}

export default App;
