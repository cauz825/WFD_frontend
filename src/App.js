import React from 'react';
import './App.css';
import PantryContainer from './containers/PantryContainer';
import RecipeContainer from './containers/RecipeContainer';

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
        <h2>User Page</h2>
        <PantryContainer />
        <RecipeContainer />
      </div>
      
    )
  }
}

export default App;
