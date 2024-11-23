import React from 'react';

// Define a TypeScript interface for the props of the Greeting component.
interface GreetingProps {
  name: string; 
}

// Use React.FC to define the functional component with typed props.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Return a JSX element, the code remains the same but benefits from type safety.
  return <div>Hello, {name}!</div>;
};

export default Greeting;
