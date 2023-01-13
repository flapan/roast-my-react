import './App.css';
import { useState } from 'react';

function useInput(inititalValue) {
  const[value, setValue] = useState(inititalValue);
  return [
    {
      value, 
      onChange: e => setValue(e.target.value)
    },
    () => setValue(inititalValue)
  ]
}

function App() {
  const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
  <form onSubmit={submit}>
    <input 
      {...titleProps}
      type="text" 
      placeholder="color title..." 
    />
    <input 
      {...colorProps}
      type="color" 
    />
    <button>ADD</button>
  </form>
    );
}
 
export default App;