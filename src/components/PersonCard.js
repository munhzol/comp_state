import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render(){
        const { className, firstName, lastName, hairColor } = this.props;
        return(
            <div className={className}>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ this.addAge }>Birthday Button for {firstName}</button>            
            </div>
        );
    }

    addAge = () => {
        this.setState({ age: this.state.age+1 });
    }
}

export default PersonCard;