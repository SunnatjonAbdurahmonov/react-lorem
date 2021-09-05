import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  return (
  <section className="section-ceter">
    <h3>TRIED OF BORING LOREM IPSUM?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <input type="number" name="amount" id="amount" value={count} />
    </form>
  </section>
    )
}

export default App;
