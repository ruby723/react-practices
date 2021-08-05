import React from 'react';
import './assets/Form.css';

export default function Form() {

    function onSubmit(e){
        e.preventDefault();
        console.log(e.target.email.value,":",e.target.password.value);
    }

    return (
        <form id="loginForm" name="loginForm" method="post" action="/do/not/post" onSubmit={onSubmit}>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value='' />
        
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ '' } />

            <input type="submit" value="로그인" />
        </form>
    );
}