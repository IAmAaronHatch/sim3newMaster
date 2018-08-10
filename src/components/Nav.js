import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    return (
        <div>
            Nav
            <h4>{props.username}</h4>
            <img src={props.profilePic} />
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>

        </div>
    )
}

let mapStateToProps = state => {
    return {
        profilePic: state.profilePic,
        username: state.username
    }
}

export default connect(mapStateToProps)(Nav)