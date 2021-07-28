import React, { Fragment } from 'react';
import GuestList from './GuestList';
import guests from './data.json';

export default function GuestBook(){

    return(
        <div className={'GuestBook'}>
            <GuestList key={guests.no} guests={guests} />
        </div>
    );
}