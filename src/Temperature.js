import React from 'react';


/**
 * affichage d'un message si l'eau bout.
 */
function Ebullition(props) {
    if(!props.celsius) {
      return null;
    }
    if(props.celsius >= 100) {
      return <p> L'eau bout. </p>
    }
    else {
      return <p> L'eau ne bout pas.</p>
    }
  }
  
  /**
   * function pour formater le nombre avant la conversion,
   * ou retourner '' si la saisie n'est pas un nombre.
   * @param {*} temperature 
   * @param {*} functionConvertir 
   */
  function tryConvert(temperature, functionConvertir) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = functionConvertir(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  /**
   * functions de conversion de température
   */
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  const TypesTemperature = {
    c : 'Celsius',
    f : 'Fahrenheit'
  };
  
  /**
   * Input saisie de temperature
   */
  class InputTemperature extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    // envoyer la saisie au parent
    handleChange(e) {
      this.props.onTempChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const echelle = this.props.echelle;
      return (
      <label>
        T° en {TypesTemperature[echelle]}:
        <input 
          value={temperature}
          onChange={this.handleChange}/>
      </label>
      )
    }
  }
  
  /**
   * La classe parente contenant les input.
   */
  class Temperature extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        echelle:'c',
        temperature:''
      };
      this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
      this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }
  
    handleChangeCelsius(temperature) {
        this.setState({echelle:'c', temperature});
    }
    handleChangeFahrenheit(temperature) {
      this.setState({echelle:'f',temperature});
    }
  
    render() {
      const temperature = this.state.temperature;
      const echelle = this.state.echelle;
      // valeur à récupérer depuis enfant : si champ celsius saisi, convertir en farhein et vice-versa.
      const celsius = echelle === 'f' ? tryConvert(temperature,toCelsius) : temperature;
      const fahrenheit = echelle === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
  
      return(
        <fieldset>
        <legend>conversion température</legend>
        <InputTemperature 
          echelle='c'
          temperature = {celsius}
          onTempChange = {this.handleChangeCelsius}/>
        <InputTemperature 
          echelle='f'
          temperature = {fahrenheit}
          onTempChange = {this.handleChangeFahrenheit}/>
        <Ebullition celsius={parseFloat(celsius)}/>
        </fieldset>
      )
    }
  }

export default Temperature;