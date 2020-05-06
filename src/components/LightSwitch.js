// import react, { Component } from 'react';
                
// class LightSwitch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             position: "On"
//         };
//     }
    
//     render() {
//         return (
//             <h1></h1>
//         );
//     }
// }
                
// export default LightSwitch;

import React, { Component } from 'react';


class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position1: "On",
        };
    }

    render(){
        return(
            <fieldset>
                <p>The light is currently { this.state.position1 }</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>            
            </fieldset>
        );
    }

    flipSwitch = () => {
        if( this.state.position1 === "On" ) {
            this.setState({ position1: "Off" });
        } else {
            this.setState({ position1: "On" });
        }
    }
}

export default LightSwitch;
