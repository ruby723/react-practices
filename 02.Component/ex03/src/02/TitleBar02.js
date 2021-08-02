import React from 'react';

export default function TitleBar02(){

    const onClickHeader = (e) => {
        console.log('TitleBar01 Click!!')
    }
    
    return (
        <h1 onClick={ (e)=>{
            console.log('click!!')
        }}
        style={{
            cursor: 'pointer'
        }}>
            ex03 - Functional Event Handler ( Class Component)
        </h1>
    )
}