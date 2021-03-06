import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({ no, name, message }) {
    return (
        <li className={ styles.Message__List__Item }>
            <strong>{ name }</strong>
            <p>
                { message && message.split('\n').map((line, index) => index > 0 ?
                    <Fragment key={`${no}-${index}`}>
                        <br/>
                        { line }
                    </Fragment> : line) }
            </p>
            <strong/>
            <a href=''>삭제</a>
        </li>
    );
}

Message.PropTypes = {
    no:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired
}