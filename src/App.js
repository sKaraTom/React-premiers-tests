import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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

/**
 * afficher un message d'erreur ou rien
 * @param {*} props 
 */
function WarningBanner(props) {
  // si false, alors retourner null pour ne rien afficher.
  if (!props.warn) {
    return null;
  }
  // sinon afficher la div de warning
  return (
    <div className="warning">
      Warning! Vous n'êtes pas connecté.
    </div>
  );
}

/**
 * boutons de connexion et déconnexion
 * @param {*} props 
 */
function BoutonConnexion(props) {
  return (
    <button onClick={props.onClick}>
      Connexion
    </button>  )
}
function BoutonDeconnexion(props) {
  return (
    <button onClick={props.onClick}>
      Déconnexion
    </button>
  )
}

/**
 * 1 message différent suivant prospect ou client
 * @param {*} props 
 */
function Client(props) {
  return <h2> Welcome back !</h2>
}
function Prospect(props) {
  return <h2> Please sign up. </h2>
}
/**
 * la function conditionnant l'affiche du message prospect ou client.
 * @param {*} props 
 */
function MessageAccueil(props) {
  const estAuthentifie = props.estAuthentifie;

  if(estAuthentifie) {
    return <Client/>;
  }
  else {
    return <Prospect/>;
  }
}

/**
 * test de la méthode .preventDefault() pour empêcher l'action par défaut d'un élément HTML
 */
function BoutonPreventD() {
  function handleClick(e) {
    e.preventDefault(); // empêche le comportement par défaut, ici la redirection vers l'url.
  }
  return (
    <a href="http://www.yahoo.fr" onClick={handleClick}>
      Click me
    </a>
  );
}

/**
 * Classe de contrôle de la connexion/déconnexion.
 * affiche le bouton co/déconnexion et le message de bienvenue.
 */
class ControleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleConnexionClick = this.handleConnexionClick.bind(this);
    this.handleDeconnexionClick = this.handleDeconnexionClick.bind(this);
    this.state = {estAuthentifie:false,
      showWarning: true};
  }

  handleConnexionClick() {
    this.setState({estAuthentifie:true, showWarning:false});
  }
  handleDeconnexionClick() {
    this.setState({estAuthentifie:false, showWarning:true});
  }

  render() {
    const estAuthentifie = this.state.estAuthentifie;
    return (
      <div>
        <MessageAccueil estAuthentifie={estAuthentifie} />
        {!estAuthentifie && <BoutonConnexion onClick={this.handleConnexionClick}/>}
        {estAuthentifie && <BoutonDeconnexion onClick={this.handleDeconnexionClick}/>}
        <WarningBanner warn={this.state.showWarning} />
      </div>
    )
  }

}

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

/**
 * horloge affichant l'heure en temps réel
 * avec lifecycle hooks
 */
class Heure extends React.Component {
  
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

/**premier composant affichant un nom obtenu depuis
 *  le parent (qui est la class App)
 */
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


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
        <ControleLogin/>
        <div className="App-intro">
          <Welcome name="Sara" />
          <Heure/>
          <BoutonPreventD/>
          <br/>
          <Toggle/>
          <ListeNombres nombres={this.state.nombres} />
        </div>
      </div>
    );
  }




}

export default App;
