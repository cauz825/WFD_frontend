import React, {useState, useEffect} from 'react'
import { Header, Image, Modal, Icon } from 'semantic-ui-react'

function RecipeModal(props) {

    const [rec, setRecipe] = useState({})
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        if(props.open && props.recipe_id)
            {fetch("http://localhost:3000/recipe_detail", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    recipe_id: props.recipe_id
                })
            })
            .then(resp => resp.json())
            .then(data => setRecipe(data))}
    }, [props.open, props.recipe_id])

    return(
        
        <Modal 
            open={props.open}
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            >
        
            <Header content={rec.title}/>
            <Modal.Content image>
                <Image size='medium' src={rec.image} />
                <Modal.Description>
                    <Header>Dietary Restrictions</Header>
                    <div className="dietary">
                        Vegetarian: {rec.vegetarian ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />} <br></br>
                        Vegan: {rec.vegan ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />} <br></br>
                        Gluten-Free: {rec.glutenFree ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />} <br></br>
                    </div>
                    <Header>Ingredients</Header>
                    <ul className="ingredient list">
                        {rec.extendedIngredients ? rec.extendedIngredients.map(ingr => <li>{ingr.originalName}</li>) : null}
                    </ul>
                    <Header>Recipe</Header>
                    <ol className="step-by-step">
                        {rec.analyzedInstructions ? rec.analyzedInstructions[0].steps.map(step => <li>{step.step}</li>) : null}
                    </ol>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )

}

export default RecipeModal;
