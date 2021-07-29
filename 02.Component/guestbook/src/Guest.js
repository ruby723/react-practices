import React from 'react';

export default function GuestList({ vo }){
    return(
      <ul class="Guestbook__List">
        <li class="Guestbook__List__Item">
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