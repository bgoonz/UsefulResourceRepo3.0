import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, pause) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (pause !== true) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [pause]);
}

const Test = () => {
  const [pause, setPause] = useState(false);
  const [count, setCount] = useState(0);
  const maxCount = 10;
  useInterval(() => {
    setCount(count === maxCount ? 0 : count + 1);
  }, pause);
  return (
    <div
      style={{ width: "500px", height: "500px", background: "yellow" }}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <h1>{count}</h1>
    </div>
  );
};

export default Test;
