import React from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  document.title = 'Calculator';

  const renderSquare = () => {
    return <Square />;
  };

  return (
    <div>
      <div className="app">Calculator</div>
      <div className="box">
        <div className="result"></div>
        <div className="board-row">
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
        </div>
        <div className="board-row">
          <div className="square">{renderSquare()}</div>
          <div className="square">{renderSquare()}</div>
          <div className="squareL">{renderSquare()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
