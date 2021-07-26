import React, { createElement } from 'react';
import Header from './header';
import Contents from './Contents';

export default function(){
    return (
    <div id='App'>
        <Header />
        <Contents />
    </div>
    );
}