import React from 'react';
import { InputText } from './composants/Input';
import { Select } from './composants/Select';

import companyList from '../assets/companyList.json';
import '../css/bootstrap.min.css';


class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            firstName:'',
            login:'',
            company:'',
            airbusDepartment:'',
            emailAddress:'',
            companySelected:-1,
            isDisabled:true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickConsole = this.handleClickConsole.bind(this);
    }

    componentWillMount() {
        // l'import de fichier local ne marche pas en localhost avec fetch
        // fetch('../assets/companyList.json')
        //     .then((res) => res.json())
        //     .then(items => this.setState({company:{items}}))
        //     .catch(err => console.log(err));
        this.setState({company:companyList});
    }

    componentWillUnmount() {
         this.setState({company:''});
      }
    
    handleChange(e) {
        if(e.target.id === "inputName") {
            this.setState({name:e.target.value});
        }
        else if(e.target.id === "inputFirstName") {
            this.setState({firstName:e.target.value});
        }
        else if(e.target.id === "inputLogin") {
            this.setState({login:e.target.value});
        }
        else if(e.target.id === "selectCompany") {
            // l'index est sauvé
            this.setState({companySelected:e.target.value});
            console.dir(this.state.company[e.target.value]);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("formulaire envoyé");
        const companyToSend = this.state.company[this.state.companySelected];
        console.dir(this.state);
        console.log("company to send :");
        console.dir(companyToSend);
    }

    // function de test uniquement : afficher dans la console des éléments du state
    // pour vérif
    handleClickConsole() {
        console.dir("companySelected :");
        console.dir(this.state.companySelected);
    }


    render() {
        const name = this.state.name;
        const firstName = this.state.firstName;
        const isEnabled = name.length > 0 && firstName.length > 0 && this.state.companySelected !== -1;

        return (
        <div  className="row">
        <div className="col">
            <fieldset>
                {/* <legend>formulaire</legend> */}
                <form onSubmit={this.handleSubmit}>
                    <InputText placeholder="name" value={name} onChange={this.handleChange} id="inputName" required="true"/>
                    <br/>
                    <InputText placeholder="first name" value={this.state.firstName} onChange={this.handleChange} id="inputFirstName" required="true"/>
                    <br/>
                    <InputText placeholder="login" value={this.state.login} onChange={this.handleChange} id="inputLogin" required=""/>
                    <br/>
                    <Select value={this.state.companySelected} list={this.state.company} label="company" onChange={this.handleChange} id="selectCompany"/>
                    <br/>
                    <button className="btn btn-primary" type="submit" disabled={!isEnabled}> Send request </button>
                    <br/>
                    <span style={{
                            fontSize:"small"
                    }}> * mandatory fields.</span>

                </form>
            </fieldset>
        </div>
        <div className="col" style={{ marginTop:"10px" }}>
            <pre>
            <button className="btn btn-secondary" onClick={this.handleClickConsole}> afficher state </button> <br/>
                nom : {this.state.name} <br/>
                firstName : {this.state.firstName} <br/>
                login : {this.state.login} <br/>
                company : {this.state.company.map((comp) => <li key={comp.company}>{comp.company},{comp.firmType},{comp.firmCode}</li>)} <br/>
                isEnabled : {isEnabled.toString()}

            </pre>
        </div>
        </div>
        )
    }
}

export default FormContainer;