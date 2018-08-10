import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {

    render() {
        return (
            <div>
                One Post
            </div>
        )
    }
}

// let mapStateToProps = (state, props) => {
//     let { id } = props.match.params
//     let post = state.posts.data.find(post => Number(post.id) === Number(id))

//     return { post }
// }

// export default connect(mapStateToProps)(Post)

export default Post