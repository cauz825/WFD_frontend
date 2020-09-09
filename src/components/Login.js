import React, {useState} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


function Login() {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    
    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function logIn(e) {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                user: {username, password}
            })
        })
        .then(resp => resp.json())
        .then(data => setLocalStorage(data))
    }

    function setLocalStorage(data) {
        if(data.error)
            return(data.error)
        else
            localStorage.token = data.token
            localStorage.user_id = data.user.id
            localStorage.username = data.user.username
            window.location = '/pantry'
    }

    return(
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment>
                            <Header>Log Into Your Account</Header>
                                <input onChange={handleUsername} type="text" placeholder="Username" />
                                <input onChange={handlePassword} type="password" placeholder="Password" />
                            <Button onClick={logIn} type="Login">Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to WFD? <a href='/signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Login;
