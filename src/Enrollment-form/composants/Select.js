import React from 'react';

export const Select = (props) => {
    let companyList = props.list;

    return (
    <label>
    {props.label}*
            <select className="form-control" onChange={props.onChange} id={props.id} value={props.value}>
              <option disabled value="-1">--select a company--</option>
              {companyList.map((comp,index) =>
                    <option key={comp.company} value={index}>{comp.company}</option>)};
            </select>
    </label>
    )
}