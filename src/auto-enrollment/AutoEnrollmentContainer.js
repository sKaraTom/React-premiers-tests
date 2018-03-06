import React from 'react';
import RequestorForm from './scenes/requestor-form/RequestorForm';

const initialRequestor = {
    name:'',
    firstName:'',
    login:'',
    companySelected:'',
    airbusDept:'',
    email:'',
    isValid:false
};
const initialUser = {
    name:'',
    firstName:'',
    login:'',
    companySelected:'',
    airbusDept:'',
    email:'',
    siteSelected:'',
    phoneNumber:'',
    function:'',
    //champs auto
    production:true,//non éditable
    FlightTest:true,//non éditable
    profile:'CONSULT',
    acTypesSelected:{},
    validityDate:''
};

const initialManager = {
    name:'',
    firstName:'',
    airbusDept:'',
    email:'',
};


/** 
 * parent statefull container
 * owns the full request data in his state.
*/
export default class AutoEnrollmentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companies:{},
            sites:{},
            ACGroup:{},
            natCo:{}, //liste admin
            requestor:initialRequestor,
            user:initialUser,
            airbusManager:initialManager,
            natCoSelected:''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e,formChoice) {
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
                }
            }));
        }
        console.dir(this.state.requestor.isValid);
    }

    handleClick() {
        const name = this.state.requestor.name === 'dupond' ? 'durand' : 'dupond';  
        let requestor = {...this.state.requestor};
        requestor.name = name;
        this.setState({requestor});
        // console.dir(this.state.requestor);

        // autre façon :
        // const field = event.target.name;
        // const user = this.state.user;
        // user[field] = event.target.value;

        // this.setState({
        // user
        // });
        
    }

    render() {
        return (
            <div className="container">
                <form>
                <RequestorForm formReq={this.state.requestor} onChange={this.handleChange} />
                <button className="btn btn-primary" disabled={!this.state.requestor.isValid}> Next </button>
                </form>
            </div>
        )
    }
}
