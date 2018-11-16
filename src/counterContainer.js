import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  onAdd1: () => dispatch({ type: "ADD1" }),
  onAdd10: () => dispatch({ type: "ADD10" }),
  onLess1: () => dispatch({ type: "LESS1" }),
  onLess10: () => dispatch({ type: "LESS10" }),
  onReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({
  counter,
  onAdd1,
  onAdd10,
  onLess1,
  onLess10,
  onReset
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAdd1}>+1</button>
    <button onClick={onLess1}>-1</button>
    <button onClick={onReset}>reset</button>
    <button onClick={onAdd10}>10</button>
    <button onClick={onLess10}>-10</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
