import React, { Component } from 'react';

class MyNewComponent extends Component {
    render(){

        // const { someText, firstName, lastName , age} = this.props;

        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
            // <div>
            //     We are in my new Component {someText}
            //     <p>
            //         My name is {firstName} {lastName}, my age is {age}
            //     </p>
            // </div>
        );
    }
}

export default MyNewComponent;