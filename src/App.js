import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleClickInc = () => {
    setCount(count + input);
  }

  const handleClickDec = () => {
    setCount(count - input);
  }

  const handleClickReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div className='sideBySide'>
        <input id='inputNum' onChange={(e)=>{setInput(Number(e.target.value))}} placeholder="Enter a Number" max="10" min="1" type="number" />
        </div>
        <div className='sideBySide'>
        <button disabled={count + input > 10} onClick={handleClickInc}className='buttonInc'>Increment</button>
        <button disabled={count - input < 0}  onClick={handleClickDec} className='buttonDec'>Decrement</button>
        </div>
        <button onClick={handleClickReset} className='buttonDec'>Reset</button>
      </header>
    </div>
  );
}

export default App;