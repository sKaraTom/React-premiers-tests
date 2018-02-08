import React from 'react';


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
   * Classe de contrôle de la connexion/déconnexion.
   * affiche le bouton co/déconnexion et le message de bienvenue.
   * Un message Warning si non authentifié
   */
  class Connexion extends React.Component {
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

  export default Connexion;