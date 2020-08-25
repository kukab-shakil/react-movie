import React, {Component} from 'react';
class Counter extends Component {
    state={
        value:this.props.value
    };
   
    render() {
        return (
            <div>
                <span className={this.getbadgesClasses()}>{this.formatcount()}</span>
                <button onClick={this.getProductId} className="btn btn-secondary btn-sm">increment</button>
            </div>
        );
    }
    handleIncrement=(product)=>{
        console.log(product)
        return this.setState({value: this.state.value + 1})
    }
    getProductId=()=>{
        this.handleIncrement({id:1});
    }
    getbadgesClasses(){
        let classes =" badge m-2 badge-";
        classes +=  this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatcount(){
        
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }
}

export default Counter;