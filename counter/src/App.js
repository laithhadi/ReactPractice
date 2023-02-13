import './App.css';
import TallyCounter from "./TallyCounter.js";
import { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [counters, changeCounters] = useState([]);

  const generateCounters = () => {
    return counters.map((counter) => {
      return (
        <TallyCounter
          id={counter.id}
          count={counter.count}
          key={counter.id}
          increaseCounter={() => increaseCounter(counter.id)}
          decreaseCounter={() => decreaseCounter(counter.id)}
          removeCounter={() => removeCounter(counter.id)}
          resetCounter={() => resetCounter(counter.id)}
        />
      );
    });
  };

  //CRUD operations
  ////////////////////////////////////////////////////////////////////////////////////
  const addCounter = () => {
    changeCounters(prevCounters => [...prevCounters, { id: uuid(), count: 0 }]);
  };

  const removeCounter = id => {
    changeCounters(prevCounters => prevCounters.filter(counter => counter.id !== id));
  };
  //CRUD End
  
  //Logic
  const increaseCounter = id => {
    changeCounters(prevCounters =>
      prevCounters.map(counter => {
        if (counter.id === id) {
          return { ...counter, count: counter.count + 1 };
        }
        return counter;
      })
    );
  };

  const decreaseCounter = id => {
    changeCounters(prevCounters =>
      prevCounters.map(counter => {
        if (counter.id === id) {
          return { ...counter, count: counter.count - 1 };
        }
        return counter;
      })
    );
  };

  const resetCounter = id => {
    changeCounters(prevCounters =>
      prevCounters.map(counter => {
        if (counter.id === id) {
          return { ...counter, count: 0 };
        }
        return counter;
      })
    );
  };

  const resetAllCounters = () => {
    changeCounters(prevCounters => prevCounters.map(counter => ({ ...counter, count: 0 })));
  };
  //Logic End

  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={resetAllCounters}>Reset all counters</button>
      {
        generateCounters()
      }
    </div>
  );
};

export default App;