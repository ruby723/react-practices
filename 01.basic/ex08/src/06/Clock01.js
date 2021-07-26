import React, {Component, Fragment } from 'react';

export default function(){
    const date = new Date();

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).splice(-2);
    const seconds = ('0' + date.getSeconds()).splice(-2);
    
    let session = 'AM';
    if (hours > 12){
        hours -=12;
        session = "PM";
    }

    return (
        <div>
            {hours}
            :
            {minutes}
            :
            {seconds}
            {session}
        </div>
    )
}