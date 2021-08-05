import React, {Component, useState} from 'react';
export default class Lifecycle extends Component {

    constructor(){
        super(...arguments);
        this.state={
            color: '#000'
        }
        console.log('[MOUNT01]: constructor');
    }
/**
 * 
 */
    static getDerivedStateFromProps(nextProps,prevState){
        console.log(`[MOUNT02][UPDATED01]: getDerivedStateFromProps(${nextProps},${prevState}`);
        return nextProps.color !== prevState.color ? {color: nextProps.color}: null
    }

    render(){
        return (
            <h3 style={ {
                width: 300,
                height: 50,
                backgroundColor: this.state.color
            } }/>
        )
    }

    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난후!
     * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
     * 1. 이벤트 등록
     * 2. 타이머 설정
     * 3. 네트 통신
     * 등 을 할 수 있다.
     */
    componentDidMount(){
        console.log(`[MOUNT04]: componentDidMount()`);
    }
}