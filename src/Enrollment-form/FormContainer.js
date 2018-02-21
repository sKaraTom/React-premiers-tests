import React from 'react';
import { SimpleInput } from './composants/Input';
import { Select } from './composants/Select';

import companyList from '../assets/companyList.json';


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
            companySelected:''
        }
        this.handleChange = this.handleChange.bind(this);
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
        else if(e.target.id === "inputLogin") {
            this.setState({login:e.target.value});
        }
        else if(e.target.id === "selectCompany") {
            console.log("valeur select : ",e.target.value);
        }
    }

    render() {
        return (
        <div>
        <fieldset>
        <legend>formulaire</legend>
        <form>
            <SimpleInput placeholder="name" value={this.state.name} onChange={this.handleChange} id="inputName" />
            <br/>
            <SimpleInput placeholder="first name" value={this.state.login} onChange={this.handleChange} id="inputLogin" />
            <br/>
            <Select value={this.state.companySelected} label="company" onChange={this.handleChange} id="selectCompany"/>
            <br/>
            <button type="submit"> Send request </button>
        </form>
        </fieldset>
       
        <pre>nom : {this.state.name} <br/>
            login : {this.state.login} <br/>
            company : {this.state.company.map((comp) => <li key={comp.company}>{comp.company},{comp.firmType},{comp.firmCode}</li>)}
        </pre>
        </div>
        )
    }
}

export default FormContainer;