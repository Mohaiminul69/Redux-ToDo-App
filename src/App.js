import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { increment, decrement } from "./Actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <Button onClick={() => dispatch(increment())} variant="dark">
        + Increment
      </Button>
      <Button
        onClick={() => dispatch(decrement())}
        className="ms-3"
        variant="dark"
      >
        - Decrement
      </Button>
    </div>
  );
}

export default App;
