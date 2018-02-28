import React from 'react';

// conteneur parent du formulaire d'inscription pour soi-même

const requestor = {
    name:'dupond',
    firstName:'',
    login:'',
    companies:{},
    companySelected:{},
    airbusDept:'',
    email:''
}


export default class AutoEnrollment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestor:requestor,
            // partie User to be created
            reqName:'',
            reqFirstName:'',
            reqLogin:'',
            companies:{},
            reqCompanySelected:{},
            reqAirbusDept:'',
            reqEmail:'',
            sites:{},
            siteSelected:'',
            phoneNumber:'',
            function:'', //saisie manuelle (limitée en nombre de carac.)
            //champs auto
            productionFlightTest:'', //non éditable
            profile:'CONSULT',
            ACTypes:'',
            validityDate:'', //non éditable mais conditions
            // partie A Manager
            manName:'',
            manFirstName:'',
            manAirbusDept:'',
            manEmail:'',
            //T Administrator
            natCo:{} //liste
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const name = this.state.requestor.name === 'dupond' ? 'durand' : 'dupond';  
        this.setState({requestor:{name:name}});
    }

    render() {
        return (
            <pre>
                {this.state.requestor.name}
                <br/>
                <button onClick={this.handleClick}> changer requestor name</button>
            </pre>
        )
    }
}
