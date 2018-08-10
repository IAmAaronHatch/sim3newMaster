import React, { Component } from 'react'
// import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }


    render() {
        return (
            <div>
                <h1>New Post</h1>

                <h3>Title:</h3>
                <input />

                <br />

                <h3>Image URL:</h3>
                <input />
                <h3>Content:</h3>
                <textarea rows='5' cols='200' />
            </div>
        )
    }
}

export default Form
