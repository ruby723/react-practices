import React, { Component } from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    onScroll(e){
        console.log();
    }
    render(){
        return (
            <div
            ref={ref => this.outterRef = ref }
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div>
                    <ul>
                        { Array.from({length: 100}, (_, i) => i).map(i =>
                            <li>
                                { `아이템 ${i} 입니다.` }
                            </li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    }
}