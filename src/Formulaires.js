import React from 'react';


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
  
  /**
   * formulaire avec plusieurs champs
   * un input et checkbox
   */
  class FormMultiple extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing:false,
        numberOfGuests:0
      };
      this.handleInputChange = this.handleInputChange.bind(this);
  
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      
      this.setState({[target.name]: value});
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      )
    }
  }
  
  /**
   * Dropdown de sélection du genre.
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


class Formulaires extends React.Component {

    render() {
        return(
        <div>
          <FormNom />
          <SelectGenreForm />
          <hr/>
          <FormMultiple />
        </div>
        )
    }
}


export default Formulaires;