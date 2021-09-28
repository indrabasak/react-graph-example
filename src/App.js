//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import ExampleReactVisForce from './graph/react-vis-force-graph'
import ExampleD3 from './graph/d3-graph';
import data from "./data/data.json";

export type Data = {
  nodes: any[];
  relationships: any[];
};

function App() {
  return (
    <div className="App">
      <ExampleReactVisForce data={data} width={500} height={340} />
      <ExampleD3 data={data} width={500} height={340} />
      <pre style={{ maxHeight: "300px" }}>
        {JSON.stringify(data, undefined, 2)}
      </pre>
      ;
    </div>
  );
}

export default App;
