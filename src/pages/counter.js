import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count,
  }),
  dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  })
)(Counter)
