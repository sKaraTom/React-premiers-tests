import React from 'react';
import RequestorForm from './RequestorForm';

// conteneur parent du formulaire d'inscription pour soi-même

const requestor = {
    name:'dupond',
    firstName:'',
    login:'',
    companies:{},
    companySelected:'',
    airbusDept:'',
    email:'',
    isValid:false
}


export default class EnrollmentForm extends React.Component {

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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e,formChoice,isValid) {
        let input = e.target.value;

        if(formChoice === "requestor") {
            let stateField = e.target.name; 
            // let requestor = {...this.state.requestor};
            // requestor[stateField] = e.target.value;
            // this.setState(requestor);

            this.setState(prevState => ({
                requestor: {
                    ...prevState.requestor,
                    [stateField]: input,
                    isValid: isValid
                }
            }))
        }
        console.dir(this.state.requestor);
    }

    handleClick() {
        const name = this.state.requestor.name === 'dupond' ? 'durand' : 'dupond';  
        let requestor = {...this.state.requestor};
        requestor.name = name;
        this.setState({requestor});
        console.dir(this.state.requestor);

        // autre façon :
        // const field = event.target.name;
        // const user = this.state.user;
        // user[field] = event.target.value;

        // this.setState({
        // user
        // });
        
    }
    
    print(e) {
        e.preventDefault();
        window.print();
    }

    render() {
        return (
            <div className="container">
                <form>
                <RequestorForm form={this.state.requestor} onChange={this.handleChange} />
                <button className="btn btn-primary" disabled={!this.state.requestor.isValid}> requestor valid </button>
                <button className="btn btn-primary"onClick={this.print}> print </button>
                </form>
            <pre>
                {this.state.requestor.isValid.toString()}
                <br/>
                <button onClick={this.handleClick}> changer requestor name</button>
                <br/>
                {this.state.requestor.name}
            </pre>
            </div>
        )
    }
}
