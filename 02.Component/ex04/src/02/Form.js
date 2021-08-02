import React, { useState } from 'react';
import './assets/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState(1984);
    const [agreeProv, setAgreeProv] = useState('no');

    const onChangeInputName = function(e){
        // setName(e.target.value);
        // 10자 제한
        setName (e.target.value.substr(0,10));
    }
    const onChangeInputEmail = function(e){
        setEmail (e.target.value);

        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        // const result = await fetch('/user/emailcheck?email' + e.target.value);
        setValidEmail(re.test(e.target.value));
    }
    const onChangeInputGender = function(e){
        setGender (e.target.value);
    }
    const onChangeInputProv = function(e){
        const status = e.target.value === 'no' ? 'yes' : 'no';
        // API 호출
        const url = '/prov/agree?status=${status}';
        console.log(url);
        if(true){
            setAgreeProv(status);
        }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={ name } onChange={onChangeInputName}/>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={ email } onChange={onChangeInputEmail}/>
            {
                email === '' ? 
                null : 
                    validEmail ?
                    <FontAwesomeIcon icon={faCheckCircle} style={ {fontsize: 16, color: 'blue'} }/> : 
                    <FontAwesomeIcon icon={faTimesCircle} style={ {fontsize: 16, color: 'red'} }/>
            }
        
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ '' } />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } 
                                    checked={ gender === 'female' } onChange={onChangeInputGender}/>
                <label>남</label> <input type="radio" name="gender" value={ "male" }
                                    defaultChecked={ gender === 'male' } onChange={onChangeInputGender} />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name="birthYear" value={birthYear} onChange={e => setBirthYear(e.target.vlaue)}>
                <option value= { 1984 }>1984년</option>
                <option value= { 1985 }>1985년</option>
                <option value= { 1986 }>1986년</option>
                <option value= { 1987 }>1987년</option>
                <option value= { 1988 }>1988년</option>
                <option value= { 1989 }>1989년</option>
                <option value= { 1990 }>1990년</option>
            </select>

            <label htmlFor="selfDescription">자기소개</label>
            <textarea id='selfDescription' name='selfDescription' value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv"
                    value= { "yes" } checked={agreeProve} onChange={onChangeInputProv} />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}