import React, {useState, useEffect} from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

function RecipeModal(props) {

    const [rec, setRecipe] = useState({})

    
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
        <Modal>
            {/* onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={props.open}
        
            <Modal.Header>{rec.name}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={rec.image} />
                <Modal.Description>
                    <Header>Ingrdients</Header>
                    <ul>
                        {rec.extendedIngredients}
                    </ul>
                    <Header>Recipe</Header>
                    {rec.summary}
                </Modal.Description>
            </Modal.Content> */}
        <Modal.Header>Test Recipe</Modal.Header>
        {console.log(rec)}
        </Modal>
    )

}

export default RecipeModal;
