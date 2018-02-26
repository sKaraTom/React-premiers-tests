import React from 'react';

// conteneur parent du formulaire d'inscription pour soi-même

export default class AutoEnrollment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
    }
}
