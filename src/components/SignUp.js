import React from 'react'

function SignUp() {
    
    
    
    
    return(
        <form onSubmit={(e) => this.signUp(e)}>
            <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Username" />
            <input onChange={(e) => this.handleChange(e)} type="password" placeholder="Password" />
            <button type="Signup">Sign Up</button>
        </form>
    )
}

export default SignUp;
