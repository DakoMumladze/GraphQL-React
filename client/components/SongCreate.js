import React, { Component } from 'react';

class SongCreate extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    render () {
        return (
            <div>
                <h5>Create a new song</h5>
                <form>
                    <label>Song title:</label>
                    <input 
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                </form>
             </div>
        )
    }
}

export default SongCreate