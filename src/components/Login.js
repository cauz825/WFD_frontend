import React, {useState} from 'react'

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
        .then(console.log)
    }

    return(
        <div>
            <form>
                <input onChange={handleUsername} type="text" placeholder="Username" />
                <input onChange={handlePassword} type="password" placeholder="Password" />
                <button onClick={logIn} type="Login">Login</button>
            </form>
        </div>
    )
}

export default Login;
