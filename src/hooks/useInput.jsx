import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_TOUCHED":
      return { ...state, isTouched: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const useInput = (validateFn) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleBlur = () => {
    dispatch({ type: "SET_TOUCHED" });
  };

  const handleChange = (e) => {
    dispatch({ type: "SET_VALUE", payload: e.target.value });
  };
  const isCorrect = validateFn(state.value);
  let isValid = state.isTouched ? validateFn(state.value) : true;

  const resetValues = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    isTouched: state.isTouched,
    handleBlur,
    handleChange,
    isValid,
    isCorrect,
    resetValues,
  };
};

export default useInput;
