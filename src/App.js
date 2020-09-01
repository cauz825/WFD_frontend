import React from 'react';
import './App.css';
import PantryContainer from './containers/PantryContainer';
import RecipeContainer from './containers/RecipeContainer';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentPantry: []
    }
  }

  addToPantry(ingredient) {
    console.log('button clicked')
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Home Page</h2>
            <Route path="/pantry" 
              render={() => 
                <PantryContainer 
                  currentPantry={this.state.currentPantry}
                  addToPantry={this.addToPantry} 
                />
              } 
            />
            <Route path="/recipe" component={RecipeContainer} />
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;
