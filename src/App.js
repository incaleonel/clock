import React from 'react';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>25+5 Clock</h1>
      <section>
        <LengthTime/>
        <LengthTime/>
      </section>
        <Display/>
    </div>
  );
}

export default App;
