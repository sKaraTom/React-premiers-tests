import React from 'react';




export default class RequestorForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateForm2 = this.validateForm2.bind(this);
    }
    
    validateForm(e) {

        // console.log(e.target.value);
        if( e.target.value === "toto") {
            return true;
        }
        // if(e === "toto") {
        //     return true;
        // }
        else {
            return false;
        }
    }

    validateForm2(props) {
        if( props.email === "toto") {
            
            this.props.setValidity(true);
        }
        else {
            this.props.setValidity(false);
        }
    }

    handleChange(e) {
        // const isValid = this.validateForm(e);
        this.props.onChange(e,"requestor");
    }

    render() {
        const  { name, firstName, login, companies, companySelected, airbusDept, email, isValid } = this.props.formReq;
        this.validateForm2(this.props.formReq);
        // if(requestorIsValid) {
            
        // }
        // console.log(isValid);

        return(
              <div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control"
                    placeholder="Name" value={name} onChange={this.handleChange} autoFocus />
                    <span className="help-block"></span>
                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control"
                    placeholder="Email address" value={email} onChange={this.handleChange} autoFocus />
                    <span className="help-block"></span>
                </div>
              </div>
        )
    }
}