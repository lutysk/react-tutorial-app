import React from 'react';
import './App.css';

// creating element with createElement
const helloReactEl = React.createElement('h1', {className: 'main-title'}, 'Hello React!')
// creating functional component
const SubTitleComponent = () => <h2>This is a demo application</h2>;
// creating component with React.Component
class Description extends React.Component {
  render() {
    return (
      <p>In this app we're displaying React components created with different techniques.</p>
    )
  }
}
// creating component with React.PureComponent
class Final extends React.PureComponent {
  render() {
    return (
      <h3>Thank you for attention, that's it!</h3>
    )
  }
}

function App() {
  return (
    <div className="app-container">
      {helloReactEl}
      <SubTitleComponent />
      <Description />
      <Final />
    </div>
  );
}

export default App;
