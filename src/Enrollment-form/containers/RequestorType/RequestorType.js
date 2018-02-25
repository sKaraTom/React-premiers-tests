import React from 'react';
import './RequestorType.css';

export default class RequestorType extends React.Component {

    render() {
        // const radioButton = this.props.radioButton;
       return (
            <div className="row radioLine">
                <form>
                <div className="radio">
                    <label className="radio-inline">
                        <input type="radio" value="1" name="requestorRadio" id="choice1" onChange={this.props.onChange}/>
                        For myself
                    </label>

                    <label className="radio-inline">
                        <input type="radio" value="2" name="requestorRadio" id="choice2" onChange={this.props.onChange}/>
                        I am a manager
                    </label>

                    <label className="radio-inline">
                        <input type="radio" value="3" name="requestorRadio" id="choice3" onChange={this.props.onChange}/>
                        Other requestor
                    </label>
                </div>
                </form>
            </div>
        )
    }
}