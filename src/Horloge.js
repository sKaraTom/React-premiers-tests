import React from 'react';

/**
 * horloge affichant l'heure en temps réel
 * avec lifecycle hooks
 */
class Horloge extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    // lifecycle hook : monter le composant
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    // lifecycle hook : libérer la ressource
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }
    
    render() {
      return (
        <h2>
          It is{' '}
          {this.state.date.toLocaleTimeString()}.
        </h2>
      )    
    }
  }
  

export default Horloge;