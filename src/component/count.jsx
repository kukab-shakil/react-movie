import React, {Component} from 'react';
class Count extends Component {
   state={
       tags:['kukab', 'saqib' , '40'],
   };
    render() {
        return (
            <div>
                {this.state.tags.length === 0 ? "hello" : <ul>{this.gettag()}</ul> }
                
            </div>
            
        );
    }
    gettag(){
    return(
        <div>
           
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li> )}</ul>

        </div>
    )

    }
}

export default Count;