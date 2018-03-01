import React from 'react';




export default class RequestorForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
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

    handleChange(e) {

        const isValid = this.validateForm(e);
        // const isValid = false;
        this.props.onChange(e,"requestor",isValid);
    }

    render() {
        const email = this.props.form.email;
        // let isValid = this.validateForm(email);
        // console.log(isValid);

        return(
              <div className="form-group">
                <input type="text" name="email" className="form-control"
                  placeholder="Email address" value={email} onChange={this.handleChange} autoFocus />
                <span className="help-block"></span>
              </div>
        )
    }
}