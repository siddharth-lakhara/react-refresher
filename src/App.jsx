import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { DECREMENT, INCREMENT } from './state/actions';
import { initialState, rootReducer } from './state/rootReducer';

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [some, setSome] = useState(true);
  const onIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  const onDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  useEffect(() => {
    console.log('useEffect');
  }, [some])

  return (
    <div className="App">
      <div className="counter">Count = {state.count}</div>
      <div>
        <button className="btn" onClick={onIncrement}>
          {' '}
          +{' '}
        </button>
        <button className="btn" onClick={onDecrement}>
          {' '}
          -{' '}
        </button>
      </div>
      <div className="counter">{some}</div>
      <div className="counter">
        <button className="btn" onClick={() => setSome(!some)}>Toggle some</button>
      </div>
    </div>
  );
}

export default App;
