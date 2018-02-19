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
      fetch('http://api.openweathermap.org/data/2.5/weather?zip=31170,fr&units=metric&appid=a341bc9b218fc60d29a58fa7bcde3369')
          .then(res => res.json())
          .then(items => console.dir(items))
          .catch(err => console.log(err));
    }
    // lifecycle hook : libérer la ressource
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    // enregistrer dans le state l'heure à l'instant T
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