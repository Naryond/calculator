import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  document.title = 'Calculator';

  const panel = Array(19).fill(null);
  const [button, setButton] = useState(panel);

  const handleButtons = (i) => {
    setButton({ ...button, i });
  };

  const renderSquare = (i) => {
    return <Square value={handleButtons[i]} />;
  };

  return (
    <div>
      <div className="app">Calculator</div>
      <div className="box">
        <div className="result"></div>
        <div className="board-row">
          <div className="square">C{renderSquare()}</div>
          <div className="square">+-{renderSquare()}</div>
          <div className="square">%{renderSquare()}</div>
          <div className="square">/{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">7</div>
          <div className="square">8{renderSquare()}</div>
          <div className="square">9{renderSquare()}</div>
          <div className="square">X{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">4{renderSquare()}</div>
          <div className="square">5{renderSquare()}</div>
          <div className="square">6{renderSquare()}</div>
          <div className="square">-{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">1{renderSquare()}</div>
          <div className="square">2{renderSquare()}</div>
          <div className="square">3{renderSquare()}</div>
          <div className="square">+{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">0{renderSquare()}</div>
          <div className="square">.{renderSquare()}</div>
          <div className="squareL">={renderSquare()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
