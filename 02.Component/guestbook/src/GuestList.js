import React from 'react';
import Guest from './Guest';
import styles from './GuestList.css';

export default function GuestList({ guests }){
    return(
        <div className={styles.GuestList}>
            {guests.map(guest => <Guest key={guest.no} vo={guest}/>)}
        </div>
    )
}