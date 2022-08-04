import React, { Component } from 'react';

import Cover from './cover';

class Covers extends Component {
    state = { 

        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0}
        ]

     } 

     makeIncrement = (counterId) => {
        console.log("Make Increment", counterId)
     }

     render() { 
        
        const { counters } = this.state
        
        return (

            counters.map((counter) => (
                <Cover 
                key={counter.id}
                id={counter.id}
                value={counter.value}
                onIncrement = {() => this.makeIncrement(counter.id) }
                />
            ))

        );
    }
}
 
export default Covers;