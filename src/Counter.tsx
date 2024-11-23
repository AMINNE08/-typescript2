import  { Component } from 'react';

// Define a TypeScript interface for the state structure.
interface CounterState {
  count: number; 
}

// Define a type for props. Since no props are used, we can use an empty object.
interface CounterProps {}

// Extend the React.Component class with the generic types <Props, State>.
class Counter extends Component<CounterProps, CounterState> {


  // Define the initial state using the CounterState type.
  state: CounterState = {
    count: 0,
  };

  // Define the increment method with explicit typing for void return.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render the component with type-safe JSX.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
