import React, { Component } from 'react';

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

class Test extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <hr/>
              <Welcome name="Sara" />
            </div>
        );
      }
}

export default Test;