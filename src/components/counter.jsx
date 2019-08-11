import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    const { counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBatchClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(counter)}
            disabled={counter.value === 0}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
