import React from 'react';
import { Table } from 'react-bootstrap';
import RequestDataTable from './scenes/request-datatable/RequestDataTable';


export default class DashboardContainer extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <RequestDataTable />
        )
    }

}