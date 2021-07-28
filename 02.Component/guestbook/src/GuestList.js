import React from 'react';
import Guest from './Guest';

export default function GuestList({ guests }){
    return(
        <div className={'GuestList'}>
            {guests.map(guest => <Guest key={guest.no} vo={guest}/>)}
        </div>
    )
}