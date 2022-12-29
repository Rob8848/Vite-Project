import { useState } from "react";

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
