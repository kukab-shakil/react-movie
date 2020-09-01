import React, {Component} from 'react';
class Counter extends Component {
   
    render() {
        
        return (
            <div>
               
                <span className={this.getbadgesClasses()}>{this.formatcount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">increment</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary m-4 btn-sm" disabled={this.props.counter.value === 0 ? "disabled" : ""}>deccrement</button>
                
                <button onClick={()=>this.props.getDelete(this.props.id)} className="btn btn-danger btn-sm">delete</button>
            </div>
        );
    }
   
    getbadgesClasses(){
        let classes =" badge m-2 badge-";
        classes +=  this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatcount(){
        
        return this.props.counter.value === 0 ? 'Zero' :this.props.counter.value;
    }
}

export default Counter;