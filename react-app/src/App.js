import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setSecondaryEmotion] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondaryEmotion} right now`)
  }, [secondaryEmotion]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <h2>Current Secondary emotion is {secondaryEmotion}.</h2>
      <button onClick={() => setSecondaryEmotion("grateful")}>Grateful</button>
      <button onClick={() => setSecondaryEmotion("refreshed")}>Refreshed</button>
    </div>
  );
}
 
export default App;