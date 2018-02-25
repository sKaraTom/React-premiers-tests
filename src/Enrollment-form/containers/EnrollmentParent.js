import React from 'react';
import FormContainer from './../FormContainer';
import RequestorType from './RequestorType/RequestorType';

export default class EnrollmentParent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {radioButton:"0"};
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
    }

    handleChangeRadio(e) {
        // console.log("handleChangeRadio");
        // console.log(e.target.value);
        this.setState({radioButton:e.target.value});
    }

    isForMyselfOrAirbusManage() {
        const radioB = this.state.radioButton;

        if (radioB === "1" || radioB ==="2") {
            return true;
        }
        else {
            return false;
        }
        
    }

    render() {
        const radioButton = this.state.radioButton;
        return (
            <div className="container">
                <h2>Enrollment</h2>
                <RequestorType radioButton={radioButton} onChange={this.handleChangeRadio}  />
                { radioButton === "0"? <p> Please choose your requestor type. </p> : "" }
                { this.isForMyselfOrAirbusManage() ? <FormContainer /> : "" }
            </div>
        )

    }

}