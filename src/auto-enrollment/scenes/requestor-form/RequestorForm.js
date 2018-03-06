import React from 'react';




export default class RequestorForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e,"requestor");
    }

    render() {
        const  { name, firstName, login, companySelected, airbusDept, email, isValid } = this.props.formReq;

        return(
              <div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control"
                    placeholder="Name" value={name} onChange={this.handleChange} autoFocus />
                    <span className="help-block"></span>
                </div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control"
                    placeholder="First name" value={firstName} onChange={this.handleChange} />
                    <span className="help-block"></span>
                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control"
                    placeholder="Email address" value={email} onChange={this.handleChange} />
                    <span className="help-block"></span>
                </div>
              </div>
        )
    }
}