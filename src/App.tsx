import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    const [count, setCount] = useState<number>(0)

    const incrementation = (count:number) => {
        if (count === 5) {
            setCount(count)
        }else {
            setCount(count+1)
        }
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div className="App">
        <Counter
            count = {count}
            incrementation={incrementation}
            reset={reset}
        />
    </div>
  );
}

export default App;
