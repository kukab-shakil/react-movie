import React, { Component } from 'react';
import Counter from './Counter'
class Counters extends Component {
    state={
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ],
       

    }
    handleIncrement=counter=>{
        const counters =[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value++;
        this.setState({counters})
    }
    handleDecrement=counter=>{
        const counters =[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value = counters[index].value > 0 ? counters[index].value-1:0;
        this.setState({counters})
    }
    handleDelete=(counterid)=>{
      const counters = this.state.counters.filter(m=>m.id !== counterid)
      this.setState({counters})
    }
    handleReset=()=>{
        const counters = this.state.counters.map(m=>{ 
            m.value = 0;
             return m
        })
        this.setState({counters})

    }
    
    render() {
        
        return (
            <div>
                <h1>{this.state.counters.reduce((a,b)=>({value:a.value+b.value}),{value:0}).value}</h1>
                <button onClick={this.handleReset} className="btn btn-secondary btn-sm">RESET</button>
           {this.state.counters.map(m=>
           <Counter key={m.id} 
             id={m.id} getDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={m}
              >
           
              
           </Counter>) }


            </div>

        );
    }
}

export default Counters;