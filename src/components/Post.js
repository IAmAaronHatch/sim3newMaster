import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }
    render() {
        return (
            <div>
                {this.props.post && <div>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.img}</p>
                    <br />
                    <p>{this.props.post.content}</p>
                </div>}
                <Link to='/dashboard'><button>Back</button></Link>
            </div>
        )
    }
}

let mapStateToProps = (state, props) => {
    let { id } = props.match.params
    console.log(11111, props)
    let post = state.posts.data.find(post => Number(post.id) === Number(id))
    return { post }
}

export default connect(mapStateToProps)(Post)