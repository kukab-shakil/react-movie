import React, { Component } from 'react';
import Counter from './Counter'
class Counters extends Component {
    state={
        counters:[
            {id:1, value:4},
            {id:2, value:3},
            {id:3, value:2},
            {id:4, value:1}
        ]

    }
    
    render() {
        
        return (
            <div>
           {this.state.counters.map(m=><Counter key={m.id} value={m.value}/>) }


            </div>

        );
    }
}

export default Counters;