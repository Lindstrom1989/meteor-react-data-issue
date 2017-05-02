import React from 'react';
import CollectionListContainer from './CollectionListContainer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0};
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    console.log('clicked');
    let currentCount = this.state.counter;
    console.log(this.state.counter);
    this.setState({counter: currentCount + 1});
  }

  render() {
    return (
      <div>
        <h1>Current count: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>click me!</button>
        <br/>
        <br/>
        <br/>
        <CollectionListContainer/>
      </div>
    );
  }
}
