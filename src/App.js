import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)
  console.log("state: ", cash);
  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 1 })
  }

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 1  })
  }

  const getFCash = () =>{
    dispatch({ type: 'ADD_CASH', payload: 5 })
  }
  return (
    <div className="App">
      <h1>state: {cash}</h1>
      <button onClick={() => addCash()} style={{ border: "1px solid", padding: '1rem' }}>ADD_CASH</button>
      <button onClick={() => getCash()} style={{ border: "1px solid", padding: '1rem' }}>GET_CASH</button>
      <button onClick={() => getFCash()} style={{ border: "1px solid", padding: '1rem' }}>ADD_CASH 5</button>

    </div>
  );
}

export default App;
