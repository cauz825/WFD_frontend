import React from 'react';
import './App.css';

const baseUrl = 'http://localhost:3000/users'

class App extends React.Component {

  componentDidMount() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <h1>NavBar</h1>

      </div>
      
    )
  }
}

export default App;
