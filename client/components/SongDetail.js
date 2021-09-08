import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'
import { Link } from 'react-router'

class SongDetail extends Component {    
    render () {

        const { song } = this.props.data 

        if(!song) { return <h5>Loading...</h5>}
        return (
            <div>
                <Link to="/">
                    <i className="material-icons">home</i>
                </Link>
                <h5>Song title - {song.title}</h5>
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props) => {
        return ({
            variables: {
                id: props.params.id
            }
        })
    }
})(SongDetail)