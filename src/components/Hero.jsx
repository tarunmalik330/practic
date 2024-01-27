import React, { useReducer } from "react";
import { Container } from "react-bootstrap";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Hero = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Container>
        <p>Count: {state.count}</p>
        <button
          className=" bg-danger py-3 px-4 border-transparent rounded-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className=" bg-danger py-3 px-4 border-transparent rounded-3"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className=" bg-danger py-3 px-4 border-transparent rounded-3"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </Container>
    </div>
  );
};

export default Hero;
