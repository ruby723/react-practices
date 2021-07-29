import React, { Fragment } from 'react';
import GuestList from './GuestList';
import guests from './data.json';
import styles from './asstes/css/GuestBook.css';

export default function GuestBook(){

    return(
        <div className={styles.Guestbook}>
            <GuestList key={guests.no} guests={guests} />
        </div>
    );
}