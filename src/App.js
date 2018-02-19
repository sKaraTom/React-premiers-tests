import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*****************LISTE AVEC BOUCLE PARENT ENFANT ***************/
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

/*****************CONTENEURS GENERIQUES ***************
 * utile pour composants neutres, type Dialog, SideBar */

/**
 * composant qui contiendra ce que son parent lui transmet via {props.children}.
 */
function FancyBorder(props) {
  const divStyle = {
    borderStyle:'groove',
    borderColor:[props.color]
  };
  return(
     <div style={divStyle}>
      {props.children}
    </div>
  )
}

/**
 * composant parent qui envoie du contenu à afficher.
 */
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

/*****************TOGGLE ON/OFF ***************/
/**
 * toggle ON/OFF sur un bouton.
 */
class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {estActif: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState => ({estActif : !prevState.estActif}));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.estActif ? 'ON' : 'OFF'}
      </button>
    )
  }
}

/***************** BOUTON PREVENT DEFAULT() ***************/
/**
 * test de la méthode .preventDefault() pour empêcher l'action par défaut d'un élément HTML
 */
function BoutonPreventD() {
  function handleClick(e) {
    e.preventDefault(); // empêche le comportement par défaut, ici la redirection vers l'url.
  }
  return (
    <a href="http://www.yahoo.fr" onClick={handleClick}>
      Click me prevent default
    </a>
  );
}

/***************** LISTE DE NOMBRES ***************/
/**
 * une ligne d'une liste encapsulée dans son propre composant.
 * @param {*} props 
 */
function LigneListe(props) {
  return <li>{props.value}</li>;
}
/**
 * Un tableau de nombres à afficher dans une liste.
 * @param {*} props 
 */
function ListeNombres(props) {
  const nombres = props.nombres;
  // const listeNombres = nombres.map((nombre) => <li key={nombre.toString()} value={nombre}>{nombre}</li>);
  // return <ul>{listeNombres}</ul>
    return (
      <ul>
        {nombres.map((nombre) =>
          <LigneListe key={nombre.toString()}
                    value={nombre} />
        )}
      </ul>)
}

/***************** MESSAGE WELCOME ***************/
/**premier composant affichant un nom obtenu depuis
 *  le parent (qui est la class App)
 */
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/***************** APP CONTENEUR PARENT ***************/

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {nombres: [1,2,3,4,5]};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <br />
          <WelcomeDialog />
          <Welcome name="Sara" />
          <BoutonPreventD/>
          <br/>
          <Toggle/>
          <ListOfTenThings />
          <ListeNombres nombres={this.state.nombres} />
          
          
        </div>
      </div>
    );
  }
}

export default App;
