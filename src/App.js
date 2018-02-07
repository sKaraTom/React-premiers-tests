import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
 *  Message à afficher après submit du formulaire.
 * @param {*} props 
 */
function FormMessage(props) {
  let classeCSS = "nomSaisi";
  // si pas d'erreur et pas de message (=initialisation de la page)
  //ne rien afficher.
  if (!props.erreur && !props.message) {
    return null;
  }
  // si erreur, afficher le message avec la classe CSS .warning
  else if(props.erreur) {
    classeCSS = "warning";
  }
  return (
    <div className={classeCSS}>
      {props.message}
    </div>
  );
}

/*****************CLASSES ***************/


/**
 * Dropdown de sélection du gene.
 */
class SelectGenreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'indéterminé'}; // la valeur sélectionnée par défaut.

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value:event.target.value});
  }
  handleSubmit(event) {
    alert('votre genre est : ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          genre:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="homme">homme</option>
            <option value="femme">femme</option>
            <option value="chaise de jardin">chaise de jardin</option>
            <option value="indéterminé">indéterminé</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/** formulaire input champ texte
 * avec message d'erreur ou résultat affiché
 */
class FormNom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', erreur:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

    const message = "";
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    
    // s'il y a eu saisie
    if(this.state.value.trim()) {
      this.message = 'nom saisi: ' + this.state.value;
      this.setState({erreur:false});
    }
    // si aucune saisie (ou blancs)
    else {
      this.message = "veuillez saisir un nom";
      this.setState({erreur:true});
    }
    console.log("message : ", this.message, this.state.erreur);
    event.preventDefault(); // évite le rafraîchissement lié au submit
  }
  handleReset() {
    this.setState({value: '', erreur:false});
    this.message = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" onClick={this.handleReset} />
        <FormMessage erreur={this.state.erreur} message={this.message}/>
      </form>
    );
  }
}

/**
 * Classe de contrôle de la connexion/déconnexion.
 * affiche le bouton co/déconnexion et le message de bienvenue.
 * Un message Warning si non authentifié
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
          <hr/>
          <FormNom />
          <SelectGenreForm />
          <hr/>
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
