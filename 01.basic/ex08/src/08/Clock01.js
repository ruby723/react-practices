import React, {Component, Fragment } from 'react';

export default function(){
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const html =
    "<span>"+
        ('0'+(hours >12 ? hours -12 : hours)).slice(-2) +
        " : " +
        ('0' + minutes).slice(-2) +
        " : " +
        ('0' + seconds ).slice(-2) +
        "<script>alert('baboya');</script>"
        "</span>";

    return (
        // html 태그를 동적으로 생산하여 JSX에 추가하는 방식은 금지
        <div>
            {html}
        </div>
    )
}