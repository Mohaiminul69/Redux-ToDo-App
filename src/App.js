import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { increment, decrement } from "./Actions";
import TodoSection from "./Components/TodoSection/TodoSection";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Container className="mt-5">
        <h1>Counters {counter}</h1>
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
      </Container>

      <TodoSection />
    </div>
  );
}

export default App;
