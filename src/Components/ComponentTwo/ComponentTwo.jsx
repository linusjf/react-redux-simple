import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";

const ComponentTwo = props => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const [valueChange, setValueChange] = useState("");

  const handleSetText = () => {
    dispatch(allActions.textActions.setText(valueChange));
  };

  const handleClearText = () => {
    dispatch(allActions.textActions.clearText());
    setValueChange("");
  };

  return (
    <div className="component-two">
      <h5>2. Function Component</h5>
      <p> Counter: {counter}</p>

      <label htmlFor="use-state"> Text :</label>
      <input
        id="use-state"
        onChange={event => setValueChange(event.target.value)}
        type="text"
        value={valueChange}
        className="input-box"
      />
      <br />
      <button
        type="submit"
        className="btn btn-outline-primary"
        onClick={handleSetText}
      >
        Set Redux
      </button>
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleClearText}
      >
        Clear Redux
      </button>
    </div>
  );
};

export default ComponentTwo;
