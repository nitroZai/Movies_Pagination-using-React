import React, { Component } from 'react';


class Cover extends Component {
    state = {  }
    
    

    render() { 
        return (

            <React.Fragment>
                <p>{this.props.id}</p>
                <button className="btn btn-primary" onClick={this.props.onIncrement}>Increment</button>
                <button className="btn btn-warning">Decrement</button>
            </React.Fragment>

            );
    }
}
 
export default Cover;