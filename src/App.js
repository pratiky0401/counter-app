import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClickInc = () => {
    let x = count;
    setCount(++x)
  }

  const handleClickDec = () => {
    let x = count;
    setCount(--x);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div className='sideBySide'>
        <button onClick={handleClickInc}className='buttonInc'>Increment</button>
        <button onClick={handleClickDec} className='buttonDec'>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;