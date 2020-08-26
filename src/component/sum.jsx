import React, { Component } from "react";

import Navbar from "./navbar";
import Counters from "./counters";
class Sum extends Component {
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
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
        <Counters 
        counters={this.state.counters} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default Sum;
