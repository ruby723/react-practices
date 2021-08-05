import React from 'react';
import PropTypes from 'prop-types';
import Emaillist from './Emaillist';

export default function Email({firstName, lastName, email}) {
    return (
        <li>
                    {firstName} {lastName} 
                    <br/>
                    { email }
                </li>
    )
}

Email.protoTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}