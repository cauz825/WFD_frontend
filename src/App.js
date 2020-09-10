import React from 'react';
import './App.css';
import PantryContainer from './containers/PantryContainer';
import RecipeContainer from './containers/RecipeContainer';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import 'semantic-ui-css/semantic.min.css';
import AboutMe from './components/AboutMe'



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
          <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/pantry" component ={PantryContainer} />
            <Route path="/recipe" component={RecipeContainer} />
            <Route path='/aboutme' component={AboutMe} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
