import React from 'react';
import styles from './assets/css/Guest.css';

export default function GuestList({ vo }){
    return(
      <ul class={styles.Guestbook__List}>
        <li class={styles.Guestbook__List__Item}>
          <strong>{vo.name}</strong>
          <p>{vo.message && vo.message.split('/n').map((line,index) => index>0 ?
            <Fragment>
              <br/>
              {line}
            </Fragment> : line)}
          </p>
          <strong></strong>
          <a href=''>삭제</a>
        </li>
      </ul>
    )
}