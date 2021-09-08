import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'
import { Link } from 'react-router'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'
class SongDetail extends Component {    
    render () {

        const { song } = this.props.data 

        if(!song) { return <h5>Loading...</h5>}
        return (
            <div>
                <Link to="/">
                    <i className="material-icons">home</i>
                </Link>
                <h5>{song.title}</h5>
                <LyricCreate songId={this.props.params.id}/>
                <LyricList lyrics={song.lyrics}/>
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