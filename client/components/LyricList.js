import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: {
                id
            },
            optimisticResponse: {
                __typeName: 'Mutation',
                likeLyric: {
                    __typeName: 'LyricType',
                    id,
                    likes: likes + 1
                }
            }
        })
    }
    renderLyrics() {
        return this.props.lyrics.map(({ content,id, likes }) => {
            return (
                <li key={id} className='collection-item'> 
                    {content}
                    
                    <div className="vote-box">
                        <span className="">{likes}</span>
                        <i 
                            className="material-icons"
                            onClick={() => this.onLike(id, likes)}
                        >
                            thumb_up
                        </i>
                    </div>
                    
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