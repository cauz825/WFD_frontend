import React from 'react';
import './App.css';
import PantryContainer from './containers/PantryContainer';
import RecipeContainer from './containers/RecipeContainer';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentPantry: [],
      loggedIn: false
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h3>NavBar (placeholder)</h3>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/pantry" component ={PantryContainer} />
            <Route path="/recipe" component={RecipeContainer} />
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;
