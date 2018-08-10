import React, { Component } from 'react'
// import axios from 'axios'

class Auth extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <input placeholder='username' />
                <input placeholder='password' />
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

export default Auth
