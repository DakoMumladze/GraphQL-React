import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class LyricList extends Component {
    onLike(id) {
        console.log(id, 12121)
        this.props.mutate({
            variables: {
                id
            }
        })
    }
    renderLyrics() {
        return this.props.lyrics.map(({content,id}) => {
            return (
                <li key={id} className='collection-item'> 
                    {content}
                    <i 
                        className="material-icons"
                        onClick={() => this.onLike(id)}
                    >
                        thumb_up
                    </i>
                </li>
            )
        })
    }
    render () {
        return (
            <div>
                <ul className='collection'>
                    {this.renderLyrics()}
                </ul>
            </div>     
            
        )
    }
}
const mutation = gql`
    mutation LikeLyric ($id: ID) {
        likeLyric(id: $id) {
        id
        likes
        }
    }
` 
export default graphql(mutation)(LyricList)