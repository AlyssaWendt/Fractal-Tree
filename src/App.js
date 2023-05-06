import React from 'react';
import Canvas from './components/Canvas';
import Tree from './components/Tree';
import './App.css';

function App() {
  return (
   <div className="App">
    <h1>Fractal Tree</h1>
    <Canvas width={800} height={600} draw={Tree} />
   </div>
  );
}

export default App;
