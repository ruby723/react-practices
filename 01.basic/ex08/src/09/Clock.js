import React, {Component, Fragment } from 'react';

export default function(){
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        /*
            comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문을 사용할 수 있다.
        */
        <div 
        /*
            comment02: 여기서도 다중행 주석이 가능하다.
        */

        className='clock' title='시계' props01='Hello' props02='World'>
            {/* JSX는 HTML이 아니다. <!-- 주석입니다. --> 사용불가,,*/}
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            :       
            {('0' + minutes).slice(-2)}
            :
            {('0' + seconds).slice(-2)}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}