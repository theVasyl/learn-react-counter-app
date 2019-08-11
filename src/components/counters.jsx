import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
