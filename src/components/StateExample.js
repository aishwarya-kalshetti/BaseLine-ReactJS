import React, { useState } from "react";

function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="form-container">
      <h2>State Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default StateExample;
