import React, { Component } from 'react';
class Navbar extends Component {
  
    render() {
        return (
        <h1>nvbar{this.props.totalCounters}</h1>
        );
    }
}

export default Navbar;