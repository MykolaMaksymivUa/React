import React, { Component } from 'react';

class Clock  extends Component {
  render () {
    return (
      <div className="wrapper">
        <h1>Some text</h1>
        <p>date: {this.props.date}</p>
      </div>
    );
  }
}

export default Clock;