import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

import addUser from '../ducks/reducers/user'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }



    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    login = () => {
        this.props.history.push('/dashboard')
    }
    // login = () => {

    //     const { username, password } = this.state
    //     if (username && password) {
    //         axios.post('/login', {
    //             username: username.toLowerCase(),
    //             password: password
    //         }).then(results => {
    //             if (results.data.length !== 0) {
    //                 this.setState({
    //                     error: results.data
    //                 })
    //             } else {
    //                 this.props.addUser(this.state)
    //                 this.props.history.push('/dashboard')
    //             }
    //         })
    //     }
    // }

    register = () => {
        const { username, password } = this.state
        if (username && password) {
            axios.post('/register', {
                username: username.toLowerCase(),
                password: password
            }).then(results => {
                this.props.addUser(this.state)
                this.props.history.push('/dashboard')
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Helo :> </h1>
                <input placeholder='username' onChange={this.handleUsernameChange} />
                <br />
                <input placeholder='password' onChange={this.handlePasswordChange} />
                <br />
                <br />
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
        
    }
}

export default connect(null, { addUser })(Auth)
