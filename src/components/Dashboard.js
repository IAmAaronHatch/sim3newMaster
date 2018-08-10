import React, { Component } from 'react'
// import axios from 'axios'
import { getPosts } from '../ducks/reducers/posts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div>
                <input placeholder='Search by Title' />
                <button>Search</button>
                <button>Reset</button>

                <br />

                My Posts
                <input type='checkbox' />

                {this.props.posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.author}</p>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        posts: state.posts.data
    }
}

export default connect(mapStateToProps, { getPosts })(Dashboard)

