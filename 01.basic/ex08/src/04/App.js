import React, { Fragment } from 'react';
import Header from './header';
import Contents from './Contents';

export default function(){
    return (
    /*
    <Fragment>
        <Header />
        <Contents />
    </Fragment>
    */
    React.createElement(
        Fragment,
        null,
        React.createElement(Header,null),
        React.createElement(Header,null)
    )
    );
}