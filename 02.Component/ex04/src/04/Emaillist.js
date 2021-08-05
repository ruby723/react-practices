import React from 'react';
import PropTypes from 'prop-types';
import Email from './Email';

export default function Emaillist ({ emails }){
    return(
        <ul className= {'Emallist'}>
            {
                emails.map( email => <Email
                                        key={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email} />)
            }
        </ul>
    );
}

Emaillist.PropTypes = {
    emails: PropTypes.arrayOf(PropTypes.shape(Email.protoTypes))
}