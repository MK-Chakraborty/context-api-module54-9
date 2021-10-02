import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './GrandFather/GrandFather';

export const RingContext = createContext()

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = 'Diamond Ring';
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={()=> {setHouse(house+1)}}>Buy House</button>
        <GrandFather house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
