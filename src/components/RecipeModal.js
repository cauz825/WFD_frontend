import React, {useState, useEffect} from 'react'
import { Header, Image, Modal, Icon } from 'semantic-ui-react'

function RecipeModal(props) {

    const [rec, setRecipe] = useState({})
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        if(props.recipe_id && props.open)
            {fetch("http://localhost:3000/recipe_detail", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    recipe_id: props.recipe_id
                })
            })
            .then(resp => resp.json())
            .then(data => {
                setRecipe(data)
                setOpen(true)}
            )}
    }, [props.open, props.recipe_id])

    return(
        <Modal 
            open={open}
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}>

            <Header content={rec.title}/>
                <Modal.Content image scrolling>
                    <Image src={rec.image} />
                    <Modal.Description>
                        <Header>Dietary Restrictions</Header>
                        <div className="dietary">
                            Vegetarian: {rec.vegetarian ? <Icon name='check' /> : <Icon name='x' />}
                            Vegan: {rec.vegan ? <Icon name='check' /> : <Icon name='x' />}
                            Gluten-Free: {rec.glutenFree ? <Icon name='check' /> : <Icon name='x' />}
                        </div>
                        <Header>Ingredients</Header>
                        <div>
                            <ul className="ingredient-list">
                                {rec.extendedIngredients ? rec.extendedIngredients.map(ingr => <li>{ingr.originalName}</li>) : null}
                            </ul>
                        </div>
                        <Header>Recipe</Header>
                        <div>
                            <ol className="step-by-step">
                                {rec.analyzedInstructions && rec.analyzedInstructions.length > 0
                                ? rec.analyzedInstructions[0].steps.map(step => <li>{step.step}</li>) 
                                : <p>No instructions available for this recipe</p>}
                            </ol>
                        </div>
                        <Header>Wine Pairing</Header>
                            <div>
                                {rec.winePairing && rec.winePairing.length > 0
                                    ? <p>{rec.winePairing.pairingText}</p>
                                    : <p>No wine pairing available for this dish</p>}
                                <br></br>
                                <br></br>
                            </div>
                    </Modal.Description>
                </Modal.Content>
        </Modal>
    )

}
export default RecipeModal;