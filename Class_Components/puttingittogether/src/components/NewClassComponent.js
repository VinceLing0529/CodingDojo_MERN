import React, { Component } from 'react';
    
    
class NewClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        return (<div>
            <h1> {this.props.lastname} , {this.props.firstname} </h1> 
            <p>Age :{this.state.age}</p>
            <p>Hair color :{this.props.haircolor}</p>
            <button onClick={ () => { this.setState({ age : parseInt(this.state.age) +1 })  } }>Birthday Button For {this.props.firstname} {this.props.lastname}  </button>
        </div>
            
            );
    }
}
    
export default NewClassComponent;