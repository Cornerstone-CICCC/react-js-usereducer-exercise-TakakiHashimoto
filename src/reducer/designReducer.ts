type State = { isDark: boolean; fontSize: number };

type Action = { command: "TOGGLE" | "INCREMENT" | "DECREMENT" };

function designReducer(state: State, action: Action): State {
  switch (action.command) {
    case "TOGGLE":
      return { ...state, isDark: !state.isDark };
    case "INCREMENT":
      return { ...state, fontSize: state.fontSize + 1 };
    case "DECREMENT":
      return { ...state, fontSize: state.fontSize - 1 };

    default:
      return state;
  }
}

export default designReducer;
