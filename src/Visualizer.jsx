import React, { useEffect, useState } from "react";
import Element from "./Element";
import { updateStateInSequence, shuffle } from "./helper";

const getInitialState = (amount) => {
  let Amount = amount || 50;

  let array = shuffle([
    ...Array(parseInt(Amount))
      .fill("")
      .map((x, i) => i + 5),
  ]);
  return {
    changing: [],
    state: [...array],
    alreadySorted: [],
  };
};

const Visualizer = ({ algID }) => {
  const [speed, setSpeed] = useState(100);
  const [started, setStarted] = useState(false);
  const [state, setState] = useState(getInitialState());
  const { state: order, changing, alreadySorted } = state;

  const startHandler = () => {
    if (started) return;
    setStarted(true);
    const onFinish = updateStateInSequence(
      algID,
      (updt) => setState(updt),
      state.state,
      speed
    );
    onFinish(() => setStarted(false));
  };

  return (
    <div>
      {order.map((item, i) => (
        <Element
          isActive={changing.indexOf(i) !== -1}
          item={item}
          index={i}
          key={i}
          isAlreadySelected={alreadySorted.indexOf(i) !== -1}
        />
      ))}
      <button onClick={startHandler}>start</button>
      {!started && (
        <input
          type="number"
          placeholder="Enter speed in ms"
          onChange={(e) => setSpeed(e.target.value)}
        />
      )}
      {!started && (
        <input
          type="number"
          placeholder="Enter Amount of elements to sort"
          onChange={(e) => setState(getInitialState(e.target.value))}
        />
      )}
    </div>
  );
};

export default Visualizer;
