import React from 'react';
import RecipeSearch from '../components/RecipeSearch'

class RecipeContainer extends React.Component {
    render() {
        return(
            <div>
                <h4>Recipe Container</h4>
                <RecipeSearch />
            </div>
        )
    }
}

export default RecipeContainer;