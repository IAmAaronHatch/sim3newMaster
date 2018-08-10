import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import addUser from '../ducks/reducer'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            login: '',
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
        const { username, password } = this.state
        if (username && password) {
            axios.post('/login', {
                username: username.toLowerCase(),
                password: password
            }).then(results => {
                if (results.data.length !== 0) {
                    this.setState({
                        error: results.data
                    })
                } else {
                    this.setState({
                        login: 'Successfully Logged In'
                    })
                    this.props.addUser(this.state)
                    this.props.history.push('/Dashboard')
                }
            })
        }
    }

    register = () => {
        const { username, password } = this.state 
        if(username && password) {
            axios.post('/register', {
                username: username.toLowerCase(),
                password: password
            }).then (results => {
                this.props.addUser(this.state)
                this.props.history.push('/Dashboard')
            })
        }
    }

    render() {
        return (
            <div>
                <input placeholder='username' onChange={this.handleUsernameChange}/>
                <input placeholder='password' onChange={this.handlePasswordChange}/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(null, {addUser})(Auth)
