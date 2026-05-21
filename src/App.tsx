import { useReducer } from "react";
import designReducer from "./reducer/designReducer";

function App() {
  const [state, dispatch] = useReducer(designReducer, {
    isDark: true,
    fontSize: 12,
  });

  return (
    <div
      style={{ fontSize: `${state.fontSize}px` }}
      className={`${state.isDark ? "bg-black text-white" : "bg-white text-black"} flex flex-col gap-2`}
    >
      <h2>Design Pallete</h2>
      <button onClick={() => dispatch({ command: "TOGGLE" })}>
        Toggle Dark Mode
      </button>
      <button onClick={() => dispatch({ command: "INCREMENT" })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ command: "DECREMENT" })}>
        Decrease Font Size
      </button>
    </div>
  );
}

export default App;
